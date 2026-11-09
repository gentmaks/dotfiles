-- Open focused-pane tools in centered floating layers, using the caller's cwd.
local function fail(action, message)
  error(action .. ": " .. tostring(message), 0)
end

local function local_path(pwd)
  if type(pwd) ~= "string" or pwd == "" then return nil end

  -- Rex may report OSC 7 directories as file:// URLs; convert those to paths.
  if pwd:sub(1, 7) == "file://" then
    local host_and_path = pwd:sub(8)
    local slash = host_and_path:find("/", 1, true)
    if not slash then return nil end
    pwd = host_and_path:sub(slash)
    pwd = pwd:gsub("%%(%x%x)", function(hex)
      return string.char(tonumber(hex, 16))
    end)
  end

  if pwd:sub(1, 1) ~= "/" then return nil end
  return pwd
end

local function open_float(ctx, action, initial_input)
  if not ctx.block_id then fail(action, "no focused pane") end

  local result, err = rex.block.call(
    "com.superlogical.terminal", "pwd", { block_id = ctx.block_id }
  )
  if not result then fail(action, "read pane working directory: " .. tostring(err)) end

  local cwd = local_path(result.pwd)
  if not cwd then
    fail(action, "the focused pane has not reported a usable working directory")
  end

  local options = { cwd = cwd }
  if initial_input then options.initial_input = initial_input end

  local layer, layer_err = rex.session.new_layer{
    bounds = {0.15, 0.15, 0.70, 0.70},
    focus = true,
    layout = rex.layout.block{
      flavor = "com.superlogical.terminal.shell",
      options = options,
    },
  }
  if not layer then fail(action, layer_err) end
  return layer
end

rex.action{
  name = "float_shell",
  title = "New Floating Shell Here",
  description = "Open a floating shell in the focused pane's working directory.",
  run = function(ctx)
    return open_float(ctx, "float_shell")
  end,
}

rex.action{
  name = "float_lazygit",
  title = "Open Lazygit Here",
  description = "Open lazygit in a floating pane at the focused pane's working directory.",
  run = function(ctx)
    return open_float(ctx, "float_lazygit", "lg\n")
  end,
}
