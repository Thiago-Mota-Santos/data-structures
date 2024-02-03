import { debugConsole } from "../generics/debugConsole";

type ListNode = {
    data: number;
    next?: ListNode | null;
}


function linkedList(list: ListNode | null , data: number){
    let newNode: ListNode = { data, next: null };

    newNode.data = data;
    newNode.next = list; 

    return newNode
}

function search(list: ListNode | null , value: number){
    let p: ListNode | null | undefined;
   
    for(p = list; p !== null; p = p?.next){
        if(p?.data === value){
            return true;
        }
    }

    return false;
}

function printList(list: ListNode | null | undefined){
  if(!list) return;
  
  console.log(list.data)
  
  printList(list.next)
}

function retiraRecursivo(list: ListNode | null | undefined, value: number){
  if(!list) return list;

  if(list.data === value){
    list = list.next  
  }
  
  else{
    list.next = retiraRecursivo(list.next, value);
  }
  return list
}

function equalList(list1: ListNode | null | undefined, list2: ListNode | null | undefined) {
  let p: ListNode | null | undefined;
   
  for(p = list; p !== null; p = p?.next){
    if(list1?.data === list2?.data){
      return true;
    }
  }

  return false;
}

function retira(list: ListNode | null | undefined, value: number){

  let before: ListNode | null = null
  let p = list

  while(p && p?.data !== value){
    before = p;
    p = p?.next;
}
  if(p === null){
    return list;
  }

  if(before === null){
    list = p?.next;
  }else{
    before.next = p?.next;
  }

  return list;


}

function listIsEmpty(list: ListNode | null){
    return list === null
}

let list: ListNode | null | undefined = null
let list2: ListNode | null | undefined = null

list = linkedList(list, 5)
list = linkedList(list, 3)
list2 = linkedList(list, 5)
list2 = linkedList(list, 3)

console.log(equalList(list, list2))
// list = linkedList(list, 13)
// list = linkedList(list, 6)
// list = retiraRecursivo(list, 5)
// list = retiraRecursivo(list, 6)


// list = retiraRecursivo(list, 5)

// listIsEmpty(list);

// console.log("value searched? " + search(list, 5))
// console.log("List is empty? " + listIsEmpty(list));
// console.log(retira(list, 5))
// console.log(retira(list, 3))
// console.log(retira(list, 4))
// printList(list)



// debugConsole(list)


export { linkedList }