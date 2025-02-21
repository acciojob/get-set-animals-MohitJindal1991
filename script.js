//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
	species(){
		return this.species;
	}
	makeSound(){
		console.log(`${this.species} makes a sound`);
	}
}

class Dog extends Animal {
    bark(){
		console.log("woff");
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
