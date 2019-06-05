var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var cust_CommutingAllowanceEntityBuilder = require("sap-successfactors-platform/GenericObjects/Builders/cust_CommutingAllowanceEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CUST__AMOUNT = "cust_Amount";
exports.CUST__CONNECTION_POINT = "cust_ConnectionPoint";
exports.CUST__DESTINATION_STATION = "cust_DestinationStation";
exports.CUST__ORIGIN_STATION = "cust_OriginStation";
exports.CUST__PAYMENT_INTERVAL = "cust_PaymentInterval";
exports.CUST__TRAIN_LINENAME1 = "cust_TrainLinename1";
exports.CUST__TRAIN_LINENAME2 = "cust_TrainLinename2";
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
	return new cust_CommutingAllowanceEntityBuilder();
};

exports.getClient = function(configurations) {
	return new cust_CommutingAllowanceClient(configurations);
};

function cust_CommutingAllowanceClient (configurations) {

	var API_PATH = "/odata/v2/cust_CommutingAllowance";

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
