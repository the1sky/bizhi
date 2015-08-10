var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'overview';
	
	// Load the galleries by sortOrder
	view.query('overview', keystone.list('Overview').model.find().sort('sortOrder'));
	
	keystone.list('Slide' ).model.find().exec(function(err,data){
		// Render the view
		view.render('overview',{slides:data});
	});
	
};
