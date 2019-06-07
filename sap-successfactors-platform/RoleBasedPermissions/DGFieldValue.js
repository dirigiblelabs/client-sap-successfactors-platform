var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var DGFieldValueEntityBuilder = require("sap-successfactors-platform/RoleBasedPermissions/Builders/DGFieldValueEntityBuilder");

exports.FIELD_VALUE = "fieldValue";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new DGFieldValueEntityBuilder();
};

exports.getClient = function(configurations) {
	return new DGFieldValueClient(configurations);
};

function DGFieldValueClient (configurations) {

	var API_PATH = "/odata/v2/DGFieldValue";

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
