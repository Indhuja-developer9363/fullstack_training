var price=100
var product="apple"
var tax=10
console.log(product)
var total=price+tax
console.log(total)

var frutname="apple"
var count=2
var price=100
var total=count*price
console.log(frutname)
console.log(total) 

// pre increment operators

var a=10
var b=++a
console.log(b)  //11

var a=10
var b=a++
console.log(b)  //10

var a=10
var b=a++
console.log(a)  //11

//Datatype

console.log(typeof("apple")) //string

console.log(typeof(10)) //number

var a
console.log(a)  //undefined

//boolean

var a=true
console.log(a)  //true

console.log(typeof(true))  //boolean

//function

function redmi(){
    console.log("phone")
}
redmi() //phone

var a=10
var b=10
function add(){
    console.log(a+b)
}
add()  //20

var factor="kamal"
function fav(){
    console.log("fav actor:"+factor)
}
fav()  //fav actor:kamal

//parameters

function area(a,b){
    var c=a+b
    console.log("ans is:"+c)
}
add(10,20)   // ans is:30

//returntype

function myname(){
    return"indhu"
}
var a=myname()
console.log(a)  //indhu

function add(a,b){
    return(a+b)
}
var c=add(10,20)
console.log(c)  //30