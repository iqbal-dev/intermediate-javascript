

const arr = [11, 23, 454, 56, 456, 67];
let max = arr[0]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > max) {
        max = element;
    }
}
console.log(max);