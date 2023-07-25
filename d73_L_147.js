/**  -----147. Insertion Sort List------- */
var insertionSortList = function (head) {
  let cur = head.next;
  let prev = head;
  while (cur) {
    if (prev.val > cur.val) {
      let next = cur.next;
      // we will start from the begining
      // to find the appropriate pos
      // for the current node
      let pos = head;
      let prevPos = null;
      while (pos.val < cur.val && pos) {
        prevPos = pos;
        pos = pos.next;
      }
      if (prevPos) {
        prevPos.next = cur;
      }
      if (!prevPos) head = cur;
      cur.next = pos;
      prev.next = next;
      cur = next;

      continue;
    }
    prev = cur;
    cur = cur.next;
  }
  return head;
};
