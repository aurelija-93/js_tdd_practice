const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('diplodocus', 'herbivore', 60);
    dinosaur3 = new Dinosaur('velociraptor', 'carnivore', 40);
    dinosaur4 = new Dinosaur('stegosaurus', 'herbivore', 35);
    park = new Park('Jurassic Park', 1000, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 1000);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur4);
    assert.deepStrictEqual(park.dinosaurs, [dinosaur1, dinosaur2, dinosaur3, dinosaur4]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur('velociraptor');
    assert.deepStrictEqual(park.dinosaurs, [dinosaur1, dinosaur2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const result = park.mostPopularDinosaur();
    assert.deepStrictEqual(result, dinosaur2);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    let dinosaur5 = new Dinosaur('t-rex', 'carnivore', 55);
    park.addDinosaur(dinosaur5);
    const results = park.filterDinosaursBySpecies('t-rex');
    assert.deepStrictEqual(results, [dinosaur1, dinosaur5]);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    const result = park.visitorsPerDay();
    assert.strictEqual(result, 150);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    const result = park.visitorsPerYear();
    assert.strictEqual(result, 54750);
  });

  it('should be able to calculate total revenue for one year', function () {
    const result = park.yearlyRevenue();
    assert.strictEqual(result, 54750000);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    let dinosaur5 = new Dinosaur('t-rex', 'carnivore', 55);
    park.addDinosaur(dinosaur5);
    park.removeDinosaursBySpecies('t-rex');
    assert.deepStrictEqual(park.dinosaurs, [dinosaur2, dinosaur3]);
  });

  it('should be able to provide a count of dinosaurs for each diet type', function () {
    const result = park.countDinosaursByDiet();
    assert.deepStrictEqual(result, { 'carnivore': 2, 'herbivore': 1, 'omnivore': 0 });
  });

});
