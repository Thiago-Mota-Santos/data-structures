export type MerkleNode = {
    value: string;
    left: MerkleNode | null;
    right: MerkleNode | null;
}

export function merkleNode({ left, right, value } : MerkleNode){
    return {
        value,
        left, 
        right, 
    }
}

const leafNode1: MerkleNode = { value: "Leaf 1", left: null, right: null };
const leafNode2: MerkleNode = { value: "Leaf 2", left: null, right: null };

const rootNode: MerkleNode = merkleNode({
    value: "Root",
    left: leafNode1,
    right: leafNode2,
});

console.log(rootNode);

