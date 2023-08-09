class Person {
  getName() {
    console.log("My name is Dung");
  }
  getAge() {
    console.log("I'm is 27 years old");
  }
}

let Dung = new Person();
Dung.getName();
Dung.getAge();

// -------2away--------
class Mom {
  getName(name) {
    console.log("Her name is", name);
  }
  getAge(age) {
    console.log("Her age is", age);
  }
}

let myMom = new Mom();
myMom.getName('Thuy');
myMom.getAge('53');
