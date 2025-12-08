// var a=4;
// prime=0
// for(let i=2;i<a;i++)
// {
//     if(a%i==0)
//     {
//         console.log("Not Prime");
//         prime=1;
//         break;
//     } 
// }
// if(prime==0)
// {
// console.log("Prime");
// }

// var a=424;

// while(a!=0);
//     var rem=a%10;
//     sum=sum*10+rem;
//     a=parseInt(a/10);
//     console.log(sum);
//     if(sum==a)
//     {
//         console.log("Palindrome");
//     }
//     else
//     {
//         console.log("Not Palindrome");
//     }
//     var a = 10;

//     if(true){
//         const b  = 20;//let block scope
//         console.log("a is positive");
//     }// gobal scope
//     console.log(a);
    

    //hoisting
    // var a;
    // console.log(a);  //by javascripts
    // var a = 10;

//     add();
// function add(a,b){
//     console.log(10+20);
// }

// for ...in(object)
// var obj = {
//     name:"Raj",
//     age:20,
//     marks = 90
//     };
//  for(let i in obj){
//     console.log(i,obj[i]);
//  }


//callback function
// function add(a,b){
//     console.log(a+b);
// }
// function sub(a,b){
//     console.log(a-b);
// }
// function mul(a,b){
//     console.log(a*b);
// }
// function div(a,b){
//     console.log(a/b);
// }
// function calc(a,b,op){
//     op(a,b);
// }
// calc(10,20,add);
// calc(10,20,sub);
// calc(10,20,mul);
// calc(10,20,div);

// //arrow function
// var add = (a,b) => {
//     console.log(a+b);
// }
// var sub = (a,b) => {
//     console.log(a-b);
// }
// var mul = (a,b) => {
//     console.log(a*b);
// }
// var div = (a,b) => {
//     console.log(a/b);
// }
// var calc = (a,b,op) => {
//     op(a,b);
// }
// calc(10,20,add);
// calc(10,20,sub);
// calc(10,20,mul);
// calc(10,20,div);

// //array
// var arr = [1,2,3,4,5];
// for(var i in arr){
//     console.log(arr[i]);
// }
// //for...of(values)
// for(var i of arr){
//     console.log(i);
// }

// arr.forEach(function(i){
//     console.log(i);
// });

// //class
// class person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     print(){
//         console.log(this.name,this.age);
//     }
// }
// var p1 = new person("Raj", 20);
// p1.print();


// var add = (a, b,callback) => {
//     var result = a+b;
//     console.log(result);
// }
// add(10, 20, (result) => {
//     console.log(result);
// });



//Template literals
// var name = "Raj"
// var str = 'Raj his age is $(age)'
// var age = 25;
// console.log(str);
// console.log('${name} age is ${age}')

// //map
// var arr = [1,2,3,4,5];
// var arr1 = arr.map((i) => {
//     return i*2;
//     console.log(i);
// });

// filter 
// var arr = arr.filter((i) => {
//     return i%2==0;
//     console.log(i); 
// });

// //Reduce
// var total = arr. reduce((sum, num)=>(sum+num),0)
// console.log(total);


// var  evenCount  = arr.map((i) => {
//     return i%2==0;
//     console.log(i);
// });
// console.log(evenCount);

// var student = [
//    {name : "Raj",
//     age : 20,
//     marks: 90},
//     {name:"mathu",marks:90},
//     {name:"mathu",marks:93},
//     {name:"mathu",marks:98},
// ]
// var studentMarks= student.filter((i)=>{
//     return i.marks>90;
// })
// console.log(studentMarks);

// //reduce 
// var totalMarks = student.reduce((sum, student)=>(sum+student.marks),0)
// console.log(totalMarks);
// var avg = totalMarks/student.length;
// console.log(avg);



