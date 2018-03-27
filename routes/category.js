var express = require('express');
var router = express.Router();

var Category = require('../models/category');

/* GET Category listing. */
router.get('/all', function(req, res, next) {
	Category.allCategories((err,categories)=>{
		res.json(categories);
	});
});
/* GET Category listing by id. */
router.get('/byid/:id', function(req, res, next) {
	id = req.params.id;
	Category.getCategoryById(id,(err,categories)=>{
		res.json(categories);
	});
});

/* GET Category listing by name. */
router.get('/byname/:name', function(req, res, next) {
	details={name:req.params.name};
	Category.getCategoryByName(details,(err,categories)=>{
		res.json(categories);
	});
});

/* GET Subscriber listing by id. */
router.get('/getsubscribersbyid/:category_id', function(req, res, next) {
	id=req.params.category_id;
	Category.getCategorySubscribers({_id:id},(err,categories)=>{
		res.json(categories);
	});
});

/* GET Subscriber listing by name. */
router.get('/getsubscribersbyname/:category_name', function(req, res, next) {
	category_name=req.params.category_name;
	Category.getCategorySubscribers({name:category_name},(err,categories)=>{
		res.json(categories);
	});
});

/* POST request for adding a Category */
router.post('/add', function(req, res, next) {

	let newCategory = new Category({
  		name:req.body.name,
  		description:req.body.description,
  		subscribers:[]
	});


	Category.addCategory(newCategory,(err,category)=>{
		if(err){
			res.json({success:false,msg:"failed to add Category"});
		}
		else{
			res.json({success:true,msg:"Category added successfully",id:category.id});	
		}
	});
});

/* POST request for adding a Category subscriber */
router.post('/addsubscriber', function(req, res, next) {
	let details={u_id:req.body.u_id,
	category_id:req.body.category_id};

	Category.addCategorySubscriber(details,(err,doc)=>{
		if(err){
			res.json({success:false,msg:"failed to add subscriber"});
		}
		else{
			res.json({success:true,msg:"subscriber added successfully"});	
		}
	});
	
});

/* POST request for removing a Category subscriber */
router.post('/removesubscriber', function(req, res, next) {
	let details={u_id:req.body.u_id,
	category_id:req.body.category_id};

	Category.removeCategorySubscriber(details,(err,doc)=>{
		if(err){
			res.json({success:false,msg:"failed to remove subscriber"});
		}
		else{
			res.json({success:true,msg:"subscriber removed successfully"});	
		}
	});
	
});




module.exports = router;
