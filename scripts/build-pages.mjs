import { renameSync, writeFileSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

// Exclude server-only API routes from the static export, restoring them afterward.
renameSync('app/api', '.pages-api');
const devTypes = existsSync('.next/dev/types');
if (devTypes) renameSync('.next/dev/types', 'node_modules/.pages-dev-types');
try {
  const result = spawnSync(process.execPath, ['node_modules/next/dist/bin/next', 'build'], {
    stdio: 'inherit',
    env: { ...process.env, NEXT_PUBLIC_GITHUB_PAGES: 'true', NEXT_PUBLIC_SITE_URL: 'https://pacman656.github.io/namesa-landing' },
  });
  if (result.status !== 0) process.exitCode = result.status ?? 1;
  else writeFileSync('out/.nojekyll', '');
} finally {
  renameSync('.pages-api', 'app/api');
  if (devTypes) renameSync('node_modules/.pages-dev-types', '.next/dev/types');
}
