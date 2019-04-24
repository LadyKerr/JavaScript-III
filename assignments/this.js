/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - this is when the value of 'this' will be in the global scope.

* 2. Implicit Binding - this is when a function is called by the dot that is before it. The object then becomes assigned to 'this'. So instead of using the object's name, we can call upon the 'this' keyword.

* 3. New binding - this principle utilizes constructor functions. This principle when used with constructor functions creates objects for us in JS and starts the OOP process. We can take information from an existing object and use it to create a new object without actually creating a new object.

* 4. Explicit Binding - this principle implements the .apply(), .call() and/or .bind() methods. Building upon new binding, these methods can override what the constructor functions have initially defined and allows us to have fun with the object.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function buyHome(house) {
    console.log(this);
    return house;
  }
  console.log(buyHome("This is my first home!"));
  
  
  // Principle 2
  // code example for Implicit Binding
  
  const house = {
    roof: 'white',
    door: 'red',
    rooms: function(beds) {
      console.log(`Our home has a ${this.roof} roof and a ${this.door} door at the front. We have ${beds} bedrooms.`);
      console.log(this);
    }
  };
  house.rooms('5');
  
  
  // Principle 3
  // code example for New Binding
  
  function Employee(staff) {
    this.staff = staff;
    this.title = 'Financial Analyst';
    this.age = 25;
    this.position = function () {
      console.log(`${staff}, ${this.title}, ${this.age}`);
      console.log(this);
    }
  };
  const Taylor = new Employee('Taylor');
  Taylor.position();
  const Alexis = new Employee('Alexis');
  Alexis.position();
  
  
  // Principle 4
  // code example for Explicit Binding
  
  function Employee(staff) {
    this.staff = staff;
    this.title = 'Financial Analyst';
    this.age = 25;
    this.position = function () {
      console.log(`${staff}, ${this.title}, ${this.age}`);
      console.log(this);
    }
  };
//    const Taylor = new Employee('Taylor');
//    const Alexis = new Employee('Alexis');
  Taylor.position.call(Alexis);
  Alexis.position.call(Taylor);
  