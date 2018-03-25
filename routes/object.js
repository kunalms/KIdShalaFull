var express = require('express');
var router = express.Router();
var path = require('path');
var multer  = require('multer');


const storage = multer.diskStorage({
  destination: path.join(__dirname,'../test/'),
  filename: function(req, file, cb){
    cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
  }
});

const upload = multer({storage:storage}).single('object');

var Obj = require('../models/object');
var Rating = require('../models/rating');


/* GET method  to register user. */
router.post('/add', function(req, res, next) {
	let newObject = new Obj({
  	name:req.body.name,
  	description:req.body.description,
  	original_file_path:"/3D_Objects/",
  	asset_bundle_path:"",
  	image_path:"",
  	view_count:0,
  	upload_date:new Date(),
  	cat_id:req.body.cat_id,
  	user_id:req.body.user_id,
  	approve_status:0,
    ratings:[]
  });

	res.json(newObject);
  
  // Obj.addObject(newUser,(err,object)=>{
  // 	if(err){
  // 		res.json({sucess:false,msg:"failed to submit your object please try later."});
  // 	}
  // 	else{
  // 		res.json({sucess:true,msg:"your object sucessfully uploaded.",id:object.id});	
  // 	}
  // });
});

/* GET method  to authenticate user. */
router.get('/all', function(req, res, next) {
  
});

/* GET method  to profile user. */
router.get('/category/:cat_id', function(req, res, next) {
	var category_id=req.params.cat_id;  
});

router.get('/category/:cat_name', function(req, res, next) {
	var category_name=req.params.cat_name;

  
});

router.post('/upload', function (req, res, next) {
    upload(req,res, (err)=>{
      if(err){
        res.json({success:false,msg:"failed"});
      }else{
        console.log(req.file);
        res.json({success:true,msg:"success"});
      }
    });
});

module.exports = router;
