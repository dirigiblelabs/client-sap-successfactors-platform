var Client = require("sap/Client");
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

function EMEventClient (configurations) {

	var API_PATH = "/odata/v2/EMEvent";

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
