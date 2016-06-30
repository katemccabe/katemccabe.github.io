//Part 1 - Step 1//
var animal = {};
animal.species = "Cat";
animal["name"] = "Charlie";
animal.noises = [];
console.log(animal);

//Part 1 - Step 2//
var noises = [];
noises[0] = "Purr";
noises.push("Screech");
noises.unshift("Roar");
noises[noises.length ++] = "Grrr";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//Part 1 - Step 3//
animal[noises] = noises;
animal["noises"] = "Humf";
console.log(animal);

//Part 1 - Step 6//
var animals = [];
animals.push(animal);
console.log(animals);
var duck = {
    species: "Duck",
    name: "Jerome",
    noises: ["quack", "honk", "sneeze", "woosh"]
}
animals.push(duck);
var dog = {
    species: "Dog",
    name: "Hank",
    noises: ["bark", "cry"]
}
animals.push(dog);
var horse = {
    species: "Horse",
    name: "Tom",
    noises: ["neigh", "sneeze"]
}
animals.push(horse);
console.log(animals);
console.log(animals.length);

//Part 1 - Step 7//
//Use an array, because arrays are best for unordered lists//
var friends = [];
function getRandomAnimal(animals) {
    return animals[Math.floor(Math.random() * animals.length)];
}

friends.push(getRandomAnimal(animals).name);
console.log(friends);
dog.friends = friends;

//Part 2 - Step 1//
function search(animalName) {
   for(var i = 0; i < animals.length; i++) {
       if(animals[i].name.toLowerCase() === animalName.toLowerCase()) {
           return animals[i];
       }
   }
   return null;
}

//Part 2 - Step 2//
function edit(animalName, object) {
    for(var i = 0; i < animals.length; i++) {
        if(animals[i].name.toLowerCase() === animalName.toLowerCase()) {
           return animals.splice(animals[i], 1, object);
        }   
    }       
}

//Part 2 - Step 3//
function remove(animalName) {
    for(var i = 0; i < animals.length; i++) {
        if(animals[i].name.toLowerCase() === animalName.toLowerCase()) {
           return animals.splice(animals[i], 1);
        }   
    }    
}

//Part 2 - Step 4//
function create(object) {
    for(var i = 0; i < animals.length; i++) {
        if(object.name.toLowerCase() === animals[i].name.toLowerCase()) {
            return;
        }
    }    
    if(object.name.length > 0 && object.species.length > 0) {
            return animals.push(object);
    }
}







