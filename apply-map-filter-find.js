const students = [
    {
        id: 1,
        name: 'Nasim'
    },
    {
        id: 2,
        name: 'Jubayer'
    },
    {
        id: 3,
        name: 'Rashed'
    },
    {
        id: 4,
        name: 'Iqbal'
    },
    {
        id: 1,
        name: 'Nasim'
    },
]

let output = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    output.push(element.name);
    
}
console.log(output);


/*using map*/
const result = students.map(x => x.name);
console.log(result);

/*using find*/
const name = students.find(x => x.name =='Nasim')
console.log(name)

/*using filter*/
const filt = students.filter(x => x.id > 2);
console.log(filt);