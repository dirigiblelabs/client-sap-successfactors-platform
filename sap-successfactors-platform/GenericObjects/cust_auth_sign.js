var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var cust_auth_signEntityBuilder = require("sap-successfactors-platform/GenericObjects/Builders/cust_auth_signEntityBuilder");

exports.CREATED_BY = "createdBy";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.CUST_ASOFDATE = "cust_asofdate";
exports.CUST_SIGNATURE = "cust_signature";
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
	return new cust_auth_signEntityBuilder();
};

exports.getClient = function(configurations) {
	return new cust_auth_signClient(configurations);
};

function cust_auth_signClient (configurations) {

	var API_PATH = "/odata/v2/cust_auth_sign";

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
