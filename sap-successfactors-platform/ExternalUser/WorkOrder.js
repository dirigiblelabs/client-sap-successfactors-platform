var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var WorkOrderEntityBuilder = require("sap-successfactors-platform/ExternalUser/Builders/WorkOrderEntityBuilder");

exports.BILLING_AMOUNT = "billingAmount";
exports.BILLING_RATE = "billingRate";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CURRENCY = "currency";
exports.EFFECTIVE_END_DATE = "effectiveEndDate";
exports.EFFECTIVE_START_DATE = "effectiveStartDate";
exports.EFFECTIVE_STATUS = "effectiveStatus";
exports.END_DATE = "endDate";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.START_DATE = "startDate";
exports.USER_SYS_ID = "userSysId";
exports.VENDOR = "vendor";
exports.WORK_ORDER_ID = "workOrderId";
exports.WORK_ORDER_NAME = "workOrderName";
exports.WORK_ORDER_OWNER_ID = "workOrderOwnerId";
exports.WORKER_TYPE = "workerType";
exports.CURRENCY_NAV = "currencyNav";
exports.VENDOR_NAV = "vendorNav";
exports.WORKER_TYPE_NAV = "workerTypeNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new WorkOrderEntityBuilder();
};

exports.getClient = function(configurations) {
	return new WorkOrderClient(configurations);
};

function WorkOrderClient (configurations) {

	var API_PATH = "/odata/v2/WorkOrder";

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
