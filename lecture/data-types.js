// An object that acts like an array
myString = "a string"
myNumber =  10
myBoolean = true

// You cannot use numbers with dot notation
// As long as the key does not start with a number you can use dot notation
var myObject =  {0 : myString, 1 : myNumber}
console.log(myObject[0])
// console.log(myObject.0): this won't work
console.log("*********")



var myObject =  {a0 : myString, a1 : myNumber, a3: myBoolean}
console.log(myObject[0])
console.log(myObject.a0)
console.log("*********")



for (var key in myObject) {
  console.log(key)
  console.log(myObject[key])
}


var firstname = "John"
var lastname  = "Doe"

console.log(`The full name is: ${firstname} ${lastname}`)
console.log("*********")


function fullName(){
  console.log("this: " , this)
  return `${this.firstName} ${this.lastName}`;
}


var headInstructor = {
  firstName: 'Don',
  lastName: 'Burks',
  fullName: fullName
}

console.log(headInstructor.fullName())
console.log(headInstructor.fullName)
console.log("*********")



function replace(ref) {
  ref = {}
  console.log(a)
  console.log(ref)
}
function update(ref) {
  ref.name = 'Rayhaneh'
}
function updateReturns (ref) {
  return Object.assign({},ref,{name:'Mina'})
}
var a = {name: 'penny'}
replace (a)
console.log("After replace", a)
console.log(updateReturns(a))
console.log("After updateReturn", a)
update(a)
console.log("After update", a)








