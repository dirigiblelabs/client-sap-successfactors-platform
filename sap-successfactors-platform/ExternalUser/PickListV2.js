var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var PickListV2EntityBuilder = require("sap-successfactors-platform/ExternalUser/Builders/PickListV2EntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.DISPLAY_ORDER = "displayOrder";
exports.EFFECTIVE_END_DATE = "effectiveEndDate";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.ID = "id";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.LEGACY_PICK_LIST_ID = "legacyPickListId";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.NAME = "name";
exports.PARENT_PICK_LIST = "parentPickList";
exports.PICKLIST_CREATION_SOURCE = "picklistCreationSource";
exports.STATUS = "status";
exports.PARENT_PICK_LIST_NAV = "parentPickListNav";
exports.VALUES = "values";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PickListV2EntityBuilder();
};

exports.getClient = function(configurations) {
	return new PickListV2Client(configurations);
};

function PickListV2Client (configurations) {

	var API_PATH = "/odata/v2/PickListV2";

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
