import mongoose from "mongoose";
const ProdudctSchema = mongoose.Schema({
    name: String,
    image:String,
    price:Number
},
{
    timestamps:true
}
)
const ProductModel = mongoose.model('products',ProdudctSchema)
export default ProductModel