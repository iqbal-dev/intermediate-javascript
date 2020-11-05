

const arr = [1, 2, 3, 4, 1, 2, 3, 4, 5];
const uniqueArray = [];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (uniqueArray.indexOf(element) == -1) {
       uniqueArray.push(element);
   }
}
console.log(uniqueArray)