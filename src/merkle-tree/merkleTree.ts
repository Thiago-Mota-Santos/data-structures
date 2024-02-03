type MerkleTree = {
    value: string;
    left: MerkleTree | null;
    right: MerkleTree | null;
}

export function merkleTree({ left, right, value} : MerkleTree){
    return {
        value,
        left, 
        right, 
    }
}

const leafNode1: MerkleTree = { value: "Leaf 1", left: null, right: null };
const leafNode2: MerkleTree = { value: "Leaf 2", left: null, right: null };

const rootNode: MerkleTree = merkleTree({
    value: "Root",
    left: leafNode1,
    right: leafNode2,
});

console.log(rootNode);

