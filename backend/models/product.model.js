const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: String,
    highlights: String,
    sortdesc: String,
    longdesc: String,
    price: Number,
    discount: Number,
    brand: String,
    uses: String,
    form: String,
    rating: Number,
    img1: String,
    img2: String,
    img3: String,
    img4: String,
    img5: String,
    user: String
})

const productModel = mongoose.model("products", productSchema)

module.exports = {
    productModel
}