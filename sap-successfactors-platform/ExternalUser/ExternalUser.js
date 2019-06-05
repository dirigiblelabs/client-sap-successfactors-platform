var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var ExternalUserEntityBuilder = require("sap-successfactors-platform/ExternalUser/Builders/ExternalUserEntityBuilder");

exports.DEFAULT_LOCALE = "defaultLocale";
exports.IS_DELETED = "is_deleted";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LOGIN_METHOD = "loginMethod";
exports.PASSWORD = "password";
exports.PERSON_G_U_I_D = "personGUID";
exports.PERSON_ID = "personId";
exports.PERSON_ID_EXTERNAL = "personIdExternal";
exports.PRODUCT_NAME = "productName";
exports.STATUS = "status";
exports.TIME_ZONE = "timeZone";
exports.USER_ID = "userId";
exports.USER_NAME = "userName";
exports.EXT_ADDRESS_INFO = "extAddressInfo";
exports.EXT_EMAIL_INFO = "extEmailInfo";
exports.EXT_PERSONAL_INFO = "extPersonalInfo";
exports.EXT_PHONE_INFO = "extPhoneInfo";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new ExternalUserEntityBuilder();
};

exports.getClient = function(configurations) {
	return new ExternalUserClient(configurations);
};

function ExternalUserClient (configurations) {

	var API_PATH = "/odata/v2/ExternalUser";

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
