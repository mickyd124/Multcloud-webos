# MultCloud TV for LG webOS

An unofficial TV-remote-friendly launcher for the official [MultCloud](https://www.multcloud.com/) website.

This is **not** a native cloud browser, streaming media player, or official MultCloud app. It opens the official website from an app start screen. MultCloud sign-in, third-party cloud logins and video playback may not work on all webOS TV versions.

## Install

Use the GitHub Actions **Build MultCloud TV IPK** workflow to package the webOS app, then download its artifact and install via LG webOS Developer Mode using `ares-install`, or a compatible homebrew installer.

For local packaging: `npm install -g @webos-tools/cli`, then run `ares-package -o dist .` from a clean app-only directory containing `appinfo.json`, `index.html` and the icons.

**App ID:** `com.mickyd124.multcloud` — **Version:** `1.0.0`.

No cloud credentials are bundled, stored or collected by the launcher. Authentication remains on the MultCloud website. Not affiliated with or endorsed by MultCloud or LG.
