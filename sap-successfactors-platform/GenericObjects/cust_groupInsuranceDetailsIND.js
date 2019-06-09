var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var cust_groupInsuranceDetailsINDEntityBuilder = require("sap-successfactors-platform/GenericObjects/Builders/cust_groupInsuranceDetailsINDEntityBuilder");

exports.BENEFIT_EMPLOYEE_CLAIM_ID = "BenefitEmployeeClaim_id";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CUST_END_DATE = "cust_endDate";
exports.CUST_SICKNESS_DETAILS = "cust_sicknessDetails";
exports.CUST_START_DATE = "cust_startDate";
exports.EXTERNAL_CODE = "externalCode";
exports.EXTERNAL_NAME = "externalName";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_RECORD_STATUS_NAV = "mdfSystemRecordStatusNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new cust_groupInsuranceDetailsINDEntityBuilder();
};

exports.getClient = function(configurations) {
	return new cust_groupInsuranceDetailsINDClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new cust_groupInsuranceDetailsINDClientAsync(configurations);
};

function cust_groupInsuranceDetailsINDClient (configurations) {

	var API_PATH = "/odata/v2/cust_groupInsuranceDetailsIND";

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

function cust_groupInsuranceDetailsINDClientAsync (configurations) {

	var API_PATH = "/odata/v2/cust_groupInsuranceDetailsIND";

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
