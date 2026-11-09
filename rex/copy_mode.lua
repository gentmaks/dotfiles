-- Temporary Vim-style copy mode for Rex.
-- Open the focused pane's screen and scrollback in a full-window Neovim layer.
-- v/V and normal Vim motions select text; y copies to the system clipboard and closes.
-- q exits without copying.

local rex_cli = "/Applications/Rex Beta.app/Contents/Helpers/Rex Server.rex/Contents/MacOS/rex"
local nvim = "/opt/homebrew/bin/nvim"

local function fail(message)
  error("copy_mode: " .. tostring(message), 0)
end

local function run(argv, label)
  local result, err = rex.exec(argv)
  if not result then fail(label .. ": " .. tostring(err)) end
  if not result.ok then
    fail(label .. ": " .. tostring(result.stderr or result.exit_code or "command failed"))
  end
  return result.stdout or ""
end

local function trim(s)
  return (s:gsub("^%s+", ""):gsub("%s+$", ""))
end

rex.action{
  name = "copy_mode",
  title = "Copy Mode (Neovim)",
  description = "Navigate and select the focused pane's screen and scrollback in Neovim.",
  run = function(ctx)
    if not ctx.block_id or not ctx.session_id then
      fail("no focused pane or session")
    end

    -- Unlike terminal.format, rex capture is documented to include scrollback.
    local text = run({
      rex_cli, "capture",
      "--session", ctx.session_id,
      "--block", ctx.block_id,
      "--format", "text",
      "--trim",
    }, "capture terminal")

    -- mktemp creates a unique, user-private file for the snapshot.
    local path = trim(run({"/usr/bin/mktemp", "-t", "rex-copy-mode.XXXXXX"}, "create temp file"))
    if path == "" then fail("mktemp returned an empty path") end

    local file, err = io.open(path, "wb")
    if not file then
      os.remove(path)
      fail("write temp file: " .. tostring(err))
    end
    local wrote, write_err = file:write(text)
    file:close()
    if not wrote then
      os.remove(path)
      fail("write temp file: " .. tostring(write_err))
    end

    local vim_cmds = table.concat({
      "set clipboard=unnamedplus nomodifiable readonly",
      "nnoremap <silent> q :qa!<CR>",
      "execute 'normal! Gzb'",
      "autocmd TextYankPost * call timer_start(0, {-> execute('qa!')})",
    }, " | ")

    local shell_script = [[
      trap 'rm -f "$1"; "$4" focus -s "$5" "$2" >/dev/null 2>&1' EXIT
      "$3" -u NONE -i NONE -n -c "$6" "$1"
    ]]

    local layer, layer_err = rex.session.new_layer{
      bounds = {0, 0, 1, 1},
      focus = true,
      layout = rex.layout.block{
        flavor = "com.superlogical.terminal.shell",
        options = {
          command = {
            "/bin/sh", "-c", shell_script,
            "rex-copy-mode", path, ctx.block_id, nvim, rex_cli, ctx.session_id, vim_cmds,
          },
        },
      },
    }
    if not layer then
      os.remove(path)
      fail(layer_err)
    end
    return layer
  end,
}
