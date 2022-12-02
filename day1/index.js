import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

try {
  var cals = await readFile(join(__dirname, 'data.js'), { encoding: 'utf8' });
  var maxCals = cals.split('\n\n').reduce((max, inventory) => Math.max(
      max,
      inventory.split('\n').reduce((total, item) => total + Number(item), 0),
  ), 0);
  console.log('maxCals', maxCals);
} catch (error) {
  console.error('there was an error:', error.message);
}
