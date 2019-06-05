var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var DGFilterEntityBuilder = require("sap-successfactors-platform/RoleBasedPermissions/Builders/DGFilterEntityBuilder");

exports.FILTER_ID = "filterId";
exports.EXPRESSIONS = "expressions";
exports.FIELD = "field";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new DGFilterEntityBuilder();
};

exports.getClient = function(configurations) {
	return new DGFilterClient(configurations);
};

function DGFilterClient (configurations) {

	var API_PATH = "/odata/v2/DGFilter";

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
