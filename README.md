# MultCloud TV for LG webOS

Unofficial TV-remote-friendly shared companion client and launcher for the official [MultCloud](https://www.multcloud.com/) website. The companion cloud library uses Orbit's authenticated API, not an official MultCloud API. The official website remains a separate option.

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

**App ID:** `com.mickyd124.multcloud` — **Version:** `1.1.0`.

## Security and compatibility

No cloud credentials are bundled or collected by this launcher. Official-site authentication takes place on MultCloud. Companion credentials and account tokens are handled by Orbit's existing server and are stored locally on the iPhone; the TV saves the connection token. No root access is required by the app itself, though installing Homebrew Channel or third-party apps may require a supported installation method. Not affiliated with or endorsed by MultCloud or LG.

## iPhone companion setup

Install the [shared iSH companion](https://github.com/mickyd124/orbit-player/blob/main/scripts/ish-install.sh) on your iPhone. Both apps start by default; select MultCloud TV or Both in the browser dashboard. On your TV open MultCloud TV, enter `http://PHONE-IP:3000`, then select Open cloud library. Enter the printed access token in Settings, save, and open Cloud library. The same connected accounts can be opened in Orbit Player. MEGA and WebDAV need account credentials; other providers require their own OAuth/API registrations. Keep iSH foreground and use only a trusted local network. The remote web view depends on the LG webOS browser; physical TV testing remains required.

## Android, Windows and Linux companion hosts

The same companion API can now run on Android (Termux), Windows, Linux and iPhone iSH. See the [shared companion installation guide](https://github.com/mickyd124/orbit-player/blob/main/scripts/COMPANION.md). Choose MultCloud TV or Both in the browser dashboard, then enter the host Wi-Fi IP address and access token in the TV app. No additional TV app upgrade is needed for this host change.

## Universal companion browser dashboard

The [shared companion control centre](https://github.com/mickyd124/orbit-player/tree/main/server/dashboard) is included in the current Orbit companion installers. Open `http://HOST-IP:3000/companion` from any browser on your trusted local network (or `http://127.0.0.1:3000/companion` on the host). Unlock with your companion access token. Select MultCloud TV or Both and use the same host URL and token in this TV app. Both apps share one server and cloud account store. See the [installation and dashboard guide](https://github.com/mickyd124/orbit-player/blob/main/scripts/COMPANION.md#browser-control-centre). On iSH open Safari manually; iOS background suspension may interrupt service. No TV IPK update is required for the dashboard.
