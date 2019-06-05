var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var TodoEntityBuilder = require("sap-successfactors-platform/Todo/Builders/TodoEntityBuilder");

exports.CATEGORY_ID = "categoryId";
exports.CATEGORY_LABEL = "categoryLabel";
exports.DISPLAY_ORDER = "displayOrder";
exports.STATUS = "status";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new TodoEntityBuilder();
};

exports.getClient = function(configurations) {
	return new TodoClient(configurations);
};

function TodoClient (configurations) {

	var API_PATH = "/odata/v2/Todo";

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