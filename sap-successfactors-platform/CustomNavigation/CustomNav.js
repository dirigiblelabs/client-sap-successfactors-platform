var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var CustomNavEntityBuilder = require("sap-successfactors-platform/CustomNavigation/Builders/CustomNavEntityBuilder");

exports.ALT_TEXT = "altText";
exports.ALWAYS_SHOW = "alwaysShow";
exports.IS_MODULE = "isModule";
exports.IS_SELECTED = "isSelected";
exports.LABEL = "label";
exports.NEW_WINDOW = "newWindow";
exports.TITLE = "title";
exports.URL = "url";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new CustomNavEntityBuilder();
};

exports.getClient = function(configurations) {
	return new CustomNavClient(configurations);
};

function CustomNavClient (configurations) {

	var API_PATH = "/odata/v2/CustomNav";

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
