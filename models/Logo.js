var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Logo Model
 * ==========
 */

var Logo = new keystone.List('Logo');

Logo.add({
	name: { type: String, required: true },
	url: { type: Types.LocalFile,dest:'./public/images/upload/logo' }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
});

// Provide access to Keystone
Logo.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});

/**
 * Registration
 */

Logo.defaultColumns = 'name,url,isAdmin';
Logo.register();
