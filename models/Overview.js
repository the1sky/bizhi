var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Overview Model
 * ==========
 */

var Overview = new keystone.List('Overview');

Overview.add({
	name: { type: String, required: true },
	thumbimage: { type: Types.LocalFile,dest:'./public/images/upload/overview' },
	content: { type: Types.Text },
	date: { type: Types.Date }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
});

// Provide access to Keystone
Overview.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});

/**
 * Registration
 */

Overview.defaultColumns = 'name,thumbimage, content, isAdmin';
Overview.register();
