/** @format */

//lesson method
/*var person = {
  nama: "abiel",
  usia: 18,
  warnaFav: "buuruu",
};
console.log(person.nama);
console.log(person["nama"]);
console.log(person.nama.length);*/

function person(name, age, bapak) {
  this.name, this.age, (this.favcolor = favcolor);
}
var p1 = new person("abiel", 18, "blue");
var p2 = new person("asep", 37, "blue");
var p3 = new person("solichin", 52, "black");
var p4 = new person("mama", 47, "coklat");

document.writeln(p2.age);
document.writeln(p1.name);
document.writeln(p3.favcolor);
//
function person(name, age) {
  this.name = name;
  this.age = age;
  this.changeName = function changeName(name) {
    this.age = age;
  };
}
var p1 = new person("dadi", 17);
console.log(p1, age);
p1.changeName(17);
console.log(p1, age);
