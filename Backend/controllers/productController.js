const Product = require('../models/productModel')

exports.getProdcuts=(req,res) =>{
    Product.getAll((err,results) =>{
        if (err) {
            console.error(err); //log any error 
            return res.status(500).json({Error: err})
        }
        return res.json(results)
        
});
            
};

exports.addProduct=(req,res) =>{
    const newProduct =req.body;
    Product.create(newProduct,(err,results) =>{
        if(err) {{
                  console.error(err);  // log any error
            return res.status(500).json({Error: err})
        }
     }
               return res.json({message: "Product added successful",id:results.insertedId})
    })
}
    