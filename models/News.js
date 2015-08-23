var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * News Model
 * ==========
 */

var News = new keystone.List('News');

News.add({
	name: { type: String, required: true },
	thumbimage: { type: Types.LocalFile,dest:'./public/images/upload/news' },
	content: { type: Types.Html },
	date: { type: Types.Date }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
});

// Provide access to Keystone
News.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});

/**
 * Registration
 */

News.defaultColumns = 'name, thumbimage,content, isAdmin';
News.register();
