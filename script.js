for(var i=1;i<=10;i=i+1){
    console.log(i,"x 2 =",i*2)
}

//arrow function

var a=12;
var oddoreven=(n) => n%2==0? "even" : "odd"
console.log(oddoreven(a))

let x5 = (n) => 5*n
console.log(x5(3))

//OBJECT FUNCTION

let car={
    name: "thar",
    "brand":"tata",
    price:1500000
}
console.log(car)
console.log(car.name)
console.log(car.price)
console.log(car["brand"])


let engine="petrol,diesel"
let vech=
{
    name:engine + ",nexon",
    price:20000
}
console.log(vech.name)
// console.log(vech.price)
delete vech.price

//ARRAY

let cars = ['aadi','thar']
//             0     1    the array should start from 0th index
console.log(cars[1])


let carss = ['aadi','thar',{name:'indhu',age:23},'nexon',true,null,undefined,19]
console.log(carss[2].name)

let carses = ['aadi','thar',]
carses.push('swift')//last laa add aaga push defin panrom
carses.unshift('tata')//first la add aaga unshift kudukkurom
carses.pop()//last element ah remove panna
carses.shift()//first element ah remove panna
console.log(carses)