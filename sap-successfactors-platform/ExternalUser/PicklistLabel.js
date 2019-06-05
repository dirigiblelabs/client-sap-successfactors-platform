var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var PicklistLabelEntityBuilder = require("sap-successfactors-platform/ExternalUser/Builders/PicklistLabelEntityBuilder");

exports.ID = "id";
exports.LABEL = "label";
exports.LOCALE = "locale";
exports.OPTION_ID = "optionId";
exports.PICKLIST_OPTION = "picklistOption";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PicklistLabelEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PicklistLabelClient(configurations);
};

function PicklistLabelClient (configurations) {

	var API_PATH = "/odata/v2/PicklistLabel";

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
