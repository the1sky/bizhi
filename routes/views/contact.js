var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'contact';
	locals.enquiryTypes = Enquiry.fields.enquiryType.ops;
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;
	
	// On POST requests, add the Enquiry item to the database
	view.on('post', { action: 'contact' }, function(next) {
		
		var newEnquiry = new Enquiry.model(),
			updater = newEnquiry.getUpdateHandler(req);
		
		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, email, phone, enquiryType, message',
			errorMessage: 'There was a problem submitting your enquiry:'
		}, function(err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.enquirySubmitted = true;
			}
			next();
		});
		
	});

	var global = 2;
	var count = 0;
	var output = {};

	/**
	 * 渲染
	 * @param count
	 */
	var renderView = function(count){
		if( count >= global ){
			view.render('contact',output);
		}
	}
	keystone.list('Foot' ).model.find().exec(function(err,data){
		//get Foot and Render the view
		//todo，填充默认值
		output['foot'] = data ? data[0] : {};
		count++;
		renderView( count );
	})
	keystone.list('Logo' ).model.find().exec(function(err,data){
		//get Logo and Render the view
		//todo，填充默认值
		output['logo'] = data ? data[0] : {};
		count++;
		renderView( count );
	})
};
