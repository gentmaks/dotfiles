-- Local Rex copy mode: opens the focused pane's captured text in Neovim.
require("copy_mode")

-- Cmd-Shift-C opens the read-only snapshot. Change this binding if it conflicts.
rex.bind("cmd+shift+c", "copy_mode")

-- Cmd-Shift-F opens a new shell directly in a floating pane.
require("floating_pane")
rex.bind("cmd+shift+f", "float_shell")

-- Cmd-Shift-M minimizes the focused floating window.
rex.bind("cmd+shift+m", "pane.minimize_floating")

-- Floating tmux copy mode for the focused pane.
require("tmux-copy").setup({ key = "cmd+shift+o" })
