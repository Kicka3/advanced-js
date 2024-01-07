// +---+---+---+---+
// | H | e | l | l |   From left to right
// +---+---+---+---+
// | o |   | W | o |   and from top to bottom
// +---+---+---+---+
// | r | l | d | ! |   each row separated by "\n"
// +---+---+---+---+
// |   |   |   |   |
// +---+---+---+---+
//    Some examples:
//    pattern(3, 3, "codewars") should return:
// +---+---+---+
// | c | o | d |
// +---+---+---+
// | e | w | a |
// +---+---+---+
// | r | s |   |
// +---+---+---+
//
//    pattern(4, 3, "Nice pattern") should return:
// +---+---+---+
// | N | i | c |
// +---+---+---+
// | e |   | p |
// +---+---+---+
// | a | t | t |
// +---+---+---+
// | e | r | n |
// +---+---+---+
//
//    pattern(3, 4, "Nice pattern") should return:
// +---+---+---+---+
// | N | i | c | e |
// +---+---+---+---+
// |   | p | a | t |
// +---+---+---+---+
// | t | e | r | n |
// +---+---+---+---+

function pattern(rows,columns,str){
   const arr = str.split``
   let i=0;
   const s = ('+---'.repeat(columns)+'+'+'\n'+'|   '.repeat(columns)+'|'+'\n').repeat(rows)+'+---'.repeat(columns)+'+'
   return s.replace(/\s\s\s/g,v=>' '+(arr[i++]||' ')+' ')
}