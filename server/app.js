const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");


const app = express();
app.get("/", (req, res) => {
  res.send("Up and coming...");
});
app.use(cors());

// Middle ware to extract info from the html body name attribute
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const myDB = mysql.createConnection({
  host: "localhost",
  user: "Abri-Tech", // MySQL username
  password: "abritech", // MySQL password
  database: "Abri-Tech", // Database to use
});

myDB.connect((err) => {
  if (err) {
    console.log("Db is not connected", err.message);
  } else {
    console.log("mysql db is connected");
  }
});


app.get("/install", (req, res) => {
  // SQL query to create "product" table
  let product = `CREATE TABLE IF NOT EXISTS products(
            product_id INT AUTO_INCREMENT,
            product_url VARCHAR(255) NOT NULL,
            product_name VARCHAR(255) NOT NULL,
            PRIMARY KEY (product_id)
        )`;

  // SQL query to create "Description" table
  let description = `CREATE TABLE IF NOT EXISTS descriptions(
            description_id INT AUTO_INCREMENT,
            product_id INT NOT NULL,
            Product_brief_description VARCHAR(255) NOT NULL,
            Product_description TEXT NOT NULL,
            Product_img VARCHAR(255) NOT NULL,
            Product_link VARCHAR(255) NOT NULL,
            PRIMARY KEY (description_id),
            FOREIGN KEY (product_id) REFERENCES products (product_id)
        )`;

  // SQL query to create "product-Price" table
  let price = `CREATE TABLE IF NOT EXISTS prices(
            price_id INT AUTO_INCREMENT,
            product_id INT NOT NULL,
            Starting_price VARCHAR(255) NOT NULL,
            Price_range VARCHAR(255) NOT NULL,
            PRIMARY KEY (price_id),
            FOREIGN KEY (product_id) REFERENCES products (product_id)
        )`;

  // SQL query to create "User" table
  let user = `CREATE TABLE IF NOT EXISTS users(
            user_id INT AUTO_INCREMENT,
            User_name VARCHAR(255) NOT NULL,
            User_password VARCHAR(255) NOT NULL,
            PRIMARY KEY (user_id)
        )`;

  // SQL query to create "Orders" table
  let order = `CREATE TABLE IF NOT EXISTS orders(
            order_id INT AUTO_INCREMENT,
            product_id INT NOT NULL,
            user_id INT NOT NULL,
            
            PRIMARY KEY (order_id),
            FOREIGN KEY (product_id) REFERENCES products (product_id),
             FOREIGN KEY (user_id) REFERENCES users (user_id)
        )`;

  myDB.query(product, (err) => {
    if (err) console.log(err);
  });

  myDB.query(description, (err) => {
    if (err) console.log(err);
  });

  myDB.query(price, (err) => {
    if (err) console.log(err);
  });

  myDB.query(user, (err) => {
    if (err) console.log(err);
  });

  myDB.query(order, (err) => {
    if (err) console.log(err);
  });
  res.end("Table is created");
});

app.post("/add-iPhones", (req, res) => {
  // console.log(req.body);
  const {
    product_name,
    product_url,
    product_brief_description,
    product_description,
    product_img,
    product_link,
    starting_price,
    price_range,
  } = req.body;

  // Insert Product
  let insertProduct =
    "INSERT INTO products (product_name, product_url) values(?, ?)";
  // let insert_product_url = "INSERT INTO products (product_id, ) value(?)";

  myDB.query(
    insertProduct,
    [product_name, product_url],
    (err, result, fields) => {
      if (err) console.log(err);
      else console.log(result);

      // Insert Product Description Table
      let productId = result.insertId;
      let insertDescription =
        " INSERT INTO descriptions (product_id, product_brief_description, product_description, product_img, product_link) values(?, ?, ?, ?, ?)  ";

      myDB.query(
        insertDescription,
        [
          productId,
          product_brief_description,
          product_description,
          product_img,
          product_link,
        ],
        (err, result, fields) => {
          if (err) console.log(err);
          else console.log(result);
        }
      );

      // Insert Product Price Table
      let insertPrice =
        "INSERT INTO prices (product_id, starting_price, price_range) values(?, ?, ?)";
      myDB.query(
        insertPrice,
        [productId, starting_price, price_range],
        (err, result, fields) => {
          if (err) console.log(err);
          else console.log(res);
        }
      );

      // res.send("Received");
      res.json({ message: "Received" });
    }
  );
});

//Get all iphone products
app.get("/iphones", (req, res) => {
  myDB.query(
    "SELECT * FROM products JOIN descriptions JOIN prices ON products.product_id = descriptions.product_id AND products.product_id = prices.product_id",
    (err, rows, fields) => {
      console.log(rows);
      let iphones = { products: rows };
      // iphones.products = rows;
      console.log(iphones);
      var stringIphones = JSON.stringify(iphones);
      console.log(stringIphones);
      if (!err) res.end(stringIphones);
      else console.log(err);
    }
  );
});

// Single Iphone product
app.get("/iphones/:id", (req, res) => {
  const phoneId = req.params.id;
  const query = `
    SELECT * FROM products
    JOIN descriptions ON products.product_id = descriptions.product_id
    JOIN prices ON products.product_id = prices.product_id
    WHERE products.product_id = ?
  `;

  myDB.query(query, [phoneId], (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      res.status(500).send("Internal Server Error");
    } else if (rows.length === 0) {
      res.status(404).send("Product not found");
    } else {
      const phone = rows[0];
      res.json(phone);
    }
  });
});


app.listen(8000, () => {
  console.log("Server is run on: http://localhost:8000");
});
