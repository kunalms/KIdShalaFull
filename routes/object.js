var express = require('express');
var router = express.Router();
var Obj = require('../models/object');


/* GET method  to register user. */
router.post('/add', function(req, res, next) {
	let newObject = new Obj({
  	name:req.body.name,
  	description:req.body.description,
  	original_file_path:"",
  	asset_bundle_path:"",
  	image_path:"",
  	view_count:0,
  	upload_date:new Date(),
  	cat_id:req.body.cat_id,
  	user_id:req.body.user_id,
  	approve_status:0
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

module.exports = router;
