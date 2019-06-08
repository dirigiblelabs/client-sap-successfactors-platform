var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var ExternalLearnerAddressInfoEntityBuilder = require("sap-successfactors-platform/ExternalUser/Builders/ExternalLearnerAddressInfoEntityBuilder");

exports.ADDRESS10_ALT1 = "address10Alt1";
exports.ADDRESS10_ALT2 = "address10Alt2";
exports.ADDRESS11_ALT1 = "address11Alt1";
exports.ADDRESS11_ALT2 = "address11Alt2";
exports.ADDRESS12_ALT1 = "address12Alt1";
exports.ADDRESS12_ALT2 = "address12Alt2";
exports.ADDRESS13_ALT1 = "address13Alt1";
exports.ADDRESS13_ALT2 = "address13Alt2";
exports.ADDRESS14_ALT1 = "address14Alt1";
exports.ADDRESS14_ALT2 = "address14Alt2";
exports.ADDRESS15_ALT1 = "address15Alt1";
exports.ADDRESS15_ALT2 = "address15Alt2";
exports.ADDRESS16_ALT1 = "address16Alt1";
exports.ADDRESS16_ALT2 = "address16Alt2";
exports.ADDRESS17_ALT1 = "address17Alt1";
exports.ADDRESS17_ALT2 = "address17Alt2";
exports.ADDRESS18_ALT1 = "address18Alt1";
exports.ADDRESS18_ALT2 = "address18Alt2";
exports.ADDRESS19_ALT1 = "address19Alt1";
exports.ADDRESS19_ALT2 = "address19Alt2";
exports.ADDRESS1_ALT1 = "address1Alt1";
exports.ADDRESS1_ALT2 = "address1Alt2";
exports.ADDRESS20_ALT1 = "address20Alt1";
exports.ADDRESS20_ALT2 = "address20Alt2";
exports.ADDRESS2_ALT1 = "address2Alt1";
exports.ADDRESS2_ALT2 = "address2Alt2";
exports.ADDRESS3_ALT1 = "address3Alt1";
exports.ADDRESS3_ALT2 = "address3Alt2";
exports.ADDRESS4_ALT1 = "address4Alt1";
exports.ADDRESS4_ALT2 = "address4Alt2";
exports.ADDRESS5_ALT1 = "address5Alt1";
exports.ADDRESS5_ALT2 = "address5Alt2";
exports.ADDRESS6_ALT1 = "address6Alt1";
exports.ADDRESS6_ALT2 = "address6Alt2";
exports.ADDRESS7_ALT1 = "address7Alt1";
exports.ADDRESS7_ALT2 = "address7Alt2";
exports.ADDRESS8_ALT1 = "address8Alt1";
exports.ADDRESS8_ALT2 = "address8Alt2";
exports.ADDRESS9_ALT1 = "address9Alt1";
exports.ADDRESS9_ALT2 = "address9Alt2";
exports.ADDRESS_TYPE = "addressType";
exports.CITY_ALT1 = "cityAlt1";
exports.CITY_ALT2 = "cityAlt2";
exports.COUNTY_ALT1 = "countyAlt1";
exports.COUNTY_ALT2 = "countyAlt2";
exports.CUSTOM_DATE1_ALT1 = "customDate1Alt1";
exports.CUSTOM_DATE1_ALT2 = "customDate1Alt2";
exports.CUSTOM_DOUBLE1_ALT1 = "customDouble1Alt1";
exports.CUSTOM_DOUBLE1_ALT2 = "customDouble1Alt2";
exports.CUSTOM_LONG1_ALT1 = "customLong1Alt1";
exports.CUSTOM_LONG1_ALT2 = "customLong1Alt2";
exports.CUSTOM_STRING1_ALT1 = "customString1Alt1";
exports.CUSTOM_STRING1_ALT2 = "customString1Alt2";
exports.EMP_USERS_SYS_ID = "empUsersSysId";
exports.IS_DELETED = "is_deleted";
exports.ITEM_ID = "itemId";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.PROVINCE_ALT1 = "provinceAlt1";
exports.PROVINCE_ALT2 = "provinceAlt2";
exports.SCRIPT = "script";
exports.SCRIPT_ALT1 = "scriptAlt1";
exports.SCRIPT_ALT2 = "scriptAlt2";
exports.STATE_ALT1 = "stateAlt1";
exports.STATE_ALT2 = "stateAlt2";
exports.ADDRESS_TYPE_NAV = "addressTypeNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new ExternalLearnerAddressInfoEntityBuilder();
};

exports.getClient = function(configurations) {
	return new ExternalLearnerAddressInfoClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new ExternalLearnerAddressInfoClientAsync(configurations);
};

function ExternalLearnerAddressInfoClient (configurations) {

	var API_PATH = "/odata/v2/ExternalLearnerAddressInfo";

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

function ExternalLearnerAddressInfoClientAsync (configurations) {

	var API_PATH = "/odata/v2/ExternalLearnerAddressInfo";

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
