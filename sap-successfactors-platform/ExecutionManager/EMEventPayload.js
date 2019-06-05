var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var EMEventPayloadEntityBuilder = require("sap-successfactors-platform/ExecutionManager/Builders/EMEventPayloadEntityBuilder");

exports.FILE_NAME = "fileName";
exports.FILE_TYPE = "fileType";
exports.ID = "id";
exports.MIME_TYPE = "mimeType";
exports.PAYLOAD = "payload";
exports.TYPE = "type";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EMEventPayloadEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EMEventPayloadClient(configurations);
};

function EMEventPayloadClient (configurations) {

	var API_PATH = "/odata/v2/EMEventPayload";

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
