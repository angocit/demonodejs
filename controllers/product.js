import ProductModel from "../models/product.js";
export const getAllProduct = async(req,res)=>{
    try {
        const products = await ProductModel.find();
        return res.status(200).json({status:true,data:products})
    } catch (error) {
        return res.status(503).json({status:false,message:'Lỗi request'})
    }
}
export const getProductByID = async(req,res)=>{
    try {
        const id = req.params.id;
        const products = await ProductModel.find({_id:id});
        return res.status(200).json({status:true,data:products})
    } catch (error) {
        return res.status(503).json({status:false,message:'Lỗi request'})
    }
}
export const addProduct = async(req,res)=>{
    try {
        const body = req.body;
        const productmodel = new ProductModel(body)
        const products = await productmodel.save()
        return res.status(200).json({status:true,data:products})
    } catch (error) {
        return res.status(503).json({status:false,message:'Lỗi request'})
    }
}
export const UpDateProduct = async(req,res)=>{
    try {
        const body = req.body;
        const id = req.params.id;
        const product = await ProductModel.findOneAndUpdate({_id:id},body,{new:true})
        return res.status(200).json({status:true,data:product,message:"Cập nhật thành công"})
    } catch (error) {
        return res.status(503).json({status:false,message:'Lỗi request'+error})
    }
}
export const DeleteProduct = async(req,res)=>{
    try {
        const id = req.params.id;
        const product = await ProductModel.findOneAndDelete({_id:id})
        return res.status(200).json({status:true,data:product,message:"Xóa sản phẩm thành công"})
    } catch (error) {
        return res.status(503).json({status:false,message:'Lỗi request'})
    }
}