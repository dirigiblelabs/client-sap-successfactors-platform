var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var CompetencyRatingEntityBuilder = require("sap-successfactors-platform/ExternalUser/Builders/CompetencyRatingEntityBuilder");

exports.FORM_CONTENT_ID = "formContentId";
exports.FORM_DATA_ID = "formDataId";
exports.GUID = "guid";
exports.ID = "id";
exports.LAST_MODIFIED = "lastModified";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_WITH_T_Z = "lastModifiedWithTZ";
exports.MODULE = "module";
exports.RATER = "rater";
exports.RATER_CATEGORY = "raterCategory";
exports.RATING = "rating";
exports.SCALE_MAX = "scaleMax";
exports.SCALE_MIN = "scaleMin";
exports.SOURCE = "source";
exports.STATUS = "status";
exports.TYPE = "type";
exports.USER_ID = "userId";
exports.VALID_FROM = "validFrom";
exports.VALID_TO = "validTo";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new CompetencyRatingEntityBuilder();
};

exports.getClient = function(configurations) {
	return new CompetencyRatingClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new CompetencyRatingClientAsync(configurations);
};

function CompetencyRatingClient (configurations) {

	var API_PATH = "/odata/v2/CompetencyRating";

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

function CompetencyRatingClientAsync (configurations) {

	var API_PATH = "/odata/v2/CompetencyRating";

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
