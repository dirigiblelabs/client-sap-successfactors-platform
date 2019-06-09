var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var EMEventEntityBuilder = require("sap-successfactors-platform/ExecutionManager/Builders/EMEventEntityBuilder");

exports.EVENT_DESCRIPTION = "eventDescription";
exports.EVENT_DESCRIPTION_MSG_KEY = "eventDescriptionMsgKey";
exports.EVENT_NAME = "eventName";
exports.EVENT_TIME = "eventTime";
exports.EVENT_TYPE = "eventType";
exports.ID = "id";
exports.EVENT_ATTRIBUTES = "eventAttributes";
exports.EVENT_PAYLOAD = "eventPayload";
exports.PROCESS = "process";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EMEventEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EMEventClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new EMEventClientAsync(configurations);
};

function EMEventClient (configurations) {

	var API_PATH = "/odata/v2/EMEvent";

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

function EMEventClientAsync (configurations) {

	var API_PATH = "/odata/v2/EMEvent";

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
