function smaller(nums) {
    let array = nums.map((item, index) => {
        return nums.slice(index).filter(num => num < item).length;
    })
    console.log(array)
    return array;
}


 smaller([5, 4, 3, 2, 1])

const smaller = nums => nums.map((item, index) => nums.slice(index).filter(num => num < item).length)
 smaller([5, 4, 3, 2, 1])

 const solution = str => str.split('').reverse().join('');
  