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


//logical operator
a=true;
b=false;
console.log(a&&b);
console.log(a||b);
console.log(!a);
console.log(!b);

//for loop
for(var i=0;i<10;i++){
    console.log(i);
}
//while loop
var (j=0;){
    //statement
    j++;
}
var a = 10;
while(a>0){
    console.log(a);
    a--;
}
//do while loop
var b = 10; 
do{
    console.log(b);
    b--;
}while(b>0);


//condition statement
if(a>0){
    console.log("a is positive");
}
else if(a<0){
    console.log("a is negative");
} else{
    console.log("a is zero");
}


