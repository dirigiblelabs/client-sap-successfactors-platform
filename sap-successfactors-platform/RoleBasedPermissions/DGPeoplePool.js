var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var DGPeoplePoolEntityBuilder = require("sap-successfactors-platform/RoleBasedPermissions/Builders/DGPeoplePoolEntityBuilder");

exports.PEOPLE_POOL_ID = "peoplePoolId";
exports.FILTERS = "filters";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new DGPeoplePoolEntityBuilder();
};

exports.getClient = function(configurations) {
	return new DGPeoplePoolClient(configurations);
};

function DGPeoplePoolClient (configurations) {

	var API_PATH = "/odata/v2/DGPeoplePool";

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