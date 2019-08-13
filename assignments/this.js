/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When a function is contained in the global scope, the value of this inside the function is going to be 
the window/Console object.

* 2. When a function is called by a preceding dot, this is going to refer to the object to the left of the dot.

* 3. When a constructor function is used, this refers to an instance of the object that is created by
 the constructor function by using the keyword new.

* 4. When the JavaScript’s call or apply method is used, this is explicitly being definded by passing the objectname.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function globalFunction() {
    console.log(this);
  }
  
  globalFunction();

// Principle 2

// code example for Implicit Binding

const implicitObj = {
    type:"Error Code",
    msg: function(name,msg) {
      console.log(`${this.type} for ${name} is: ${msg}`);
      console.log(this);
    }
  };
  implicitObj.msg("Shiva","ReEnter your userid/password");

// Principle 3

// code example for New Binding
function Userid(name) {
    this.msg = 'your Userid is: ';
    this.name = name;
    this.display = function() {
        console.log(`Hello, ${this.msg}${this.name.toLowerCase()}!`);
        console.log(this);
    };
};

const userShiva = new Userid('Shiva');

const userSheena = new Userid('Sheena');


userShiva.display();
userSheena.display();

// Principle 4

// code example for Explicit Binding
function Userid2() {
    this.msg = 'your Userid is: ';
};
const shiva = new Userid2();

let display2 = function(name,lname) {
    console.log(`Hello, ${name} ${lname} ${this.msg}${name.toLowerCase()}!`);
    console.log(this);
}

let nameArg =["Shiva","Banihasehm"];
console.log("Output using .apply() below ");
console.log(display2.apply(shiva,nameArg ));
