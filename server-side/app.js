// const express = require("express");
// const cors = require("cors");
// const ProdModel = require("./utils/Product");

// const app = express();
// app.use(cors);
// app.use(express.json());


// //Routing
// app.get("/", (req, res) => {
//     res.json({ hello: "world" });
// })

// //Connect database
// const mongoose = require('mongoose');
// const { MongoClient } = require('mongodb');

// // const db_url = "mongodb+srv://unnatin:YeJr1@cluster0.duoyqgt.mongodb.net/product-dashboard";
// const db_url = "mongodb+srv://unnatin:YeJr1@cluster0.duoyqgt.mongodb.net/?retryWrites=true&w=majority";

// //Database connection
// try {
//     mongoose.connect(db_url);
//     console.log("Connected to MongoDB database.");
// } catch (err) {
//     console.log(err);
// }

// //Get your database and collection
// const client = new MongoClient(db_url);
// const database = client.db('product-dashboard');
// const ProductDetails = database.collection('productData');

// //fetch the data
// app.get('/products', async (req, res) => {
//     const products = await ProductDetails.find().toArray();
//     console.log(products)
//     res.send({ data: products });
// })

// // Start the server
// const port = 5001;
// app.listen(port, () => console.log(`Server running on port ${port}`));
// // console.log('Hello World!');


