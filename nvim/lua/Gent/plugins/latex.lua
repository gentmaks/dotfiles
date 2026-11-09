return {
    {
        "lervag/vimtex",
        lazy = false,
        init = function()
            -- The installed Neovim is 0.11; keep VimTeX enabled on this version.
            vim.g.vimtex_version_check = 0
            -- Open the PDF in Sioyek without a SyncTeX forward search/highlight.
            vim.g.vimtex_view_method = "general"
            vim.g.vimtex_view_general_viewer = "open"
            vim.g.vimtex_view_general_options = "-a Sioyek @pdf"
            vim.g.vimtex_compiler_method = "latexmk"
            vim.g.vimtex_compiler_latexmk = {
                continuous = 1,
            }
        end,
    },
}
