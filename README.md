# Gent's macOS dotfiles

This repository is the contents of `~/.config` on my Mac. It holds configuration for Neovim, Ghostty, Fish, Git, GitHub CLI, Raycast, Zed, btop, htop, cmux, OpenCode, and other tools. The configs are personal and may refer to tools or paths that are specific to this machine.

## Set up a fresh Mac

1. Install Apple's command line tools and Homebrew:

   ```sh
   xcode-select --install
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. Install Git, clone this repository directly into the macOS config directory, and enter it. If `~/.config` already exists, back it up and merge any needed files before cloning.

   ```sh
   brew install git
   git clone https://github.com/gentmaks/dotfiles.git ~/.config
   cd ~/.config
   ```

3. Install the applications referenced by the configs. Install GUI apps from their official sources if a Homebrew cask is unavailable.

   ```sh
   brew install neovim fish btop htop gh
   brew install --cask ghostty raycast zed
   ```

   cmux, OpenCode, Herdr, and Cagent are also represented in this repo; install them using their current official instructions. Sign into GitHub CLI (`gh auth login`) and into the relevant Raycast extensions (Linear, Zoom, and Google Chrome) after installing the apps.

4. Start Neovim once to install its plugins and language servers:

   ```sh
   nvim
   ```

   Mason manages several Neovim language servers. Install any external tools used by a project (for example compilers and formatters) separately.

5. Open Ghostty, Raycast, Zed, and the other apps once so they can read their config from `~/.config`. Set Fish as the login shell if desired:

   ```sh
   echo "$(brew --prefix)/bin/fish" | sudo tee -a /etc/shells
   chsh -s "$(brew --prefix)/bin/fish"
   ```

## Keeping it in sync

The repository itself lives at `~/.config`, so edits to tracked files can be committed and pushed from that directory. Review changes before pushing, especially app-generated files under `raycast/extensions`.

## Notes

- `gh/hosts.yml` contains GitHub CLI account metadata only; authenticate on each machine with `gh auth login` rather than copying credentials.
- Some application state, credentials, caches, and installed dependencies are machine-specific and are intentionally excluded.
- Raycast extensions are stored as their app-managed extension directories. Raycast may regenerate their compiled files after an extension update.
