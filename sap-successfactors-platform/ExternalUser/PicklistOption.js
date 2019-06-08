var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var PicklistOptionEntityBuilder = require("sap-successfactors-platform/ExternalUser/Builders/PicklistOptionEntityBuilder");

exports.EXTERNAL_CODE = "externalCode";
exports.ID = "id";
exports.MAX_VALUE = "maxValue";
exports.MIN_VALUE = "minValue";
exports.OPTION_VALUE = "optionValue";
exports.SORT_ORDER = "sortOrder";
exports.STATUS = "status";
exports.CHILD_PICKLIST_OPTIONS = "childPicklistOptions";
exports.PARENT_PICKLIST_OPTION = "parentPicklistOption";
exports.PICKLIST = "picklist";
exports.PICKLIST_LABELS = "picklistLabels";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PicklistOptionEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PicklistOptionClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new PicklistOptionClientAsync(configurations);
};

function PicklistOptionClient (configurations) {

	var API_PATH = "/odata/v2/PicklistOption";

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

function PicklistOptionClientAsync (configurations) {

	var API_PATH = "/odata/v2/PicklistOption";

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
