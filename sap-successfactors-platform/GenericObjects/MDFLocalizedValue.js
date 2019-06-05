var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var MDFLocalizedValueEntityBuilder = require("sap-successfactors-platform/GenericObjects/Builders/MDFLocalizedValueEntityBuilder");

exports.LOCALE = "locale";
exports.VALUE = "value";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new MDFLocalizedValueEntityBuilder();
};

exports.getClient = function(configurations) {
	return new MDFLocalizedValueClient(configurations);
};

function MDFLocalizedValueClient (configurations) {

	var API_PATH = "/odata/v2/MDFLocalizedValue";

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
