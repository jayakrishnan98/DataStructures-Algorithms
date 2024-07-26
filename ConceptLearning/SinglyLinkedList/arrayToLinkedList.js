function ListNode(val, next) {
  try {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  } catch (error) {
    console.log(error);
  }
}

function arrayToList(arr) {
  try {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    return head;
  } catch (error) {
    console.log(error);
  }
}
