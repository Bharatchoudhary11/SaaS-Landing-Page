const { execSync } = require('child_process');

function run(cmd) {
  console.log(`\n$ ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

try {
  run('npx next lint');
  run('npx tsc --noEmit');

  const { readdirSync, readFileSync } = require('fs');
  const { join } = require('path');

  function getFiles(dir) {
    let files = [];
    for (const file of readdirSync(dir, { withFileTypes: true })) {
      if (file.isDirectory()) {
        files = files.concat(getFiles(join(dir, file.name)));
      } else if (file.name.endsWith('.tsx')) {
        files.push(join(dir, file.name));
      }
    }
    return files;
  }

  const patterns = [/framer-motion/, /useEffect/, /useState/, /window\./, /document\./];
  const missing = [];

  for (const file of getFiles(join(__dirname, 'src'))) {
    const text = readFileSync(file, 'utf8');
    if (patterns.some((p) => p.test(text))) {
      if (!/^\s*("use client"|'use client');/m.test(text)) {
        missing.push(file.replace(__dirname + '/', ''));
      }
    }
  }

  if (missing.length) {
    console.warn('\nMissing "use client" directive in:\n' + missing.join('\n'));
  }

  run('npx next build');
} catch (err) {
  console.error('Predeploy check failed');
  process.exit(1);
}
