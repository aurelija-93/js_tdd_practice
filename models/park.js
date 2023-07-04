const Dinosaur = require("./dinosaur");

const Park = function (name, ticketPrice, dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (species) {
    let index = 0;
    for (const currentDino of this.dinosaurs) {
        if (currentDino.species === species) {
            this.dinosaurs.splice(index, 1);
            break;
        }
    index ++;
    }
};

Park.prototype.mostPopularDinosaur = function () {
    let dinosaur = new Dinosaur('species', 'diet', 0);
    for (const currentDino of this.dinosaurs) {
        if (currentDino.guestsAttractedPerDay > dinosaur.guestsAttractedPerDay) {
            dinosaur = new Dinosaur(currentDino.species, currentDino.diet, currentDino.guestsAttractedPerDay);
        }
    }
    return dinosaur;
};

Park.prototype.filterDinosaursBySpecies = function (species) {
    let dinosaurs = [];
    for (const currentDino of this.dinosaurs) {
        if (currentDino.species === species) {
            dinosaurs.push(currentDino);
        }
    }
    return dinosaurs;
};

Park.prototype.visitorsPerDay = function () {
    let visitors = 0;
    for (const currentDino of this.dinosaurs) {
        visitors = visitors + currentDino.guestsAttractedPerDay;
    }
    return visitors;
};

Park.prototype.visitorsPerYear = function () {
    const visitors = this.visitorsPerDay() * 365;
    return visitors;
};

Park.prototype.yearlyRevenue = function () {
    const revenue = this.visitorsPerYear() * this.ticketPrice;
    return revenue;
};

Park.prototype.removeDinosaursBySpecies = function (species) {
    let remainingDinosaurs = [];
    for (const currentDino of this.dinosaurs) {
        if (currentDino.species !== species) {
            remainingDinosaurs.push(currentDino);
        }
    }
    this.dinosaurs = remainingDinosaurs;
};

Park.prototype.countDinosaursByDiet = function () {
    let dinosByDiet = {
        'carnivore': 0,
        'herbivore': 0,
        'omnivore': 0
    };
    // for (const currentDino of this.dinosaurs) {
    //     if (currentDino.diet == 'carnivore') {
    //         dinosByDiet['carnivore'] = dinosByDiet['carnivore'] + 1;
    //     }
    //     if (currentDino.diet == 'herbivore') {
    //         dinosByDiet['herbivore'] = dinosByDiet['herbivore'] + 1;
    //     }
    //     if (currentDino.diet == 'omnivore') {
    //         dinosByDiet['omnivore'] = dinosByDiet['omnivore'] + 1;
    //     }
    // }
    for (const currentDino of this.dinosaurs) {
        dinosByDiet[currentDino.diet] = dinosByDiet[currentDino.diet] + 1;
    }
    return dinosByDiet;
};

module.exports = Park;