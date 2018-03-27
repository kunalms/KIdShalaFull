const mongoose = require('mongoose');


const CategorySchema = mongoose.Schema({
	name:{
		type:String
	},
	description:{
		type:String
	},
	subscribers:{
		type:[String]
	}
	},{ collection: 'category'});


const Category = module.exports = mongoose.model('Category',CategorySchema);


module.exports.getCategoryById = function(id,callback){
	Category.findById(id,callback);
}

module.exports.getCategoryByName = function(query,callback){
	Category.findOne(query,callback);
}


module.exports.getCategorySubscribers = function(query,callback){
	Category.find(query,'subscribers',callback);
}


module.exports.addCategory = function(newCategory,callback){
	newCategory.save(callback);
}

module.exports.addCategorySubscriber = function(details,callback){
	Category.update({ _id: details.category_id },{ $addToSet: { subscribers: details.u_id} },callback);
}

module.exports.removeCategorySubscriber = function(details,callback){	
	Category.update({ _id: details.category_id },{ $pull: { subscribers: details.u_id} },callback);
}

module.exports.allCategories = function(callback){
	Category.find({},'_id name',callback);
}
