var Client = require("sap/Client");
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

function cust_groupInsuranceDetailsINDClient (configurations) {

	var API_PATH = "/odata/v2/cust_groupInsuranceDetailsIND";

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
