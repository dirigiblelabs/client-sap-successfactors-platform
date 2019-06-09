var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
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

exports.getClientAsync = function(configurations) {
	return new ExternalUserClientAsync(configurations);
};

function ExternalUserClient (configurations) {

	var API_PATH = "/odata/v2/ExternalUser";

	this.client = new Client(configurations, API_PATH);

	this.list = function(queryParameters, options) {
		return this.client.list(queryParameters, options);
	};

	this.get = function(id, queryParameters, options) {
		return this.client.get(getId(id), queryParameters, options);
	};

	this.create = function(entity, queryParameters, options) {
		return this.client.create(entity, queryParameters, options);
	};

	this.update = function(id, entity, queryParameters, options) {
		return this.client.update(getId(id), entity, queryParameters, options);
	};

	this.delete = function(id, queryParameters, options) {
		return this.client.delete(getId(id), queryParameters, options);
	};

	this.count = function() {
		return this.client.get("/$count");
	};
}

function ExternalUserClientAsync (configurations) {

	var API_PATH = "/odata/v2/ExternalUser";

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
