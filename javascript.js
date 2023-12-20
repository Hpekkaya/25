// const cars = ["BMW","Volvo","Ford"]
// let i = 0 ;
// let len = cars.length ;
// let text = "";
// for (; i < len ; i++){
//     // text = text + cars[i] + "\n"
//     text += cars[i] + "\r\n"
//     console.log(i)
// }
// console.log(text)

// const arr = [1,2,3,4,5,6]

// for(let l = 0, r= arr.length - 1 ; l < r ; l++ , r--) {
//     console.log(arr[l],arr[r])
// }
 
// for in statement loops through the properties of an Object, array as well:

// const person = {
//     FName: "John",LName:"Day",Age:25
// }
// let text = ""
// for(let x in person){
//     console.log(x," :",person[x])
//     text += x + " :" + person[x] + "\n\n" 
// }
// console.log(text)
 
// const number = [45,4,9,40]
// for(let x in number){
//     console.log(x, number[x])
// }

// const number = ["45","4","9","40"]
// // console.log(typeof null)
// let text = ""
// let text1 = 0
// number.forEach(myFunction)


// function myFunction(value,index,array){
//     console.log("index:", index)
//     console.log("value:", value)
//     console.log("array", array)
//     text += value
//     text1 += Number(value)
// }
// console.log("Text added each other as a string     : ", text)
// console.log("Text added after to Number each other : ", text1)
 
// let language = "Javascript"
// let text = ""
// for (let x in language){
//     console.log(x,language[x])
// }

// const cars = ["Volvo","Fiat","Mercedes"]
// console.log(cars)
// // const cars = "Mercedes"
// // console.log(cars)
// // const cars = {model:"mercedes"} //objeler için for in kullanılır
// console.log(cars)
// let text = ""
// for(let x of cars){
//     console.log(x)
//     text += x + "-"
// }
// console.log(text)
 
//do-while

// let i = 0 ;
// do {
//     console.log(i)
//     i++;
// }
// while(i<10)

// break continue statements

// for(let i=0; i<10 ; i++) {
//     if(i === 3){
//         break;
//         // continue;
//     }
//     console.log(i)
// }

//js errors

// console.log(mesajımız)
// try {
//     console.log("mesajımız")
// }
// catch(err){
//     console.log(err.message)
// }
// finally{
//     console.log("fonksiyon bitti çalışma tamamlandı")
// }

// let x = ""
// try {
//     if(x.trim() == "") throw "empty value";
// }
// catch(err){
//     console.log(err)
// }
// finally {
//     console.log("work is done")
// }
 
// let x = "12"
// try {
//     if(isNaN(x)) throw "value is not a number";
// }
// catch(err){
//     console.log(err)
// }
// finally {
//     console.log("work is done")
// }
 
// let x = "1"
// try {
//     x = Number(x);
//     if(x<5) throw "çok küçük"
//     if(x>10) throw "çok büyük"
// }
// catch(err){
//     console.log(err)
// }
// finally {
//     console.log("work is done")
// }
 
//for in (returns key ve index values)
// const person = {
//     fname:"Jhon", lname:"Doe" , age:25
// }
// let text = "";
// // person["fname"]="Jhon" person.fname="Jhon"
// for (let a in person){
//     console.log("Value field name in For loop :",a)
//     console.log("Value person[a]",person[a])
//     console.log(`${a} nın değeri ${person[a]}`)
//     console.log("__________________")
//     text += person[a]
// }
// console.log(text)

// const numbers = [45,23,34,67]
// let txt=""
// for(let x in numbers){
//     console.log("Value of variable x as       :",x)
//     console.log("Type of variable x           :", typeof(x))
//     console.log("Value of variable numbers[x] :",numbers[x])
//     console.log("__________________________",x)
// }
// // for in tabiri key yada index değerlerini döndürür
// numbers.forEach(myFunction)
// function myFunction (value,index,array){
//     console.log(value,index,array)
// }
// let language = "Javascript"
// for (let x in language){
//     console.log(x)
//     console.log(language[x])
// }

// //for of (returns values)
// const cars = ["fiat","opel","bmw"]
// for (let x of cars){
//     console.log("Value",x)
// }
 
// let language = "javascript"
// for (let x of language) {
//     console.log(x)
// }

// If we aimed to reach object values, we should use for in
// For in specialized for objects
// Below loop returns error : TypeError: person is not iterable
// let person = {fname:"ahmet", lname:"can"}
// for(let x of person){
//     console.log(x)
// }

//while //First control the condition then execute the loop
// let i = 99 ;
// while(i<10){
//     console.log(i);
//     i++;
// }


// //do-while //execute the loop before control the condition 
// //          First execute the loop, control the condition at the end 
// let j = 99 ;
// do {
//     console.log(j);
//     j++;
// }
// while (j < 10)  


// //break ve continue
// //Use in the loop
// //break (end the loop)
// //continue do not execute the rest of the loop and continue loop with the increase loop variable

// for(let i = 0 ; i < 10 ; i++){
//     if(i === 3) {
//         break;
//     }
//     console.log(i)
// }

// for(let i = 0 ; i < 10 ; i++){
//     if(i === 3 || i === 7) {
//         console.log("hatalı değer bulundu")
//         continue;
//     }
//     console.log(i)
// }

// try-catch-finally error management tools

// try {
//     console.log("mesaj içeriği sağlıklı")
// } 
// catch(error){
//     console.log(error.message)
// }

// let x = "  ";
// try {
//     if(x.trim() == "") throw {message:"boş içerik hatası"}
// }
// catch(err){
//     console.log(err.message)
// }
// finally {
//     console.log("try catch içeriği sonlandı.")
// }

// let x = "18"
// try {
//     x = Number(x);
//     if(x<5) throw "çok küçük, sayı 5 den büyük olmalıdır"
//     if(x>10) throw "çok büyük, sayı 10 dan küçük olmalı"
//     console.log(x)
// }
// catch (err) {
//     console.log(err)
// }
// finally {
//     console.log("kod bloğu hatasız çalıştı")
// }

//this kullanımı
// console.log(this)
// const person = {
//     name: "mustafa",
//     fname:"önal",
//     description: function () {
//         return this;
//     },
//     showName: function () {
//         return this.name
//     }
// }
// console.log(person.description())
// console.log(person.showName())


//constructor
// const person1 = {
//     name: "ahmet" , age:24 
// }
// const person2 = {
//     name: "mehmet" , age:24 
// }

// function Person(first,last,age,eye){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye ;
//     this.showInfos = function () {
//         console.log("Funct :", this.firstName," ", this.lastName," ", this.age)
//     }
// }
// const person3 = new Person("ahmet","bay",23,"brown")
// person3.showInfos()
// console.log(person3.eyeColor)
// console.log("Array",person3)
// console.log("showinfos()", person3.showInfos)






