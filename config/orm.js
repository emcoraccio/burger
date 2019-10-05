const connection = require("./connection");

const printQuestionMarks = (num) => {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

const objString = (ob) => {
  let arr = [];

  for (let key in ob) {
    let value = ob[key];

    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `'${value}'`;
      }

      arr.push(`${key} = ${value}`);
    }
  }

  return arr.toString();
}


const orm = {

  selectAll: function(tableName) {
    
    return new Promise((resolve, reject) => {

      connection.query(`SELECT * FROM ${tableName}`, function(err, result) {
        if (err) {
          reject(err);
          return;
        } 
  
        resolve(result);
      });

    })
  }, 
  insertOne: function(tableName, cols, vals) {

    return new Promise((resolve, reject) => {

      connection.query(`INSERT INTO ${tableName} (${cols}) VALUES (${printQuestionMarks(vals.length)})`, vals, function(err, result) {
        if (err) {
          reject(err);
          return;
        } 
  
        resolve(result);
      });

    })
  }, 
  updateOne: function(tableName, objColVals, condition) {

    return new Promise((resolve, reject) => {
      
      connection.query(`UPDATE ${tableName} SET ${objString(objColVals)} WHERE ${condition}`, function(err, result) {
        if (err){
          reject(err);
          return; 
        }
        resolve(result);
      });

    });
  }
};


module.exports = orm;