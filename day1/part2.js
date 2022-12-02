import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default (async function() {
  try {
    const count = 0;
    const allCals = await readFile(join(__dirname, 'data.js'), { encoding: 'utf8' });
    const topThree = allCals.split('\n\n').reduce((topThree, inventory) => {
        const elfCals = inventory.split('\n').reduce((total, item) => {
          return total + Number(item);
        }, 0);
        topThree.push(elfCals);
        topThree.sort((a, b) => b - a);
        topThree.pop();
        return topThree;
      }, [0, 0, 0]);
    return topThree.reduce((total, count) => total + count, 0);
  } catch (error) {
    console.error('there was an error:', error.message);
  }
})();
