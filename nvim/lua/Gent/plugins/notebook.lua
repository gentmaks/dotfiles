return {
    {
        "GCBallesteros/jupytext.nvim",
        lazy = false,
        opts = {
            style = "markdown",
            output_extension = "md",
            force_ft = "markdown",
        },
    },
    {
        "benlubas/molten-nvim",
        version = "^1.0.0",
        build = ":UpdateRemotePlugins",
        lazy = false,
        init = function()
            vim.g.molten_output_virt_lines = true
            vim.g.molten_virt_text_output = true
            vim.g.molten_virt_lines_off_by_1 = true
            vim.g.molten_auto_open_output = false
            local project_python = vim.fn.getcwd() .. "/.venv/bin/python"
            if vim.fn.executable(project_python) == 1 then
                vim.g.python3_host_prog = project_python
                vim.env.PATH = vim.fn.fnamemodify(project_python, ":h") .. ":" .. vim.env.PATH
            end
        end,
        config = function()
            vim.keymap.set("n", "<localleader>mi", ":MoltenInit<CR>", { silent = true, desc = "Initialize Jupyter kernel" })
            vim.keymap.set("n", "<localleader>rl", ":MoltenEvaluateLine<CR>", { silent = true, desc = "Run current line" })
            vim.keymap.set("n", "<localleader>os", ":noautocmd MoltenEnterOutput<CR>", { silent = true, desc = "Open cell output" })
            vim.keymap.set("v", "<localleader>r", ":<C-u>MoltenEvaluateVisual<CR>gv", { silent = true, desc = "Run selection" })
            vim.api.nvim_create_autocmd("BufWritePost", {
                pattern = "*.ipynb",
                callback = function()
                    if require("molten.status").initialized() == "Molten" then
                        vim.cmd("MoltenExportOutput!")
                    end
                end,
            })
        end,
    },
    {
        "quarto-dev/quarto-nvim",
        dependencies = { "jmbuhr/otter.nvim", "nvim-treesitter/nvim-treesitter" },
        lazy = false,
        opts = {
            lspFeatures = { enabled = false },
            codeRunner = { enabled = true, default_method = "molten" },
        },
        config = function(_, opts)
            require("quarto").setup(opts)
            vim.api.nvim_create_autocmd("FileType", {
                pattern = "markdown",
                callback = function()
                    require("quarto").activate()
                end,
            })
            local runner = require("quarto.runner")
            vim.keymap.set("n", "<localleader>rr", runner.run_cell, { silent = true, desc = "Run current notebook cell" })
            vim.keymap.set("n", "<localleader>ra", runner.run_above, { silent = true, desc = "Run notebook cells above" })
            vim.keymap.set("n", "<localleader>rA", runner.run_all, { silent = true, desc = "Run notebook cells" })
        end,
    },
}
