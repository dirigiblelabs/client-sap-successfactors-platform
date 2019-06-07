var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var cust_ProgressiveDisciplinaryActionEntityBuilder = require("sap-successfactors-platform/GenericObjects/Builders/cust_ProgressiveDisciplinaryActionEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CUST__E_E_ACKNOWLEDGEMENT = "cust_EEAcknowledgement";
exports.CUST__FACETO_FACE_MTG = "cust_FacetoFaceMtg";
exports.CUST__INCIDENT_DETAILS = "cust_IncidentDetails";
exports.CUST__INCIDENT_STATUS = "cust_IncidentStatus";
exports.CUST__INITIATE_VERBAL = "cust_InitiateVerbal";
exports.CUST__REASON = "cust_Reason";
exports.CUST__SEVERITY = "cust_Severity";
exports.CUST__VERBAL_COMMENTS = "cust_VerbalComments";
exports.CUST_DATEOFINCIDENT = "cust_dateofincident";
exports.CUST_STEP = "cust_step";
exports.CUST_UNION_REP = "cust_unionRep";
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
	return new cust_ProgressiveDisciplinaryActionEntityBuilder();
};

exports.getClient = function(configurations) {
	return new cust_ProgressiveDisciplinaryActionClient(configurations);
};

function cust_ProgressiveDisciplinaryActionClient (configurations) {

	var API_PATH = "/odata/v2/cust_ProgressiveDisciplinaryAction";

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
