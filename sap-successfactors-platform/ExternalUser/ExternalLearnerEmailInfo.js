var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var ExternalLearnerEmailInfoEntityBuilder = require("sap-successfactors-platform/ExternalUser/Builders/ExternalLearnerEmailInfoEntityBuilder");

exports.EMAIL_ADDRESS = "emailAddress";
exports.EMAIL_TYPE = "emailType";
exports.IS_PRIMARY = "isPrimary";
exports.IS_DELETED = "is_deleted";
exports.ITEM_ID = "itemId";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.EMAIL_TYPE_NAV = "emailTypeNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new ExternalLearnerEmailInfoEntityBuilder();
};

exports.getClient = function(configurations) {
	return new ExternalLearnerEmailInfoClient(configurations);
};

function ExternalLearnerEmailInfoClient (configurations) {

	var API_PATH = "/odata/v2/ExternalLearnerEmailInfo";

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
