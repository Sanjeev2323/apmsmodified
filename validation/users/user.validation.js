const {user}=require('./user.schema');


module.exports={
    adduservalidation:async (req,res,next)=>{
        console.log('hi');
     const value=await user.validate(req.body);
     if(value.error){
         res.send("err");
     }else{
         next();
     }
    }
}