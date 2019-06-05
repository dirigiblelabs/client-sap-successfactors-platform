var Client = require("sap/Client");
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
}

function getId(id) {
	return "('" + id + "')";
}
