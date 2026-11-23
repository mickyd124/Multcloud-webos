# MultCloud TV for LG webOS

Unofficial TV-remote-friendly launcher for the official [MultCloud](https://www.multcloud.com/) website. This is **not** a native cloud file browser, native video player, or official MultCloud application. MultCloud logins and playback depend on webOS browser compatibility.

## Add to Homebrew Channel

In the webOS Homebrew Channel, open **Settings → Add repository**, then paste this **raw JSON feed URL**:

```text
https://raw.githubusercontent.com/mickyd124/Multcloud-webos/main/repo.json
```

Save, refresh the apps list and select **MultCloud TV → Install**. The alternative feed at `webosbrew/apps.json` contains the same catalogue. **Do not enter the GitHub repository homepage as the feed URL.**

The feed points to the release manifest uploaded by the GitHub Actions build. The manifest contains the real IPK download URL, SHA-256 checksum and package size.

## Build / direct install

The **Build and publish MultCloud TV IPK** GitHub Actions workflow packages the app, generates its Homebrew manifest, uploads a build artifact, and publishes the public IPK and manifest as a versioned GitHub Release.

For local packaging, install the CLI with `npm install -g @webos-tools/cli` and run `ares-package -o dist .` from a clean directory containing only the app's `appinfo.json`, `index.html` and icon assets.

**App ID:** `com.mickyd124.multcloud` — **Version:** `1.0.0`.

## Security and compatibility

No cloud credentials are bundled, stored, or collected by this launcher. Authentication takes place on the official MultCloud website. No root access is required by the app itself, though installing Homebrew Channel or third-party apps may require a supported installation method. Not affiliated with or endorsed by MultCloud or LG.
