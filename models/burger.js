const orm = require("../config/orm");

const burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers")
      .then(data => callback(data))
      .catch(err => console.log(`Error! ${err}`));
  },
  insertOne: function(vals, callback) {
    orm.insertOne("burgers", "burger_name", vals)
    .then(res => {
      callback(res);
    }).catch(err => console.log(`Error! ${err}`));
  },
  updateOne: function(objColVals, condition, callback) {
    orm.updateOne("burgers", objColVals, condition)
    .then(res => {
      callback(res);
    }).catch(err => console.log(`Error! ${err}`));
  }
};

module.exports = burger;