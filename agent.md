# Agent Guide

## Goal

Provide a fast, safe entry point to GitHub repository creation from Chrome and Microsoft Edge.

## Architecture

- Manifest V3
- Popup UI
- Side Panel UI
- Service worker for navigation
- GitHub owns authentication and repository creation

## Rules

1. Do not store GitHub tokens, OAuth credentials, cookies, or repository data.
2. Do not add `host_permissions` unless an ADR explicitly approves them.
3. Do not add content scripts for the MVP.
4. Keep Chrome and Edge implementations shared.
5. The MVP opens `https://github.com/new`; it does not submit a repository automatically.
6. Future DOM automation or API creation requires a new ADR.

## Validation

- `manifest.json` is valid JSON.
- All referenced local resources exist.
- Popup opens GitHub New Repository.
- Side Panel opens GitHub New Repository.
- Extension has no unnecessary permissions.

## Release

Version is kept in `manifest.json`. Release tags use `v<manifest version>`, for example `v0.1.0`.
