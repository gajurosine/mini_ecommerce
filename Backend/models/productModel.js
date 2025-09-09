const db = require("../config/db");

const Product = {
  getAll: (callback) => {
    db.query("SELECT * FROM Products", callback);
  },

  create: (product, callback) => {
    const { Name, Price, Description, Stock } = product;
    const sql = "INSERT INTO Products (`Name`, `Price`, `Description`, `Stock`) VALUES (?, ?, ?, ?)";
    db.query(sql, [Name, Price, Description, Stock], callback);
  }
};

module.exports = Product;
