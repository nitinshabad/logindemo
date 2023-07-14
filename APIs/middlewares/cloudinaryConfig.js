const cloudinary=require("cloudinary").v2;
const multer=require("multer");
const {CloudinaryStorage}=require("multer-storage-cloudinary");

require('dotenv').config()//process.env.PORT

//configure cloudinary
cloudinary.config({
    cloud_name:"db3n1pwr4",
    api_key:"241697537978825",
    api_secret:"7bfUOCdS49E--lWltRutwgIaRiM"
})

//configure cloudinary storage
let clStorage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"vnr2023",
        public_id:(request,file)=>file.fieldname+"-"+Date.now()
    }

})

//configure multer
let multerObj=multer({storage:clStorage})

//export multerObj
module.exports=multerObj;