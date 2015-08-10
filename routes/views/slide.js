var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'slide';
	
	// Load the galleries by sortOrder
	view.query('slide', keystone.list('Slide').model.find().sort('sortOrder'));
	console.log(keystone.list('Slide' ).model.find());
	
	// Render the view
	view.render('slide')
};
