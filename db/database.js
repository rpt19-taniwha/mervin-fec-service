// MONGOOSE
const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.connect('mongodb+srv://root:root@cluster0-zvbes.mongodb.net/fec?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const ProductSchema = new Schema({
  productNumber: { type: Number, required: true },
  productName: String,
  productDescription: String,
  productCategory: String,
  versions: {},
  storeNumber: Number
});

const ProductModel = mongoose.model('products', ProductSchema);

const fetch = (productNumber, callback) => {
  ProductModel.findOne({ productNumber }, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

module.exports = { fetch };

