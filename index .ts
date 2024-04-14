                        //    Q46

// ENhanced laptop object : construct an object for laptop including  properties make , yesr , and a method describe() 
//that log a sentence about a laptop
let laptop = {
    make : "Dell",
    model : "xps ",
    year : "2021",
    describe : function(){
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
};

laptop.describe()
// let student = {
//     Name : "sadaf",
//     Rollno : "124337",
//     campus : " main",
//     center : "GIAIC",
//     describe : function(){
//         console.log(`This student data is\n ${this.Name}\n ${this.Rollno}\n${this.campus}\n ${this.center}`);
//     }
    
// };
// student.describe()

