-- tmux copy mode for Rex panes. See README.md.
local M = {}

-- Read the script once and run it with bash -c, so copy mode also works in
-- panes on remote hosts that don't have this repo
local f = assert(io.open(debug.getinfo(1, "S").source:gsub("^@", ""):match("^(.*/)") .. "rex-tmux-copy"))
local script = f:read("*a")
f:close()

-- Find a block's rect in a layer's layout tree
local function rect(node, id)
  if node == nil then
    return nil
  end
  if node.block_id == id then
    return node.rect
  end
  return node.split and (rect(node.split.before, id) or rect(node.split.after, id))
end

local function register_action(name, title, floating)
  rex.action({
    name = name,
    title = title,
    run = function(ctx)
      local view, err = rex.session.view({})
      if view == nil then
        error(err, 0)
      end
      for _, w in ipairs(view.windows or {}) do
        for _, layer in ipairs(w.layers or {}) do
          -- Do nothing inside a copy mode pane
          for _, b in ipairs(layer.blocks or {}) do
            if b.block_id == ctx.block_id and b.label == "copy mode" then
              return
            end
          end
          local source_bounds = rect(layer.layout, ctx.block_id)
          if source_bounds then
            -- Cover the source pane, or the whole window if it is zoomed.
            -- Opening the float unzooms the pane, so the script zooms it again.
            local zoomed = w.zoomed_block_id == ctx.block_id
            local bounds = floating and { 0.15, 0.15, 0.70, 0.70 } or source_bounds
            if zoomed and not floating then
              bounds = { 0, 0, 1, 1 }
            end
            local block_options = {
              shell = "none",
              command = { "bash", "-c", script, "rex-tmux-copy", ctx.block_id, zoomed and "zoomed" or "-" },
            }
            if not floating then
              -- Match the source size so copy mode doesn't open at 80x24.
              local size = rex.block.call("com.superlogical.terminal", "size", { block_id = ctx.block_id })
              block_options.size = size and { columns = size.columns, rows = size.rows } or nil
            end
            local _, err = rex.session.new_layer({
              window_id = w.window_id,
              bounds = bounds,
              focus = true,
              layout = rex.layout.block({
                flavor = "com.superlogical.terminal.shell",
                label = "copy mode",
                options = block_options,
              }),
            })
            if err ~= nil then
              error(err, 0)
            end
            return
          end
        end
      end
      error("tmux copy mode: no pane " .. tostring(ctx.block_id), 0)
    end,
  })
end

function M.setup(opts)
  opts = opts or {}

  register_action("tmux_copy_mode", "Copy Mode (tmux)", false)
  register_action("tmux_copy_mode_float", "Copy Mode (tmux, floating)", true)

  if opts.key ~= false then
    rex.bind(opts.key or "ctrl+a>[", "tmux_copy_mode")
  end
  if opts.float_key then
    rex.bind(opts.float_key, "tmux_copy_mode_float")
  end
end

return M
