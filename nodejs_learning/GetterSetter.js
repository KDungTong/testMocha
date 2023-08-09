class Person {
  set name(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

let Dung = new Person();
Dung.name = "Tong";
console.log(Dung.name);
