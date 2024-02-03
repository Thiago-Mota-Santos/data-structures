import { createHash } from "crypto";

export const getHash = (data: string): string => {
    return createHash('sha256').update(data.toString()).digest('hex');
}


export const makeRoot = (arr: Array<MerkleNode>): MerkleNode
