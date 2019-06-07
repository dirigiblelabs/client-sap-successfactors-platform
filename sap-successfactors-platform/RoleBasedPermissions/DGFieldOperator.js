var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var DGFieldOperatorEntityBuilder = require("sap-successfactors-platform/RoleBasedPermissions/Builders/DGFieldOperatorEntityBuilder");

exports.LABEL = "label";
exports.TOKEN = "token";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new DGFieldOperatorEntityBuilder();
};

exports.getClient = function(configurations) {
	return new DGFieldOperatorClient(configurations);
};

function DGFieldOperatorClient (configurations) {

	var API_PATH = "/odata/v2/DGFieldOperator";

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
