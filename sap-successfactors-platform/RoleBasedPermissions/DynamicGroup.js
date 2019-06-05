var Client = require("sap/Client");
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
}

function getId(id) {
	return "('" + id + "')";
}
