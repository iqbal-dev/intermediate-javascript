

const str = "The     search will start at the specified position";
let newStr = "";
for (let i = str.length - 1; 0 <= i; i--) {
    newStr += str[i];
}
console.log(newStr);