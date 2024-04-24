// write code here
const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];
const combinedArray = [5, ...nums1, -6, -1, ...nums2];
const sum = combinedArray.reduce((total, num) => total + num, 0);

console.log(combinedArray); 
console.log(sum); 
