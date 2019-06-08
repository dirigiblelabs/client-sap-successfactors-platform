var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var TodoEntryV2EntityBuilder = require("sap-successfactors-platform/Todo/Builders/TodoEntryV2EntityBuilder");

exports.CATEGORY_ID = "categoryId";
exports.CATEGORY_LABEL = "categoryLabel";
exports.COMPLETED_DATE_TIME = "completedDateTime";
exports.CREATED_DATE = "createdDate";
exports.DUE_DATE = "dueDate";
exports.FORM_DATA_ID = "formDataId";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LINK_URL = "linkUrl";
exports.STATUS = "status";
exports.SUBJECT_ID = "subjectId";
exports.TODO_ENTRY_ID = "todoEntryId";
exports.TODO_ENTRY_NAME = "todoEntryName";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new TodoEntryV2EntityBuilder();
};

exports.getClient = function(configurations) {
	return new TodoEntryV2Client(configurations);
};

exports.getClientAsync = function(configurations) {
	return new TodoEntryV2ClientAsync(configurations);
};

function TodoEntryV2Client (configurations) {

	var API_PATH = "/odata/v2/TodoEntryV2";

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

function TodoEntryV2ClientAsync (configurations) {

	var API_PATH = "/odata/v2/TodoEntryV2";

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
