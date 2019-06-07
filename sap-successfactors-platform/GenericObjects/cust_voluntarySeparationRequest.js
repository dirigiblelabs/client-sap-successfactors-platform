var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var cust_voluntarySeparationRequestEntityBuilder = require("sap-successfactors-platform/GenericObjects/Builders/cust_voluntarySeparationRequestEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CUST_EECOMMENTS = "cust_eecomments";
exports.CUST_HRCOMMENTS = "cust_hrcomments";
exports.CUST_LASTDAY = "cust_lastday";
exports.CUST_LASTDAYPPOLICY = "cust_lastdayppolicy";
exports.CUST_MGRCOMMENTS = "cust_mgrcomments";
exports.CUST_NOTICE_PERIOD_MONTHS = "cust_noticePeriodMonths";
exports.CUST_NOTICERECOVERY = "cust_noticerecovery";
exports.CUST_REASON = "cust_reason";
exports.CUST_REQUEST_AS_OF_DATE = "cust_requestAsOfDate";
exports.CUST_SHORTFALLINNPERIOD = "cust_shortfallinnperiod";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.EXTERNAL_CODE = "externalCode";
exports.EXTERNAL_NAME = "externalName";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_RECORD_STATUS_NAV = "mdfSystemRecordStatusNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new cust_voluntarySeparationRequestEntityBuilder();
};

exports.getClient = function(configurations) {
	return new cust_voluntarySeparationRequestClient(configurations);
};

function cust_voluntarySeparationRequestClient (configurations) {

	var API_PATH = "/odata/v2/cust_voluntarySeparationRequest";

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
