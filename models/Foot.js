var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Foot Model
 * ==========
 */

var Foot = new keystone.List('Foot');

Foot.add({
	name: { type: String, required: true },
	address: { type: String },
	phone: { type: String },
	fax: { type: String },
	copyright:{type:String}
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
});

// Provide access to Keystone
Foot.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});

/**
 * Registration
 */

Foot.defaultColumns = 'name, address,phone,fax,copyright,isAdmin';
Foot.register();
