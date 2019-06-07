var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var CompanyProvisionerEntityBuilder = require("sap-successfactors-platform/ExternalUser/Builders/CompanyProvisionerEntityBuilder");

exports.CREATED_ADMIN_ACCOUNT_NUMBER = "createdAdminAccountNumber";
exports.EMAIL = "email";
exports.ID = "id";
exports.NAME = "name";
exports.STATUS = "status";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new CompanyProvisionerEntityBuilder();
};

exports.getClient = function(configurations) {
	return new CompanyProvisionerClient(configurations);
};

function CompanyProvisionerClient (configurations) {

	var API_PATH = "/odata/v2/CompanyProvisioner";

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
