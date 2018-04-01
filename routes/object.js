var express = require('express');
var router = express.Router();
var path = require('path');
var multer  = require('multer');


const storage = multer.diskStorage({
  destination: path.join(__dirname,'../public/3Dobjects'),
  filename: function(req, file, cb){
    cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
  }
});

const prefab_storage = multer.diskStorage({
  destination: path.join(__dirname,'../public/3Dprefabs'),
  filename: function(req, file, cb){
    cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
  }
});

const upload = multer({storage:storage});
const upload_prefab = multer({storage:prefab_storage});

var Obj = require('../models/object');
var Rating = require('../models/rating');



/* GET method  to authenticate user. */
router.get('/all', function(req, res, next) {
    Obj.listAll((err,data)=>{
      res.json(data);
    })
});

/* GET method  to profile user. */
router.get('/category/:cat_id', function(req, res, next) {
	var details= {cat_id:req.params.cat_id,approve_status:"1"};  
  Obj.findByfield(details,(err,data)=>{
    if(err){
      res.json({success:false,err:err});
    }else{
      res.json(data)
    }
  });
});

router.get('/user/:user_id', function(req, res, next) {
  var details= {user_id:req.params.user_id};
  Obj.findByfield(details,(err,data)=>{
    if(err){
      res.json({success:error,err:err});
    }
    res.json(data);
  });
});


router.post('/upload',upload.single('object') ,function (req, res, next) {
    
  let newObject = new Obj({
    name:req.body.name,
    description:req.body.description,
    original_file_path:"/3Dobjects/",
    asset_bundle_path:"",
    asset_name:"",
    file_name:req.file.filename,
    image_path:"",
    view_count:0,
    upload_date:new Date(),
    cat_id:req.body.cat_id,
    user_id:req.body.user_id,
    approve_status:"0",
    ratings:[]
    });

  Obj.addObject(newObject,(err,object)=>{
    if(err){
      res.json({success:false,msg:"Something went wrong.",err:err});
    }
    else{
      res.json({success:true,msg:"Object sucessfully uploaded.",id:object._id});
    }
  });    
});


router.post('/approve',upload_prefab.single('prefab'),function(req,res,next){
  var id= req.body.id;
  var asset_bundle_path='/3Dprefabs/'+req.file.filename;
  var info ={asset_name:req.body.asset_name,asset_bundle_path:asset_bundle_path,approved_status:"1"};
  Obj.approveObject(id,info,(err,data)=>{
    if(err){
      console.log(err)
      res.json({success:false,msg:"Something went wrong.",err:err});
    }
    else{
      console.log(data);
      res.json({success:true,msg:"Object sucessfully approved."});
    }
  });
});

router.post('/reject',function(req,res,next){
  var id= req.body.id;
  Obj.rejectObject(id,(err,data)=>{
    if(err){
      res.json({success:false,msg:"Something went wrong.",err:err});
    }
    else{
      res.json({success:true,msg:"Object sucessfully rejected."});
    }
  });
});


module.exports = router;
