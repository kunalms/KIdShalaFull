const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const UserSchema = mongoose.Schema({
	full_name:{
		type:String
	},
	user_name:{
		type:String,
		required:true
	},
	password:{
		type:String,
		require:true
	},
	birthdate:{
		type:Date
	},
	gender:{
		type:String
	},
	latitude:{
		type:Number
	},
	longitude:{
		type:Number
	},
	last_seen:{
		type:Date
	}
},{collection:'user'});

const User = module.exports = mongoose.model('User',UserSchema);


module.exports.getUserById = function(id,callback){
	User.findById(id,callback);
}


module.exports.addUser=function(newUser, callback){
	bcrypt.genSalt(10,(err,salt)=>{
		bcrypt.hash(newUser.password,salt,(err,hash)=>{
			if(err) throw err;
			newUser.password=hash;
			newUser.save(callback);
		});
	});
}

module.exports.validateUser= function(credentials,callback){
	
	User.findOne({user_name:credentials.user_name},function(err,user){
		bcrypt.compare(credentials.password,user.password,callback);
	})
	
}

module.exports.checkUserNameExist= function(detail,callback){
	User.findOne(detail,callback);
}