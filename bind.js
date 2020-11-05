

const normalPerson = {
    firstName: 'Md Iqbal',
    lastName: 'Hossain',
    salary: 10000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    billCharge: function (charge) {
        console.log(this)
        this.salary = this.salary - charge;
        return this.salary;
    }
}
// console.log(normalPerson.billCharge(200))
const friendlyPerson = {
    firstName: 'Md Abir',
    lastName: 'Talukder',
    salary: 9500,
}
const roughlyPerson = {
    firstName: 'Md Rokunuzzaman',
    lastName: 'Shakil',
    salary: 19500,
}



// const person = normalPerson.billCharge.bind(friendlyPerson)
// person(200);
// console.log(friendlyPerson.salary)

const personCall = normalPerson.billCharge.call(friendlyPerson, 500);
console.log(friendlyPerson.salary)