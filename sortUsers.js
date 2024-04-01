// npm init -y
// npm install lodash

const _ = require('lodash');

const users = [
  { user: 'fred',   age: 48 },
  { user: 'barney', age: 36 },
  { user: 'fred',   age: 40 },
  { user: 'barney', age: 34 }
];

const sortedUsers = _.sortBy(users, 'age');
console.log(sortedUsers);

// "scripts": { "sortUsers": "node sortUsers.js" }
// в package.json

// npm run sortUsers.js