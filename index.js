/**
 *  Make a Person
 * 
 *  Fill in the object constructor with the following methods below:
 *  getFirstName()
 *  getLastName()
 *  getFullName()
 *  setFirstName(first)
 *  setLastName(last)
 *  setFullName(firstAndLast)
 */

const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  
  this.getFullName = function() {
    return firstAndLast;
  }
  this.getFirstName = function() {
    return firstAndLast.split(" ")[0];
  }
  this.getLastName = function() {
    return firstAndLast.split(" ")[1];
  }
  this.setFirstName = function(first){
    const last = this.getFullName().split(" ")[1];
    firstAndLast = `${first} ${last}`;
  }
  this.setLastName = function(last){
    const first = firstAndLast.split(" ")[0];
    firstAndLast = `${first} ${last}`;
  }
  this.setFullName = function(fl){
    firstAndLast = fl;
  }
};

const bob = new Person('Bob Ross');
// bob.setFirstName("Baliw")
// bob.setLastName("Baliw")
bob.setFullName("taena ka")
console.log(bob.getFullName());
// console.log(bob.getFirstName());
// console.log(bob);
console.log(Object.keys(bob).length);