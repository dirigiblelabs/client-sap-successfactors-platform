var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var ExtAddressInfoEntityBuilder = require("sap-successfactors-platform/ExternalUser/Builders/ExtAddressInfoEntityBuilder");

exports.ADDRESS1 = "address1";
exports.ADDRESS2 = "address2";
exports.ADDRESS_ID = "addressId";
exports.ADDRESS_TYPE = "addressType";
exports.CITY = "city";
exports.COUNTRY = "country";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.PROVINCE = "province";
exports.STATE = "state";
exports.ZIP_CODE = "zipCode";
exports.ADDRESS_TYPE_NAV = "addressTypeNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new ExtAddressInfoEntityBuilder();
};

exports.getClient = function(configurations) {
	return new ExtAddressInfoClient(configurations);
};

function ExtAddressInfoClient (configurations) {

	var API_PATH = "/odata/v2/ExtAddressInfo";

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
