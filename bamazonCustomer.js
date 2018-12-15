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

// connection.connect(function (err) {
//     if (err) throw err;
// console.log(result);
//     // })
// });

//display items for sale w/ ids names & prices
connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.table(res);
    start();
});

// connection.query('SELECT * FROM products',
//     function (err, res) {
//         if (err) throw err;

//         console.log("Item \t Product \t Department \t Price \t Stock");
//         console.log("-----------------------------------");
//         for (var i = 0; i < res.length; i++) {
//             console.log(res[i].item_id + "   " + res[i].product_name + " \t " + res[i].department_name + " \t " + res[i].price + " \t " + res[i].stock_quantity);
//         }
//         start();
//     });
//      for reference:   
// item_id INT NOT NULL AUTO_INCREMENT,
// product_name VARCHAR(100) NULL,
// department_name VARCHAR(100) NULL,
// price DECIMAL(10,2) NULL,
// stock_quantity INT NOT NULL

//inquire product id
//inquire amount of product
function start() {
    inquirer.prompt({
        name: "buyOrQuit",
        type: "rawlist",
        message: "Would you like to make a [PURCHASE] or [QUIT]?",
        choices: ["PURCHASE", "QUIT"]
    }).then(function (answer) {
        if (answer.buyOrQuit.toUpperCase() === "PURCHASE") {
            makePurchase();
        } else {
            noPurchase();
        }
    });
}

function noPurchase() {
    console.log("Thank's for looking, see you next time!");
    connection.end();
}

function makePurchase() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        // console.table(res);
        inquirer.prompt([
            {
                name: "product",
                type: "input",
                message: "Enter an item id:"
            }, {
                name: "quantity",
                type: "input",
                message: "How many would you like to purchase?"
            }

            //code breaks here!
        ]).then(function (answer) {
            var chosenItem = answer.product;
            var results = [];

            for (var i = 0; i < results.length; i++) {
                if (results[i].item_id === answer.product) {
                    chosenItem = results[i];
                }
            }
//sufficient: show total purchase amount and update database

            // if (answer.quantity <= parseInt(results[i].stock_quantity)) {
            //     console.log("Thanks you, your grand total is " +   );

//insufficient inventory response

            //}else{
            //console.log("Sorry we don't have that many!")
            //start();
            // }  
        });



        


    });
}







