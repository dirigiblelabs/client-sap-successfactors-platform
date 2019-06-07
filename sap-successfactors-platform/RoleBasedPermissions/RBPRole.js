var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var RBPRoleEntityBuilder = require("sap-successfactors-platform/RoleBasedPermissions/Builders/RBPRoleEntityBuilder");

exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.ROLE_DESC = "roleDesc";
exports.ROLE_ID = "roleId";
exports.ROLE_NAME = "roleName";
exports.USER_TYPE = "userType";
exports.PERMISSIONS = "permissions";
exports.RULES = "rules";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new RBPRoleEntityBuilder();
};

exports.getClient = function(configurations) {
	return new RBPRoleClient(configurations);
};

function RBPRoleClient (configurations) {

	var API_PATH = "/odata/v2/RBPRole";

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
