var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var ExternalLearnerPhoneInfoEntityBuilder = require("sap-successfactors-platform/ExternalUser/Builders/ExternalLearnerPhoneInfoEntityBuilder");

exports.AREA_CODE = "areaCode";
exports.COUNTRY_CODE = "countryCode";
exports.EXTENSION = "extension";
exports.IS_PRIMARY = "isPrimary";
exports.IS_DELETED = "is_deleted";
exports.ITEM_ID = "itemId";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.PHONE_NUMBER = "phoneNumber";
exports.PHONE_TYPE = "phoneType";
exports.PHONE_TYPE_NAV = "phoneTypeNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new ExternalLearnerPhoneInfoEntityBuilder();
};

exports.getClient = function(configurations) {
	return new ExternalLearnerPhoneInfoClient(configurations);
};

function ExternalLearnerPhoneInfoClient (configurations) {

	var API_PATH = "/odata/v2/ExternalLearnerPhoneInfo";

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
