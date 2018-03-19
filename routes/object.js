var express = require('express');
var router = express.Router();
var User = require('../models/user');


/* GET method  to register user. */
router.post('/add', function(req, res, next) {
  let newUser = new User({
  	full_name:req.body.full_name,
  	user_name:req.body.user_name,
  	password:req.body.password,
  	age:req.body.age,
  	gender:req.body.gender,
  	latitude:req.body.latitude,
  	longitude:req.body.longitude,
  	last_seen:new Date()
  });

  User.addUser(newUser,(err,user)=>{
  	if(err){
  		res.json({sucess:false,msg:"failed to register user"});
  	}
  	else{
  		res.json({sucess:true,msg:"user sucessfully registered",id:newUser.id});	
  	}
  });
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
