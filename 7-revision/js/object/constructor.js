// Math, Object, Array, String, Number, Date

function Employee(fname, lname, age){

this.fname = fname;
this.lname = lname;
this.age = age;



}

Employee.prototype.fullName = function(){
    console.log(this.fname + ' ' + this.lname)
}



const emp1 = new Employee("Dev", "singh", 45)

const emp2 = new Employee("John", "welker", 65)



console.log(emp1.fullName())
console.log(emp2.fullName())