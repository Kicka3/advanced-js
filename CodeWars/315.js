function maxSum(root) {
   if (!root) return 0
   return root.value + Math.max(maxSum(root.left),maxSum(root.right))
}