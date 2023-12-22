// 
const person = {
  name : "Mustafa",
  sname : "Onal",
  descrption :function(){
    return this;
  },
  showName :function(){
    let x = this.name + " " + this.sname
    return  x    
    
  }
}
console.log(person.descrption())
console.log(person.showName())
