function anyMatch(head, p) {
   return head ? p(head.data) || anyMatch( head.next, p ) : false
}

function allMatch(head, p) {
   return head ? p(head.data) && allMatch( head.next, p ) : true
}