import { readFile } from 'node:fs/promises';

try {
  var cals = await readFile('./data.js', { encoding: 'utf8' });
  var maxCals = cals.split('\n\n').reduce((max, inventory) => {
    return Math.max(
        max, 
        inventory.split('\n').reduce((total, item) => total + Number(item), 0)
    );
  }, 0);
  console.log('maxCals', maxCals);
} catch (error) {
  console.error('there was an error:', error.message);
}
