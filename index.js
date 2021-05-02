// Your code here

 class Cat {
     constructor(name, sex) {
     this.name = name;
      this.sex = sex;

      let cat = new Cat("Sasha", "female")
      speak.cat();
      }

     speak() {

   console.log(speak.cat());
      }

   }


//class Dog {
       //constructor(name, sex) {
      //   this.name = name;
         //this.sex = sex;
      // }

  //newDog() {
      //  return `${this.name} says woof!`;
    //  let  dog = newDog("Rufio", "male")
  // }
class Bird {
  constructor(name,sex) {
    this.name = name;
    this.sex = sex;
  }
  speak(){
    if (this.sex === "male") {
    return "It's me!"+" "+this.name + "," + " the parrot!"
      const bird = new Bird("Pablo", "male")
  }else {
        return this.name + " " + "says" + " " +"squawk!";
          const  bird2 = new Bird("Mable", "female")
  }
  }
}
