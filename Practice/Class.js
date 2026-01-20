

class person{
    
    constructor(){
        // this.name = name;
        // this.age = age
        console.log("person");
    }
}

class student extends person{
    constructor(){
        // super(name ,age);
        // this.rollNo = rollNo
        
        super();
        console.log("student");
    }

    displayDetails(){
        console.log();
    }
}

const stud = new student();
console.log(stud);