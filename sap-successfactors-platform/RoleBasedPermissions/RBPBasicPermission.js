var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var RBPBasicPermissionEntityBuilder = require("sap-successfactors-platform/RoleBasedPermissions/Builders/RBPBasicPermissionEntityBuilder");

exports.PERMISSION_ID = "permissionId";
exports.PERMISSION_LONG_VALUE = "permissionLongValue";
exports.PERMISSION_STRING_VALUE = "permissionStringValue";
exports.PERMISSION_TYPE = "permissionType";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new RBPBasicPermissionEntityBuilder();
};

exports.getClient = function(configurations) {
	return new RBPBasicPermissionClient(configurations);
};

function RBPBasicPermissionClient (configurations) {

	var API_PATH = "/odata/v2/RBPBasicPermission";

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
