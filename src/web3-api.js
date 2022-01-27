import { getFilesFromPath, Web3Storage } from 'web3.storage';
import { config } from '../config.js';

export async function upload(paths) {
    const token = config.web3StorageToken;

    if (!token) {
        throw new Error('A token is needed. You can create one on https://web3.storage');
    }

    if (!paths || paths.length < 1) {
        throw new Error('Please supply the path to a file or directory');
    }

    if(!Array.isArray(paths)) {
        paths = [paths];
    }

    const files = [];
    for (const path of paths) {
        const pathFiles = await getFilesFromPath(path)
        files.push(...pathFiles)
    }

    console.log(`Uploading ${files.length} files`)
    return await new Web3Storage({ token }).put(files, { maxRetries: 10 });
}