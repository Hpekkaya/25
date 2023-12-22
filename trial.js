// Constructor with function trial


function Person(name,yOB,job, year){
  this.name = name;
  this.yOB = yOB;
  this.job = job;
  this.year = year; 
  
  this.age = function() {       
    return  this.year - this.yOB
  }
}

let hakan = new Person('Hakan', 1970, 'retired',);
let alev = new Person('Alev', 1975, 'Teacher');

let d = new Date();
let year = d.getFullYear();
console.log(year)

console.log(hakan.name, "  ",hakan.yOB, " ", hakan.job, " ", hakan.age())
console.log(alev.name, "  ",alev.yOB, " ", alev.job, " ", alev.age())


