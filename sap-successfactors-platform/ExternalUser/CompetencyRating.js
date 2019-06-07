var Client = require("sap/Client");
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

function CompetencyRatingClient (configurations) {

	var API_PATH = "/odata/v2/CompetencyRating";

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
