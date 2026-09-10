# repo-create-ext

GitHub New Repository launcher for Chrome and Microsoft Edge.

## Contents

- [Agent guide](agent.md)
- [User guide](docs/guide.html)

## MVP

- Popup → `https://github.com/new`
- Side Panel → `https://github.com/new`
- No GitHub token or OAuth credential
- No content script
- No external backend
- Manifest V3

## Development

1. Clone this repository.
2. Open `chrome://extensions` or `edge://extensions`.
3. Enable Developer mode.
4. Load unpacked and select the repository directory.
5. Pin the extension and test both Popup and Side Panel.

## Release

Tagged releases are packaged automatically by GitHub Actions as a browser-extension ZIP and published to the GitHub Release page.
