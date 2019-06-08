var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var cust_grievancesEntityBuilder = require("sap-successfactors-platform/GenericObjects/Builders/cust_grievancesEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CUST_ATTEND_GRIEVANCE_COMM = "cust_attendGrievanceComm";
exports.CUST_CO_RESPONSE = "cust_coResponse";
exports.CUST_CO_RESPONSE_DUE = "cust_coResponseDue";
exports.CUST_COMMENTS = "cust_comments";
exports.CUST_DATE_SUBMITTED = "cust_dateSubmitted";
exports.CUST_DESCRIPTION = "cust_description";
exports.CUST_GRIEVANCE_NUMBER = "cust_grievanceNumber";
exports.CUST_GRIEVANCE_STATUS = "cust_grievanceStatus";
exports.CUST_HEARD_GRIEVANCE = "cust_heardGrievance";
exports.CUST_MNGR_REP1 = "cust_mngrRep1";
exports.CUST_MNGR_REP2 = "cust_mngrRep2";
exports.CUST_OUTCOME = "cust_outcome";
exports.CUST_UNION = "cust_union";
exports.CUST_UNION_APPEAL = "cust_unionAppeal";
exports.CUST_UNION_APPEAL_DUE = "cust_unionAppealDue";
exports.CUST_UNION_REP1 = "cust_unionRep1";
exports.CUST_UNION_REP2 = "cust_unionRep2";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.EXTERNAL_CODE = "externalCode";
exports.EXTERNAL_NAME = "externalName";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MDF_SYSTEM_CREATED_BY = "mdfSystemCreatedBy";
exports.MDF_SYSTEM_CREATED_DATE = "mdfSystemCreatedDate";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_LAST_MODIFIED_BY = "mdfSystemLastModifiedBy";
exports.MDF_SYSTEM_LAST_MODIFIED_DATE = "mdfSystemLastModifiedDate";
exports.MDF_SYSTEM_LAST_MODIFIED_DATE_WITH_T_Z = "mdfSystemLastModifiedDateWithTZ";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_STATUS = "mdfSystemStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.MDF_SYSTEM_RECORD_STATUS_NAV = "mdfSystemRecordStatusNav";
exports.MDF_SYSTEM_STATUS_NAV = "mdfSystemStatusNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new cust_grievancesEntityBuilder();
};

exports.getClient = function(configurations) {
	return new cust_grievancesClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new cust_grievancesClientAsync(configurations);
};

function cust_grievancesClient (configurations) {

	var API_PATH = "/odata/v2/cust_grievances";

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

function cust_grievancesClientAsync (configurations) {

	var API_PATH = "/odata/v2/cust_grievances";

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
