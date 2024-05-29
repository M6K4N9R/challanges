var chance = require("chance").Chance();

const character = {
  firstName: chance.first(),
  lastName: chance.last(),
  age: chance.age(),
  gender: chance.gender(),
  bio: chance.paragraph({ sentences: 1 }),
  twitter: chance.twitter(),
  location: chance.geohash(),
};

export default function handler(request, response) {
  response.status(200).json(character);
}
