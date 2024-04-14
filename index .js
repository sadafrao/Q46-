//    Q46
// ENhanced laptop object : construct an object for laptop including  properties make , yesr , and a method describe() 
//that log a sentence about a laptop
var laptop = {
    make: "Dell",
    model: "xps ",
    year: "2021",
    describe: function () {
        console.log("This laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    }
};
laptop.describe();
var student = {
    Name: "sadaf",
    Rollno: "124337",
    campus: " main",
    center: "GIAIC",
    describe: function () {
        console.log("This student data is\n ".concat(this.Name, "\n ").concat(this.Rollno, "\n").concat(this.campus, "\n ").concat(this.center));
    }
};
student.describe();
