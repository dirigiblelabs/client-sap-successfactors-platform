var method = RBPRoleEntityBuilder.prototype;

function RBPRoleEntityBuilder() {

}

method.lastModifiedBy = function(lastModifiedBy) {
	this.lastModifiedBy = lastModifiedBy;
	return this;
};

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
	return this;
};

method.roleDesc = function(roleDesc) {
	this.roleDesc = roleDesc;
	return this;
};

method.roleId = function(roleId) {
	this.roleId = roleId;
	return this;
};

method.roleName = function(roleName) {
	this.roleName = roleName;
	return this;
};

method.userType = function(userType) {
	this.userType = userType;
	return this;
};

method.permissions = function(permissions) {
	this.permissions = permissions;
	return this;
};

method.rules = function(rules) {
	this.rules = rules;
	return this;
};

method.build = function() {
	return {
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDate: this.lastModifiedDate,
		roleDesc: this.roleDesc,
		roleId: this.roleId,
		roleName: this.roleName,
		userType: this.userType,
		permissions: this.permissions,
		rules: this.rules
	};
};

module.exports = RBPRoleEntityBuilder;
