var express = require('express');
var router = express.Router();
var User = require('../models/user');


/* GET method  to register user. */
router.post('/register', function(req, res, next) {
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

  
  User.checkUserNameExist({user_name:newUser.user_name},(err,user)=>{
  	if(user== null){
		User.addUser(newUser,(err,user)=>{
			if(err){
				res.json({sucess:false,msg:"failed to register user"});
			}
			else{
				res.json({sucess:true,msg:"user sucessfully registered",id:user.id});	
			}
		});
  	}else{
  		res.json({sucess:false,msg:"Username Not Available"})
  	}
  });



});

/* POST method  to authenticate user. */
router.post('/authenticate', function(req, res, next) {

  var credentials={user_name:req.body.user_name,
  					password:req.body.password};

  User.checkUserNameExist({user_name:credentials.user_name},(err,user)=>{
  	if(user == null){
  		console.log("null user");
  		res.json({sucess:false,msg:"Invalid Username"})
  	}
  	else{
  		userDetails= user;
  		//console.log(userDetails)
  		//console.log(credentials);
  		User.validateUser(credentials,(err,response)=>{
  			if(response){
  				res.json({sucess:true, user:userDetails});
  				//User.checkUserNameExist({user_name:credentials.user_name},(err,user)=>{
  					//res.json({sucess:true, user:user});
  				//});
  			}
  			else{
					res.json({sucess:true, msg:"Invalid details"});
  			}
  		
  		});
  	}
  });
});

/* GET method  to profile user. */
router.get('/profile', function(req, res, next) {
  res.send('profile user');
});

router.get('/checkusername/:user_name', function(req, res, next) {

  var checkusername= req.params.user_name;
  var detail= {user_name:checkusername};
  
  User.checkUserNameExist(detail,(err,user)=>{
  	if(user== null){
  		res.json({sucess:true,msg:"Username Available"})
  	}else{
  		res.json({sucess:false,msg:"Username Not Available"})
  	}
  });
  
});



module.exports = router;
