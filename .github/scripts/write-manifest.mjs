import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const app = JSON.parse(readFileSync('appinfo.json', 'utf8'));
const packageName = `${app.id}_${app.version}_all.ipk`;
const packageData = readFileSync(join('dist', packageName));
const releaseUrl = `https://github.com/mickyd124/Multcloud-webos/releases/download/v${app.version}/`;

const manifest = {
  id: app.id,
  version: app.version,
  type: app.type,
  title: app.title,
  appDescription: 'Unofficial TV-friendly shared Orbit/iSH cloud companion client and official MultCloud website launcher. Playback depends on TV codecs.',
  iconUri: 'https://raw.githubusercontent.com/mickyd124/Multcloud-webos/main/largeIcon.png',
  sourceUrl: 'https://github.com/mickyd124/Multcloud-webos',
  rootRequired: false,
  ipkUrl: releaseUrl + packageName,
  ipkHash: {
    sha256: createHash('sha256').update(packageData).digest('hex')
  },
  ipkSize: packageData.length
};
const outputPath = join('dist', `${app.id}.manifest.json`);
writeFileSync(outputPath, JSON.stringify(manifest, null, 2) + '\n');
console.log('Created', outputPath, 'for', packageName);
