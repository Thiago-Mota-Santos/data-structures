import * as crypto from 'crypto';

export const getHash = (data: string): string => {
  return crypto.createHash('sha256').update(data.toString()).digest('hex');
}

const hash = 'Exemplo de dados para hash';
const hashResult = getHash(hash);

console.log(`String original: ${hash}`);
console.log(`Hash resultante: ${hashResult}`);