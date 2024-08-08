//let d=function(a,b)
//{
   // return a+b;
//};
//console.log(d(5));
// template strings
//let k=45;
//let j=20;
//let s="abc"
//let q=s+j+k;
//let d='hello';
//console.log(q);
//let f=(a)=>
//{
  //  return a*a;
//}
//console.log(f(4));
//let cube=()=>a**3;
//console.log(cube(4));
//let k = 40;
//let j = 20;
//let s=abc;
//let q=s+j+k;
//let d='hello $ {s} ${k+j}';
//console.log(d);
//let arr=[true,45,41,undefined,null,"string",'qwery'];
//console.log(arr);
//console.log(arr.length);
//console.log(arr[0]);
//console.log(arr[1]);
//console.log(arr[2]);
//console.log(arr[3]);
//for(let i=0;i<arr.length;i++)
//{
  //  console.log(arr[i]);
//}
//arr.forEach(
  ////  function(ele,ind,arr)
   // {
   //     console.log(ele);
   // }
//)
//arr.forEach(
    //function(ele,ind,arr)
    //{
        //console.log(ele,ind);
    //}
//)
//arr.forEach(
   // function(ele,ind,arr)
   // {
   //     console.log(ele,ind,arr);
   // }
//)
//arr.push[10];
//arr.push[20];
//arr.push[30];
//console.log(arr);
//arr.shift();
//arr.unshift(45);
///console.log(arr);
//arr.pop();
//console.log(arr);
//let k={
   // 45:"value",
  //  "hello":4.45656,
   // true:98
//};
///console.log(k);

//let k={
    // 45:"value",
   // "hello":4.45656,
   // "true":98,
   // arr[4,5,true],
   // obj:{
   //     a:10,
   //     b:52,
   // },
 //};
// console.log(k[45]);
/*let Human = function(fname_v, age_v)
{
   this.fname = fname_v;
   this.age = age_v;
};
Human.prototype.aboutMe = function () {
   console.log('hi, ${this.fname}, my age is ${this.age}');
};
Human.prototype.greetMe = function () {
   console.log('hi, ${this.fname}, GoodMorning!0');
};
let tarun = new Human("tarun",20);
let kiran = new Human("kiran",20);
let raj = new Human("raj",20);
tarun.aboutMe();
console.log(tarun);
console.log(kiran);
console.log(raj);*/
/*let Human = function(fname_v, age_v)
{
   this
};
*/
/*let Human = function(fname_v, age_v)
{
   this.fname = fname_v;
   this.age = age_v;
   this.aboutMe = function () {
   console.log('hi, ${this.fname}, my age is ${this.age}');
};
};
let tarun = new Human("tarun",20);
let kiran = new Human("kiran",20);
let raj = new Human("raj",20);
tarun.aboutMe();
console.log(tarun);*/
/*let Human = function()
{
   this.fname = "raj";
   this.age = 0;
   console.log(this.fname,this.age);
};
Human();*/
/*let Human = function()
{
   this.fname = "raj";
   this.age = 0;
   //console.log(this.fname,this.age);
};
let tarun = new Human();
console.log(tarun);*/
/*let Human = function()
{
   this.fname = "raj";
   this.age = 0;
   console.log(this.fname,this.age);
};
Human();
tarun.fname = "tarun";
tarun.age = 20;
turan.aboutMe();
console.log(tarun);
*/
/*
let Human = function(fname_v, age_v)
{
   this.fname = fname_v;
   this.age = age_v;
};
Human.prototype.aboutMe = function () {
   console.log('hi, ${this.fname}, my age is ${this.age}');
};
Human.prototype.greetMe = function () {
   console.log('hi, ${this.fname}, GoodMorning!0');
};
let Student = function(fname,age,roll,dept)
{
   Human.call(this,fname, age);
   //calling the parent class constructor
   this.roll = roll;
   this.department = dept
}
let raj = new Student("raj",20,101,"cse");
console.log(raj);

let d = { a: 12, b :23};
let p = object.create
*/
/*
let Human = function(fname_v, age_v)
{
   this.fname = fname_v;
   this.age = age_v;
};
Human.prototype.aboutMe = function () {
   console.log('hi, ${this.fname}, my age is ${this.age}');
};
Human.prototype.greetMe = function () {
   console.log('hi, ${this.fname}, GoodMorning!0');
};
let Student = function(fname,age,roll,dept)
{
   Human.call(this,fname, age);
   //calling the parent class constructor
   this.roll = roll;
   this.department = dept
};
//Student.prototype = Human.prototype;
//linking the prototype
//Student.prototype = Object.create(Human.prototype);
Student.prototype.play = function()
{
   console.log('${this.fname} plays...')
}

let raj = new Student("raj",20,101,"cse");
console.log(raj);
*/
let Human = function(fname_v, age_v)
{
   this.fname = fname_v;
   this.age = age_v;
};
Human.prototype.aboutMe = function () {
   console.log('hi, ${this.fname}, my age is ${this.age}');
};
Human.prototype.greetMe = function () {
   console.log('hi, ${this.fname}, GoodMorning!');
};
let Student = function(fname,age,roll,dept)
{
   Human.call(this, fname, age);
   //calling the parent class constructor
   this.roll = roll;
   this.department = dept;
};
//Student.prototype = Human.prototype;
//linking the prototype
Student.prototype = Object.create(Human.prototype);
Student.prototype.play = function()
{
   console.log('${this.fname} plays........');
};
let ExStudent = function(fname, age, roll, dept, degree)
{
   Student.call(this, fname, age, roll, dept );
   this.degree = degree;
};
ExStudent.prototype = Object.create(Student.prototype)
ExStudent.prototype.mySpeech = function()
{
   console.log('${this.fname}got degree');
}

let raj = new ExStudent("raj",20,101,"CSE", "B.E");
console.log(raj);





























































































