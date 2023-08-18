function loop_size(node){
   var turtle = node;
   var rabbit = node;
   
   // Find a point in the loop.  Any point will do!
   // Since the rabbit moves faster than the turtle
   // and the kata guarantees a loop, the rabbit will
   // eventually catch up with the turtle.
   do {
     turtle = turtle.getNext();
     rabbit = rabbit.getNext().getNext();
}
while (turtle != rabbit);

// The turtle and rabbit are now on the same node,
// but we know that node is in a loop.  So now we
// keep the turtle motionless and move the rabbit
// until it finds the turtle again, counting the
// nodes the rabbit visits in the mean time.
var count = 0;
do {
  ++count;
  rabbit = rabbit.getNext();
}
while (turtle != rabbit);

// voila
return count;
}