import { faker } from '@faker-js/faker';

function generatePet() {
  return {
    _id: faker.database.mongodbObjectId(),
    name: faker.person.firstName(),
    species: faker.animal.type(),
    age: faker.number.int({ min: 1, max: 15 }),
    adopted: false,
    owner: null,
  };
}

export function generatePets(count = 100) {
  return Array.from({ length: count }, generatePet);
}