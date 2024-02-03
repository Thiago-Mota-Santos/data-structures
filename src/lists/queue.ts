type List = {
   arr: string[]
}

type Item = {
    item: string
}
    
const items: string[] = []

function enqueue ({ item }: Item){
    items.push(item)
    
    return items
}

function isFirst(){
    const first = items[0]
    
    return first
}

function dequeue (){
   items.shift()


   return items

}

function isEmpty({ arr }: List){
    if(!arr) return true;

    return false;
}

function isLast(){
    const last = items[items.length - 1];

    return last
}

console.log(enqueue({item: "3"}))
console.log(enqueue({item: "5"}))
console.log(enqueue({item: "9"}))
console.log(dequeue())
console.log(isFirst())
console.log(isLast())


