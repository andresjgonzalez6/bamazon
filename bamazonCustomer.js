// Connect the js file to sql database
// Need a package.json file. 
// npm install mysql
// npm install inquirer

//require('dotenv').config();
let mysql = require("mysql");
let inquirer = require("inquirer");

// Give Connection Credentials
let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Sette!2018",
  database: "bamazon_db"
});

// in terminal, type in: node bamazonCustomer.js 
connection.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connected to threadId: ' + connection.threadId);
});

let displayQuery = 'SELECT * FROM products';

connection.query(displayQuery, function (err, result, fields) {
  if (err) {
    console.log(err);
    return;
  }
  for (let i = 0; i < result.length; i++) {
    let restable = result[i]; // TAKE A LOOK HERE //
    console.log('\nItem Number: ' + i + '\nItem ID: ' + restable.item_id + '\nProduct Name: ' + restable.product_name + '\nDepartment: ' + restable.department_name + '\nPrice: ' + restable.price + '\nStock: ' + restable.stock_quantity);
  }

  inquirer.prompt([{
    name: 'item_id',
    message: 'Input the number of the item you would like to purchase'
  },
  {
    name: 'qty',
    message: 'How many would you like?'

  }]).then(res => {
    if (isNaN(res.item_id) || isNaN(res.qty)) {
      console.log('Invalid ID or Quantity');
      connection.end();
      return;
    }

    let = sum = result[res.item_id].price * res.qty;

    let change = 'UPDATE products SET stock_quantity = ' + (result[res.item_id].stock_quantity - res.qty) + 'WHERE item_id = ' + result[res.item_id].item_id;

    connection.query(change, (err, result, fields) => {
      if (err) {
        console.log(result[res.item_id].stock_quantity);
        console.log(err);
        console.log('QUERY STRING: ' + change);
      }
      console.log('Order total: $' + sum.toFixed(2));
      connection.end(err => {
        if (err) console.log(err)
      });
    })
  })
});


//      connection.end(
  //      console.log("ending program DONE")
    //  );


    // 1. Display all items. Include the ids, names, and prices.
// 2. Prompt the User "What would you like to buy?" BELOW
// 3. Prompt the User "How many units?"

// 4. Check if there are enough units to fulfill order. 
// NOT ENOUGH PRODUCT= Prevent order from going through.
// ENOUGH PRODUCT = Update the SQL databse, subtract number of units. 
// 5. Display total cost of the purchase.  

// Switch Break some things? If "buy shirt", then "