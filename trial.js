

//this kullanımı

// console.log(this)
// Window.alert("bu bir uyarıdır")

const person = {
    name: "musa",
    description: function (){
        return this.name;
    }
}
console.log(person.description())



