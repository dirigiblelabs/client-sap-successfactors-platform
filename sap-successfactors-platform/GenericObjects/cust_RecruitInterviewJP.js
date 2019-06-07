var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var cust_RecruitInterviewJPEntityBuilder = require("sap-successfactors-platform/GenericObjects/Builders/cust_RecruitInterviewJPEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CUST__R_C_INT_1_COMMU = "cust_RCInt_1Commu";
exports.CUST__R_C_INT_1_COMMU_G_R = "cust_RCInt_1CommuGR";
exports.CUST__R_C_INT_2_MIND = "cust_RCInt_2Mind";
exports.CUST__R_C_INT_2_MIND_G_R = "cust_RCInt_2MindGR";
exports.CUST__R_C_INT_3_LEAD = "cust_RCInt_3Lead";
exports.CUST__R_C_INT_3_LEAD_G_R = "cust_RCInt_3LeadGR";
exports.CUST__R_C_INT_4_CREDIT = "cust_RCInt_4Credit";
exports.CUST__R_C_INT_4_CREDIT_G_R = "cust_RCInt_4CreditGR";
exports.CUST__R_C_INT__FINAL_G_R = "cust_RCInt_FinalGR";
exports.CUST__R_C_INT__FINAL_T_X_T = "cust_RCInt_FinalTXT";
exports.CUST__R_CINTERVIEWER = "cust_RCinterviewer";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.EXTERNAL_CODE = "externalCode";
exports.EXTERNAL_NAME = "externalName";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_RECORD_STATUS_NAV = "mdfSystemRecordStatusNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new cust_RecruitInterviewJPEntityBuilder();
};

exports.getClient = function(configurations) {
	return new cust_RecruitInterviewJPClient(configurations);
};

function cust_RecruitInterviewJPClient (configurations) {

	var API_PATH = "/odata/v2/cust_RecruitInterviewJP";

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
