var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var ThemeConfigEntityBuilder = require("sap-successfactors-platform/UserInterfaceThemes/Builders/ThemeConfigEntityBuilder");

exports.ID = "id";
exports.THEME_CONFIGURATION = "themeConfiguration";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new ThemeConfigEntityBuilder();
};

exports.getClient = function(configurations) {
	return new ThemeConfigClient(configurations);
};

function ThemeConfigClient (configurations) {

	var API_PATH = "/odata/v2/ThemeConfig";

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
