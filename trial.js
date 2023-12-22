// Constructor with function trial

let d = new Date();
let year = d.getFullYear();
console.log("The year :",year)

function Person(name,yOB,job, year){
  this.name = name;
  this.yOB = yOB;
  this.job = job;
  this.year = year;   
  this.age = function() {       
    return  this.year - this.yOB
  }
  this.showInfos = function (){
    console.log(this.name, " ",this.yOB, " ", this.job, " ", this.age())
  }
}

const hakan = new Person('Hakan', 1970, 'retired');
const alev = new Person('Alev', 1975, 'Teacher');



hakan.showInfos();
alev.showInfos();
console.log(hakan)





