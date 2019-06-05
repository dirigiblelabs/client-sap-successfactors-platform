var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var SuccessStoreContentBlobEntityBuilder = require("sap-successfactors-platform/SuccessStore/Builders/SuccessStoreContentBlobEntityBuilder");

exports.CONTENT_ID = "contentId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new SuccessStoreContentBlobEntityBuilder();
};

exports.getClient = function(configurations) {
	return new SuccessStoreContentBlobClient(configurations);
};

function SuccessStoreContentBlobClient (configurations) {

	var API_PATH = "/odata/v2/SuccessStoreContentBlob";

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
