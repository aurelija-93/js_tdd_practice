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

module.exports = Park;