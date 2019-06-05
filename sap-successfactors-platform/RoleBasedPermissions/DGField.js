var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var DGFieldEntityBuilder = require("sap-successfactors-platform/RoleBasedPermissions/Builders/DGFieldEntityBuilder");

exports.DATA_TYPE = "dataType";
exports.LABEL = "label";
exports.NAME = "name";
exports.PICKLIST_ID = "picklistId";
exports.ALLOWED_OPERATORS = "allowedOperators";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new DGFieldEntityBuilder();
};

exports.getClient = function(configurations) {
	return new DGFieldClient(configurations);
};

function DGFieldClient (configurations) {

	var API_PATH = "/odata/v2/DGField";

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
