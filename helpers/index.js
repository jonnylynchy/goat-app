import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

export const getFile = async () => {
    const filePath = resolve('data/goats.json')
    const contents = await readFile(filePath, { encoding: 'utf8' });

    return JSON.parse(contents);
}
