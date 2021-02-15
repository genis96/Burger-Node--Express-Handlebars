// Import the ORM to create functions that interact with the database.
const orm = require('../config/orm.js');

const burger = {
  all(cb) {
    //  burgers from the public JS file name "burgers.js"
    orm.all('burgers', (res) => cb(res));
  },
  create(cols, vals, cb) {
    orm.create('burgers', cols, vals, (res) => cb(res));
  },
  update(objColVals, condition, cb) {
    orm.update('burgers', objColVals, condition, (res) => cb(res));
  },
  delete(condition, cb) {
    orm.delete('burgers', condition, (res) => cb(res));
  },
};

module.exports = burger;
