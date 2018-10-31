// Connect the js file to sql database
// Need a package.json file. 
// npm install mysql
// npm install inquirer

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; default is 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Sette!2018",
  database: "bamazon_db"
});

  // in terminal, type in: node bamazonCustomer.js 
connection.connect(function(err) {
    if (err) throw err;
    console.log("connection made")
    runSearch();  //This is the application the user see's
  });

function runSearch() {

  connection.query("SELECT * FROM products", function(err, res) {  
    // 1. Display all items. Include the ids, names, and prices.
    if (err) throw err;

    // Log all results of the SELECT statement
    console.log(res);
    console.log('\n' + '\n' + '\n' + '\n' + '\n' + '\n' + '\n');
  })

    inquirer
      .prompt({
        name: "product",
        type: "list",
        message: "What product would you like to buy?", // 2. Prompt the User "What would you like to buy?" BELOW
        choices: [
          "Phone",
          "TV",
          "Computer",
          "Blender",
          "Bowl",
          "Spoon",
          "Hat",
          "Pants",
          "Shirt", 
          "Boots"
        ]
      })
      .then(function(product) { 
        switch (answer.product) {
        case "Phone":
          units(res[i].item_id.1);
          break;
  
        case "TV":
          units(res[i].item_id.2);
          break;
  
        case "Computer":
          units(res[i].item_id.3);
          break;
  
        case "Blender":
          units(res[i].item_id.4);
          break;
            
        case "Bowl":
          units(res[i].item_id.5);
         break;
            
        case "Spoon":
          units(res[i].item_id.6);
         break;
          
        case "Hat":
          units(res[i].item_id.7);
          break;
            
        case "Pants":
         units(res[i].item_id.8);
          break;
          
        case "Shirt":
          units(res[i].item_id.9);
          break;

        case "Boots":
          units(res[i].item_id.10);
          break;
        }
      });
  }

  function units() { // 3. Prompt the User "How many units?"
    inquirer
      .prompt({
        name: "units",
        type: "input",
        message: "How many units would you like to buy?"
        // answer - stock_quantity FROM item_id
      })
      .then(function(answer) {
        var query = "SELECT position, song, year FROM top5000 WHERE ?";
        connection.query(query, { units: answer.units }, function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
          }
          
          if (answer < res[i].stock_quantity) {

            var query2 = "SUBTRACT stock_quantity FROM item_id WHERE ?";

          } else{
              return console.log("Sorry, we do not have enough in stock.")
          }

        });
      });
    }



//      connection.end(
  //      console.log("ending program DONE")
    //  );





// 4. Check if there are enough units to fulfill order. 
// NOT ENOUGH PRODUCT= Prevent order from going through.
// ENOUGH PRODUCT = Update the SQL databse, subtract number of units. 
// 5. Display total cost of the purchase.  

// Switch Break some things? If "buy shirt", then "