var keystone = require( 'keystone' );

exports = module.exports = function (req, res) {

	var view = new keystone.View( req, res );
	var locals = res.locals;

	// Set locals
	locals.section = 'presentation';

	var global = 2;
	var count = 0;
	var output = {};

	var query = req.query;
	output['details'] = {
		path: 'images/upload/presentation/' + query.name
	}

	/**
	 * 渲染
	 * @param count
	 */
	var renderView = function (count) {
		if ( count >= global ) {
			view.render( 'presentation-details', output );
		}
	}

	keystone.list( 'Foot' ).model.find().exec( function (err, data) {
		//get Foot and Render the view
		//todo，填充默认值
		output['foot'] = data ? data[0] : {};
		count++;
		renderView( count );
	} )
	keystone.list( 'Logo' ).model.find().exec( function (err, data) {
		//get Logo and Render the view
		//todo，填充默认值
		output['logo'] = data ? data[0] : {};
		count++;
		renderView( count );
	} )
};
