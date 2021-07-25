// solution one first try

const createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName
    };
}

// solution 2

let favoriteNumber = 42;

const instructor = {
    firstName: 'Colt',
    [favoriteNumber]: "That is my Favorite!"
}

// solution 3 first try;
var instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + "says bye!";
    }
}

// /solution 4
function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}

// would like to discuss the brackets function above