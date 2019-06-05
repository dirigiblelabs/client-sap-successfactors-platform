var method = RBPBasicPermissionEntityBuilder.prototype;

function RBPBasicPermissionEntityBuilder() {

}

method.permissionId = function(permissionId) {
	this.permissionId = permissionId;
	return this;
};

method.permissionLongValue = function(permissionLongValue) {
	this.permissionLongValue = permissionLongValue;
	return this;
};

method.permissionStringValue = function(permissionStringValue) {
	this.permissionStringValue = permissionStringValue;
	return this;
};

method.permissionType = function(permissionType) {
	this.permissionType = permissionType;
	return this;
};

method.build = function() {
	return {
		permissionId: this.permissionId,
		permissionLongValue: this.permissionLongValue,
		permissionStringValue: this.permissionStringValue,
		permissionType: this.permissionType
	};
};

module.exports = RBPBasicPermissionEntityBuilder;
