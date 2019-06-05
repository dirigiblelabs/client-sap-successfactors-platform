var method = DynamicGroupEntityBuilder.prototype;

function DynamicGroupEntityBuilder() {

}

method.activeMembershipCount = function(activeMembershipCount) {
	this.activeMembershipCount = activeMembershipCount;
	return this;
};

method.groupID = function(groupID) {
	this.groupID = groupID;
	return this;
};

method.groupName = function(groupName) {
	this.groupName = groupName;
	return this;
};

method.groupType = function(groupType) {
	this.groupType = groupType;
	return this;
};

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
	return this;
};

method.staticGroup = function(staticGroup) {
	this.staticGroup = staticGroup;
	return this;
};

method.userType = function(userType) {
	this.userType = userType;
	return this;
};

method.dgExcludePools = function(dgExcludePools) {
	this.dgExcludePools = dgExcludePools;
	return this;
};

method.dgIncludePools = function(dgIncludePools) {
	this.dgIncludePools = dgIncludePools;
	return this;
};

method.build = function() {
	return {
		activeMembershipCount: this.activeMembershipCount,
		groupID: this.groupID,
		groupName: this.groupName,
		groupType: this.groupType,
		lastModifiedDate: this.lastModifiedDate,
		staticGroup: this.staticGroup,
		userType: this.userType,
		dgExcludePools: this.dgExcludePools,
		dgIncludePools: this.dgIncludePools
	};
};

module.exports = DynamicGroupEntityBuilder;
