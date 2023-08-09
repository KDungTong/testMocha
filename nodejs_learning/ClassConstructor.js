class Person {
  constructor(name, year) {
    this._name = name;
    this._year = year;
  }
  getName() {
    console.log(this._name);
  }
  getYear() {
    console.log(this._year);
  }
}

let Dung = new Person("DungTong", 27);
Dung.getName();
Dung.getYear();

console.log(Dung);
