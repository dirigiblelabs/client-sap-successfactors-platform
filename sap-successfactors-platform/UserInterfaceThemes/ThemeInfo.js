var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var ThemeInfoEntityBuilder = require("sap-successfactors-platform/UserInterfaceThemes/Builders/ThemeInfoEntityBuilder");

exports.FINGERPRINTS = "fingerprints";
exports.ID = "id";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LOCALE = "locale";
exports.MODULES = "modules";
exports.UI5_THEME = "ui5Theme";
exports.URLS = "urls";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new ThemeInfoEntityBuilder();
};

exports.getClient = function(configurations) {
	return new ThemeInfoClient(configurations);
};

function ThemeInfoClient (configurations) {

	var API_PATH = "/odata/v2/ThemeInfo";

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
