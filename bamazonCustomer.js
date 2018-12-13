var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_db"

});

connection.connect(function (err) {
    if (err) throw err;
    // console.table(result);
    // })
    //start();
});

//display items for sale w/ ids names & prices

//inquire product id

//inquire amount of product

//insufficient inventory response

//sufficient: show total purchase amount and update database