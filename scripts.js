var a; //global scope
a=10;
var a = 20;
let b; //block scope
b=10;
b=20;
const c=10;


var p = 20; //number
var q = "Hello";//string
var bool = true;//bolllean
var r; //undefine
var s = null;//null

var arr=[1,2,3,4,5];
console.log(arr);


var object = {  //object
    name : "Raj",
    age : 20
}

//Arithmetic Operator
var x = 10;
var y = 20;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);

//relational operator
console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);
console.log(x==y);
console.log(x!=y);



//Assign operator
var z = x+y;
console.log(z);
z+=2;
console.log(z);
z-=2;
console.log(z);
z*=2;
console.log(z);
z/=2;
console.log(z);
z%=2;
console.log(z);

//logical operator
var a1=true;
var b1=false;
console.log(a1&&b1);
console.log(a1||b1);
console.log(!a1);
console.log(!b1);

//for loop
for(var i=0;i<10;i++){
    console.log(i);
}
//while loop
var j=0;
while(j<10){
    console.log(j);
    j++;
}
var a = 10;
while(a>0){
    console.log(a);
    a--;
}
//do while loop
var b1 = 10; 
do{
    console.log(b1);
    b1--;
}while(b1>0);


//condition statement
if(a>0){
    console.log("a is positive");
}
else if(a<0){
    console.log("a is negative");
} else{
    console.log("a is zero");
}

//switch statement
var day = 1;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

//terinary operator
var age = 20;
//syntax
//condition ? true : false
var result = age>18 ? "You are eligible to vote" : "You are not eligible to vote";
console.log(result);

//object
var person = {
    name : "Raj",
    age : 20,
    address : {
        city : "Bangalore",
        state : "Karnataka"
    }
}
console.log(person.name);
console.log(person.address.city);
console.log(person.address.state);
console.log(person["name"]);
console.log(person["address"]["city"]);


//for...in loop(index values)
var arr = [1,2,3,4,5];
for(var i in arr){
    console.log(arr[i]);
}
//for...of(values)
for(var i of arr){
    console.log(i);
}

//forEach
arr.forEach(function(i)=>{
    console.log(i);
});


class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(this.name,this.age);
    }
}
var p1 = new person("Raj", 20);
p1.print();



