var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var MDFEnumValueEntityBuilder = require("sap-successfactors-platform/GenericObjects/Builders/MDFEnumValueEntityBuilder");

exports.DE__D_E = "de_DE";
exports.EN__G_B = "en_GB";
exports.EN__U_S = "en_US";
exports.ES__E_S = "es_ES";
exports.FR__F_R = "fr_FR";
exports.JA__J_P = "ja_JP";
exports.KEY = "key";
exports.KO__K_R = "ko_KR";
exports.NL__N_L = "nl_NL";
exports.PT__B_R = "pt_BR";
exports.PT__P_T = "pt_PT";
exports.RU__R_U = "ru_RU";
exports.VALUE = "value";
exports.ZH__C_N = "zh_CN";
exports.ZH__T_W = "zh_TW";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new MDFEnumValueEntityBuilder();
};

exports.getClient = function(configurations) {
	return new MDFEnumValueClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new MDFEnumValueClientAsync(configurations);
};

function MDFEnumValueClient (configurations) {

	var API_PATH = "/odata/v2/MDFEnumValue";

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

	this.count = function(queryParameters, options) {
		return this.client.get("/$count", queryParameters, options);
	};
}

function MDFEnumValueClientAsync (configurations) {

	var API_PATH = "/odata/v2/MDFEnumValue";

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

	this.countAsync = function(callback, queryParameters, options) {
		return this.client.getAsync(callback, "/$count", queryParameters, options);
	};

	this.execute = function() {
		return this.client.execute();
	};
}

function getId(id) {
	return "('" + id + "')";
}
