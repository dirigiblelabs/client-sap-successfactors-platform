var Client = require("sap/Client");
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

function SuccessStoreContentClient (configurations) {

	var API_PATH = "/odata/v2/SuccessStoreContent";

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
