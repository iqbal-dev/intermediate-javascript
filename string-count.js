

const str = "The     search will start at the specified position";
let result = 1;
for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element == " " && str[i-1]!=" ") {
        result++;
    }
    
}
console.log(result);