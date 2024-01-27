//model to fetch the record from product-data collection
const mongoose = require("mongoose");

const ProdSchema = new mongoose.Schema({
    p_id: Number,
    p_name: String,
    p_desc: String
});

//model
// const ProdModel = mongoose.model("prods", ProdSchema);
const ProdModel = mongoose.model("ProdModel", ProdSchema);
module.exports = ProdModel;