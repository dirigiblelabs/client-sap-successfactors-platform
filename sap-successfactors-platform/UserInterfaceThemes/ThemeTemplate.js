var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var ThemeTemplateEntityBuilder = require("sap-successfactors-platform/UserInterfaceThemes/Builders/ThemeTemplateEntityBuilder");

exports.BODY_STYLE_CLASS = "bodyStyleClass";
exports.FOOTER = "footer";
exports.HEADER = "header";
exports.ID = "id";
exports.LANG_DIR = "langDir";
exports.LOCALE = "locale";
exports.SCRIPTS = "scripts";
exports.STYLES = "styles";
exports.TEMPLATE = "template";
exports.UI5_BASE_THEME_ROOT_URL = "ui5BaseThemeRootUrl";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new ThemeTemplateEntityBuilder();
};

exports.getClient = function(configurations) {
	return new ThemeTemplateClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new ThemeTemplateClientAsync(configurations);
};

function ThemeTemplateClient (configurations) {

	var API_PATH = "/odata/v2/ThemeTemplate";

	this.client = new Client(configurations, API_PATH);

	this.list = function(queryParameters, options) {
		return this.client.list(queryParameters, options);
	};

	this.get = function(id, queryParameters, options) {
		return this.client.get(getId(id), queryParameters, options);
	};

	this.create = function(entity, queryParameters, options) {
		return this.client.create(entity, queryParameters, options);
	};

	this.update = function(id, entity, queryParameters, options) {
		return this.client.update(getId(id), entity, queryParameters, options);
	};

	this.delete = function(id, queryParameters, options) {
		return this.client.delete(getId(id), queryParameters, options);
	};

	this.count = function(queryParameters, options) {
		return this.client.get("/$count", queryParameters, options);
	};
}

function ThemeTemplateClientAsync (configurations) {

	var API_PATH = "/odata/v2/ThemeTemplate";

	this.client = new ClientAsync(configurations, API_PATH);

	this.listAsync = function(callback, queryParameters, options) {
		return this.client.listAsync(callback, queryParameters, options);
	};

	this.getAsync = function(callback, id, queryParameters, options) {
		return this.client.getAsync(callback, getId(id), queryParameters, options);
	};

	this.createAsync = function(callback, entity, queryParameters, options) {
		return this.client.createAsync(callback, entity, queryParameters, options);
	};

	this.updateAsync = function(callback, id, entity, queryParameters, options) {
		return this.client.update(callback, getId(id), entity, queryParameters, options);
	};

	this.deleteAsync = function(callback, id, queryParameters, options) {
		return this.client.deleteAsync(callback, getId(id), queryParameters, options);
	};

	this.countAsync = function(callback, queryParameters, options) {
		return this.client.getAsync(callback, "/$count", queryParameters, options);
	};

	this.execute = function() {
		return this.client.execute();
	};
}

function getId(id) {
	return "('" + id + "')";
}
