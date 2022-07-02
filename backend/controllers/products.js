
const { request } = require('express');
const { StatusCodes } = require('http-status-codes');
const productModel = require('../Models/productModel')




const allproducts = async (req, res)=>{
   try{
    const allposts = await productModel.find();
    res.json(allposts)
   }catch(err){
    res.json({message:err})
   }
}




const  PostProduct = async (req, res)=>{

    const post = new productModel({
        name: req.body.name,
        image:req.body.image,
        price:req.body.price,
        amount:req.body.amount,
        
    });
    const isduplicate = async()=>{
        try{
            const list = await productModel.find({name:post.name}).exec();
            if(list.length > 0){
                return false
            }
                return true
            
            }catch(err){
                return false
            }
    }
    const is = await isduplicate()
        if(is){
            try{
        
                const c = await post.save()
                res.json(c)
                    }catch(err){
                        res.json({ message: err })}
        }else{
            res.json({message:'Producto ya existe'})
        }

    
    
    
    
    
};
const oneproduct = async (req,res)=>{
    try{
    const post = await productModel.findById(req.params.id)
    if(post){ res.json(post)}
    res.json({message:'producto no encontrado'})
    }catch(err){
        res.json({ message: err })
    }}
const delone = async(req,res)=>{
    try{
        const post = await productModel.remove({_id: req.params.id})
        res.json(post)
        }catch(err){
            res.json({ message: err })
        }
}
;
module.exports = {
    allproducts,
    PostProduct,
    oneproduct,
    delone
}