var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var SuccessStoreContentEntityBuilder = require("sap-successfactors-platform/SuccessStore/Builders/SuccessStoreContentEntityBuilder");

exports.BEST_PRACTICE = "bestPractice";
exports.COMMENTS = "comments";
exports.CONTENT_ID = "contentId";
exports.CONTENT_TYPE = "contentType";
exports.CUSTOM_FIELD = "customField";
exports.DEFAULT_CONTENT = "defaultContent";
exports.DEFAULT_CONTENT_NAME = "defaultContentName";
exports.DOMAIN = "domain";
exports.EXPIRY_ON_DATE = "expiryOnDate";
exports.PUBLISH_ON_DATE = "publishOnDate";
exports.REVISION_NO = "revisionNo";
exports.STATUS = "status";
exports.WIZARDABLE = "wizardable";
exports.CONTENT_DATA = "contentData";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new SuccessStoreContentEntityBuilder();
};

exports.getClient = function(configurations) {
	return new SuccessStoreContentClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new SuccessStoreContentClientAsync(configurations);
};

function SuccessStoreContentClient (configurations) {

	var API_PATH = "/odata/v2/SuccessStoreContent";

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

	this.count = function() {
		return this.client.get("/$count");
	};
}

function SuccessStoreContentClientAsync (configurations) {

	var API_PATH = "/odata/v2/SuccessStoreContent";

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

	this.countAsync = function(callback) {
		return this.client.getAsync(callback, "/$count");
	};

	this.execute = function() {
		return this.client.execute();
	};
}

function getId(id) {
	return "('" + id + "')";
}
