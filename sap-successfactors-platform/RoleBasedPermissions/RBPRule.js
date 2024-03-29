var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
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

exports.getClientAsync = function(configurations) {
	return new RBPRuleClientAsync(configurations);
};

function RBPRuleClient (configurations) {

	var API_PATH = "/odata/v2/RBPRule";

	this.client = new Client(configurations, API_PATH);

	this.list = function(queryParameters, options) {
		return this.client.list(queryParameters, options);
	};

	this.get = function(id, queryParameters, options) {
		return this.client.get(getId(id), queryParameters, options);
	};

	this.create = function(entity, queryParameters, options) {
		return this.client.create(entity, queryParameters, options);
	};

	this.update = function(id, entity, queryParameters, options) {
		return this.client.update(getId(id), entity, queryParameters, options);
	};

	this.delete = function(id, queryParameters, options) {
		return this.client.delete(getId(id), queryParameters, options);
	};

	this.count = function(queryParameters, options) {
		return this.client.get("/$count", queryParameters, options);
	};
}

function RBPRuleClientAsync (configurations) {

	var API_PATH = "/odata/v2/RBPRule";

	this.client = new ClientAsync(configurations, API_PATH);

	this.listAsync = function(callback, queryParameters, options) {
		return this.client.listAsync(callback, queryParameters, options);
	};

	this.getAsync = function(callback, id, queryParameters, options) {
		return this.client.getAsync(callback, getId(id), queryParameters, options);
	};

	this.createAsync = function(callback, entity, queryParameters, options) {
		return this.client.createAsync(callback, entity, queryParameters, options);
	};

	this.updateAsync = function(callback, id, entity, queryParameters, options) {
		return this.client.update(callback, getId(id), entity, queryParameters, options);
	};

	this.deleteAsync = function(callback, id, queryParameters, options) {
		return this.client.deleteAsync(callback, getId(id), queryParameters, options);
	};

	this.countAsync = function(callback, queryParameters, options) {
		return this.client.getAsync(callback, "/$count", queryParameters, options);
	};

	this.execute = function() {
		return this.client.execute();
	};
}

function getId(id) {
	return "('" + id + "')";
}
