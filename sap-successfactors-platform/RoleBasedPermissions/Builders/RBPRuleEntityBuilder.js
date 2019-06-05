var method = RBPRuleEntityBuilder.prototype;

function RBPRuleEntityBuilder() {

}

method.accessGroupLevel = function(accessGroupLevel) {
	this.accessGroupLevel = accessGroupLevel;
	return this;
};

method.accessUserType = function(accessUserType) {
	this.accessUserType = accessUserType;
	return this;
};

method.excludeSelf = function(excludeSelf) {
	this.excludeSelf = excludeSelf;
	return this;
};

method.includeSelf = function(includeSelf) {
	this.includeSelf = includeSelf;
	return this;
};

method.myFilter = function(myFilter) {
	this.myFilter = myFilter;
	return this;
};

method.relationRole = function(relationRole) {
	this.relationRole = relationRole;
	return this;
};

method.ruleId = function(ruleId) {
	this.ruleId = ruleId;
	return this;
};

method.status = function(status) {
	this.status = status;
	return this;
};

method.targetGroupLevel = function(targetGroupLevel) {
	this.targetGroupLevel = targetGroupLevel;
	return this;
};

method.targetUserType = function(targetUserType) {
	this.targetUserType = targetUserType;
	return this;
};

method.accessGroups = function(accessGroups) {
	this.accessGroups = accessGroups;
	return this;
};

method.roles = function(roles) {
	this.roles = roles;
	return this;
};

method.targetGroups = function(targetGroups) {
	this.targetGroups = targetGroups;
	return this;
};

method.build = function() {
	return {
		accessGroupLevel: this.accessGroupLevel,
		accessUserType: this.accessUserType,
		excludeSelf: this.excludeSelf,
		includeSelf: this.includeSelf,
		myFilter: this.myFilter,
		relationRole: this.relationRole,
		ruleId: this.ruleId,
		status: this.status,
		targetGroupLevel: this.targetGroupLevel,
		targetUserType: this.targetUserType,
		accessGroups: this.accessGroups,
		roles: this.roles,
		targetGroups: this.targetGroups
	};
};

module.exports = RBPRuleEntityBuilder;
