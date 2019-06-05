var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var PicklistEntityBuilder = require("sap-successfactors-platform/ExternalUser/Builders/PicklistEntityBuilder");

exports.PICKLIST_ID = "picklistId";
exports.PICKLIST_OPTIONS = "picklistOptions";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PicklistEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PicklistClient(configurations);
};

function PicklistClient (configurations) {

	var API_PATH = "/odata/v2/Picklist";

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
