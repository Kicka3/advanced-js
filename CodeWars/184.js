const makeNegative1 = num => num < 0 ? num : num = -num;

function makeNegative(num) {
   if (num < 0) {
        return num;
    } else if (num === 0) {
        return num;
    } else {
        return num = -num
    }
}