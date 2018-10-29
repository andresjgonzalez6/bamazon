// Connect the js file to sql database

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 4000,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connection made")
    runSearch();  //This is the application the user see's
  });

function runSearch() {
    inquirer
      .prompt({ // 1. Display all items. Include the ids, names, and prices.
        name: "action",
        type: "list",
        message: "What would you like to do?", // 2. Prompt the User "What would you like to buy?" BELOW
        choices: [
          "Find songs by artist",
          "Find all artists who appear more than once",
          "Find data within a specific range",
          "Search for a specific song"
        ]
      })
      .then(function(answer) { // 3. Prompt the User "How many units?"

        switch (answer.action) {
        case "Find songs by artist":
          artistSearch();
          break;
  
        case "Find all artists who appear more than once":
          multiSearch();
          break;
  
        case "Find data within a specific range":
          rangeSearch();
          break;
  
        case "Search for a specific song":
          songSearch();
          break;
        }
      });
  }
  

// write lines to view and interact bamazon. 


// 4. Check if there are enough units to fulfill order. 
// NOT ENOUGH PRODUCT= Prevent order from going through.
// ENOUGH PRODUCT = Update the SQL databse, subtract number of units. 
// 5. Display total cost of the purchase.  

// Switch Break some things? If "buy shirt", then " "