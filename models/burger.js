const orm = require("../config/orm");

const burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  insertOne: function(vals, callback) {
    orm.insertOne("burgers", "burger_name", vals, function(res) {
      callback(res);
    });
  },
  updateOne: function(objColVals, condition, callback) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      callback(res);
    });
  }
};

module.exports = burger;