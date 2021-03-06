/*
  Object oriented design is commonly used in video games.  
  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  
  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  

  // === GameObject === //Parent
  function GameObject(attrs) {
    this.createdAt = attrs.createdAt;
    this.name = attrs.name; 
    this.dimensions = attrs.dimensions; //(These represent the character's size in the video game)
  };
   
  GameObject.prototype.destroy = function() {
    return `${this.name} was removed from the game.`; // prototype method that returns: `${this.name} was removed from the game.`
  };


 // === CharacterStats === //Child
 function CharacterStats(StatsAttrs) {
   GameObject.call(this, StatsAttrs);
  this.healthPoints = StatsAttrs.healthPoints;
  this.name = StatsAttrs.name;
 };

 CharacterStats.prototype = Object.create(GameObject.prototype); //giving full inheritance of parent GameObject; //should inherit destroy() from GameObject's prototype
 CharacterStats.prototype.takeDamage = function() {
   return `${this.name} took damage.`; // prototype method -> returns the string '<object name> took damage.'
 }; 
  

 // === Humanoid (Having an appearance or character resembling that of a human.) === //Another Child
 function Humanoid(humanoidAttrs) {
  GameObject.call(this, humanoidAttrs);
  CharacterStats.call(this, humanoidAttrs);
  this.team = humanoidAttrs.team;
  this.weapons = humanoidAttrs.weapons;
  this.language = humanoidAttrs.language;
 };
 
  Humanoid.prototype = Object.create(GameObject.prototype);
  Humanoid.prototype = Object.create(CharacterStats.prototype);

  Humanoid.prototype.greet = function () {
    return `${this.name} offers a greeting in ${this.language}.`; // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  };
  //* should inherit destroy() from GameObject through CharacterStats
  //* should inherit takeDamage() from CharacterStats

  
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  function Villain(villainArrs) {
    Humanoid.call(this, villainArrs);
    this.name = villainArrs.name;
  };

  function Hero(heroArrs) {
    Humanoid.call(this, heroArrs);
    this.name = heroArrs.name;
  };
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result 
  // in destruction if health gets to 0 or drops below 0;
Villain.prototype.health = function() {
  if (this.healthPoints <= 0) {
    console.log("destruction");
  } else {
    console.log("KEEP GOING!");
  };
};

Hero.prototype.health = function() {
  if (this.healthPoints <= 0) {
    console.log("DESTRUCTION FOR ALL!!!!!")
  } else {
    console.log("GET YOU NEXT TIME!")
  };
};

  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  const KataBoom = new Villain ({
    createdAt: new Date(),
    dimensions: {
      length: 5,
      width: 3,
      height: 4,
    },
    healthPoints: 0.005,
    name: "KataFlick",
    team: "House of BoomFlicks!",
    weapons: [
      "stick",
      "sword"
    ],
    language: "Spadakian"
  });

  const HabaDash = new Hero ({
    createdAt: new Date(),
    dimensions: {
      length: 8,
      width: 6,
      height: 2,
    },
    healthPoints: 0,
    name: "DashHabs",
    team: "House of Dashingzz",
    weapons: [
      "firestick",
      "book"
    ],
    language: "Thorntian"
  });

  console.log(KataBoom.health());
  console.log(HabaDash.health());

  