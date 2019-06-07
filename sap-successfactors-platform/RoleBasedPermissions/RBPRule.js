var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var RBPRuleEntityBuilder = require("sap-successfactors-platform/RoleBasedPermissions/Builders/RBPRuleEntityBuilder");

exports.ACCESS_GROUP_LEVEL = "accessGroupLevel";
exports.ACCESS_USER_TYPE = "accessUserType";
exports.EXCLUDE_SELF = "excludeSelf";
exports.INCLUDE_SELF = "includeSelf";
exports.MY_FILTER = "myFilter";
exports.RELATION_ROLE = "relationRole";
exports.RULE_ID = "ruleId";
exports.STATUS = "status";
exports.TARGET_GROUP_LEVEL = "targetGroupLevel";
exports.TARGET_USER_TYPE = "targetUserType";
exports.ACCESS_GROUPS = "accessGroups";
exports.ROLES = "roles";
exports.TARGET_GROUPS = "targetGroups";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new RBPRuleEntityBuilder();
};

exports.getClient = function(configurations) {
	return new RBPRuleClient(configurations);
};

function RBPRuleClient (configurations) {

	var API_PATH = "/odata/v2/RBPRule";

	this.client = new Client(configurations, API_PATH);

	this.list = function(queryParameters) {
		return this.client.list(queryParameters);
	};

	this.get = function(id, queryParameters) {
		return this.client.get(getId(id), queryParameters);
	};

	this.create = function(entity, queryParameters) {
		return this.client.create(entity, queryParameters);
	};

	this.update = function(id, entity, queryParameters) {
		return this.client.update(getId(id), entity, queryParameters);
	};

	this.delete = function(id, queryParameters) {
		return this.client.delete(getId(id), queryParameters);
	};

	this.count = function() {
		return this.client.get("/$count");
	};
}

function getId(id) {
	return "('" + id + "')";
}
