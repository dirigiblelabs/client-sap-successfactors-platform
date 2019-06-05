var Client = require("sap/Client");
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

function ThemeTemplateClient (configurations) {

	var API_PATH = "/odata/v2/ThemeTemplate";

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
