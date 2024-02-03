function linkedList(list: ListNode | null, data: number) {
    let newNode: ListNode | null | undefined = { data, next: null };

    if(list === null) return newNode;

    let current: ListNode | null | undefined = list;

    while(current){
        current = current.next
    }

    current.next = newNode

    return list
    
}