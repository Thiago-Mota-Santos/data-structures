type Tree = {
    left: number;
    right: number;
    tree: Tree;
}

const isEmpty = (tree: Tree) =>{
    if(!tree) return false;
}



console.log(isEmpty())