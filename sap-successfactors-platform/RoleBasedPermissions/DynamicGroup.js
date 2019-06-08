var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var DynamicGroupEntityBuilder = require("sap-successfactors-platform/RoleBasedPermissions/Builders/DynamicGroupEntityBuilder");

exports.ACTIVE_MEMBERSHIP_COUNT = "activeMembershipCount";
exports.GROUP_I_D = "groupID";
exports.GROUP_NAME = "groupName";
exports.GROUP_TYPE = "groupType";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.STATIC_GROUP = "staticGroup";
exports.USER_TYPE = "userType";
exports.DG_EXCLUDE_POOLS = "dgExcludePools";
exports.DG_INCLUDE_POOLS = "dgIncludePools";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new DynamicGroupEntityBuilder();
};

exports.getClient = function(configurations) {
	return new DynamicGroupClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new DynamicGroupClientAsync(configurations);
};

function DynamicGroupClient (configurations) {

	var API_PATH = "/odata/v2/DynamicGroup";

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

function DynamicGroupClientAsync (configurations) {

	var API_PATH = "/odata/v2/DynamicGroup";

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

	this.countAsync = function(callback) {
		return this.client.getAsync(callback, "/$count");
	};

	this.execute = function() {
		return this.client.execute();
	};
}

function getId(id) {
	return "('" + id + "')";
}
