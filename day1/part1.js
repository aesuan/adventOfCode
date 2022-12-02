import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default (async function() {
  try {
    const cals = await readFile(join(__dirname, 'data.txt'), { encoding: 'utf8' });
    const maxCals = cals.split('\n\n').reduce((max, inventory) => Math.max(
        max,
        inventory.split('\n').reduce((total, item) => total + Number(item), 0),
    ), 0);
    return maxCals;
  } catch (error) {
    console.error('there was an error:', error.message);
  }
})();
