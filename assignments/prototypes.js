/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(attr) {
  this.createdAt = attr.createdAt;
  this.name = attr.name;
  this.dimensions = attr.dimensions;
}

GameObject.prototype.destroy = function() {
  return(`${this.name} was removed from the game.`);
};



/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(attr) {
  GameObject.call(this, attr);
  this.healthPoints = attr.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return(`${this.name} took damage.`);
};



/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(attr) {
  CharacterStats.call(this, attr);
  this.team = attr.team;
  this.weapons = attr.weapons;
  this.language = attr.language;
};

Humanoid.prototype = Object.create(CharacterStats.prototype);
console.log(Humanoid);

Humanoid.prototype.greet = function() {
  return (this.name + ' ' + 'offers a greeting in ' + this.language);
};



 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date() ,
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


console.log(mage.greet()); // Lilith offers a greeting in Elvish.

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
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
  function Villain(attr) {
    Humanoid.call(this, attr);
    
  
  };
  
  Villain.prototype = Object.create(Humanoid.prototype);
  console.log(Villain);
  
  Villain.prototype.RemoveHPoint = function(points,healthPoints) {
    return healthPoints - points;
   
  };
  
  Villain.prototype.checkHealth= function() {
    if (this.healthPoints <=0) {
      console.log(`Destroying ${this.name}` );
       return(this.destroy());
    }
    else {
      return(`${this.name} is the winner`);
    }
   
  };
  
  const newVillain = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 4,
        height: 8,
      },
      healthPoints: 15,
      name: 'Lion',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Persian',
    });
  
    function Hero(attr) {
    Humanoid.call(this, attr);
    
  
  };
  
  Hero.prototype = Object.create(Humanoid.prototype);
  console.log(Hero);
  
  Hero.prototype.RemoveHPoint = function(points,healthPoints) {
    return healthPoints - points;
    
  };
  
  Hero.prototype.checkHealth= function() {
    if (this.healthPoints <=0) {
      console.log(`Destroying ${this.name}` );
       return(this.destroy());
    }
    else {
      return(`${this.name} is the winner`);
    }
   
  };
  
  
  const newHero = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 4,
        height: 8,
      },
      healthPoints: 15,
      name: 'Bear',
      team: 'Fire',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Persian',
    });
  
    console.log(newVillain);
    console.log(newHero);
    newHero.healthPoints = newVillain.RemoveHPoint(16,newHero.healthPoints);
    console.log(newHero.name +  "'s new HealthPoint:" + newHero.healthPoints);
    console.log(newHero.checkHealth());
    newVillain.healthPoints= newHero.RemoveHPoint(12,newVillain.healthPoints);
    console.log(newVillain.name +  "'s new HealthPoint:" +  newVillain.healthPoints);   
    console.log(newVillain.checkHealth());
    
  