function Person(name, age) {
  if (name) this.name = name;
  if (age) this.age = age;
}
Person.prototype.name = 'Default name';
Person.prototype.age = -1;
Person.prototype.talk = function () {
  return `Hi, my name is ${this.name} and I am ${this.age} years old`;
};


function Teacher(name, age, subject) {
  Person.call(this, name, age);

  if (subject) this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Object.defineProperty(Teacher.prototype, 'constructor', {
  value: Teacher,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true });

Teacher.prototype.subject = 'NoSubject';


function Other() {}

console.log('Person.prototype', Object.getOwnPropertyNames(Person.prototype));
console.log('Teacher.prototype', Object.getOwnPropertyNames(Teacher.prototype));
console.log('Teacher.prototype.constructor', Teacher.prototype.constructor);

var exports = {
  Person: Person,
  Teacher: Teacher,
  Other: Other
};
module.exports = exports;
