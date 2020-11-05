const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = [];
/*****normal for loop to square of this array *****/
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    result.push(element*element)
}
console.log(result)

/***** map ******/
const square = arr.map(x => x * x);
console.log(square);

/***** filter ******/
const bigger = arr.filter(x => x > 5);
console.log(bigger);

/***** find ******/
const smaller = arr.find(x => x < 5);
console.log(smaller);