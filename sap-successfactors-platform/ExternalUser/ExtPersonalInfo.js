var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var ExtPersonalInfoEntityBuilder = require("sap-successfactors-platform/ExternalUser/Builders/ExtPersonalInfoEntityBuilder");

exports.FIRST_NAME = "firstName";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_NAME = "lastName";
exports.MIDDLE_NAME = "middleName";
exports.PERSONAL_INFO_ID = "personalInfoId";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new ExtPersonalInfoEntityBuilder();
};

exports.getClient = function(configurations) {
	return new ExtPersonalInfoClient(configurations);
};

function ExtPersonalInfoClient (configurations) {

	var API_PATH = "/odata/v2/ExtPersonalInfo";

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
