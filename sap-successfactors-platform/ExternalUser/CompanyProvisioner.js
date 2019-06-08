var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
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

exports.getClientAsync = function(configurations) {
	return new CompanyProvisionerClientAsync(configurations);
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

function CompanyProvisionerClientAsync (configurations) {

	var API_PATH = "/odata/v2/CompanyProvisioner";

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
