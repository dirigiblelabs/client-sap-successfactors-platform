var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var DGExpressionEntityBuilder = require("sap-successfactors-platform/RoleBasedPermissions/Builders/DGExpressionEntityBuilder");

exports.EXPRESSION_I_D = "expressionID";
exports.OPERATOR = "operator";
exports.VALUES = "values";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new DGExpressionEntityBuilder();
};

exports.getClient = function(configurations) {
	return new DGExpressionClient(configurations);
};

function DGExpressionClient (configurations) {

	var API_PATH = "/odata/v2/DGExpression";

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
