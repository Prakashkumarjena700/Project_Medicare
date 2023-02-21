const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    name: String,
    highlights: String,
    price: Number,
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

const cartModel = mongoose.model("carts", cartSchema)

module.exports = {
    cartModel
}