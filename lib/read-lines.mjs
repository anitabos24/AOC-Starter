import fs from 'node:fs';
const filename = process.argv.splice(-1)[0];
const lines = fs.readFileSync(filename, 'utf-8').split('\n');
export default lines;