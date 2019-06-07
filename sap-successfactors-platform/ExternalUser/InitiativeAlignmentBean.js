var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var InitiativeAlignmentBeanEntityBuilder = require("sap-successfactors-platform/ExternalUser/Builders/InitiativeAlignmentBeanEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EXTERNAL_CODE = "externalCode";
exports.GOAL_ID = "goalId";
exports.GOAL_NAME = "goalName";
exports.GOAL_TYPE = "goalType";
exports.INITIATIVE_GROUP_BEAN_ROW_ID = "initiativeGroupBeanRowId";
exports.INITIATIVE_ID = "initiativeId";
exports.INITIATIVE_NAME = "initiativeName";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_EFFECTIVE_START_DATE = "mdfSystemEffectiveStartDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_STATUS = "mdfSystemStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new InitiativeAlignmentBeanEntityBuilder();
};

exports.getClient = function(configurations) {
	return new InitiativeAlignmentBeanClient(configurations);
};

function InitiativeAlignmentBeanClient (configurations) {

	var API_PATH = "/odata/v2/InitiativeAlignmentBean";

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
