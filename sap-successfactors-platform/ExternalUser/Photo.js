var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var PhotoEntityBuilder = require("sap-successfactors-platform/ExternalUser/Builders/PhotoEntityBuilder");

exports.HEIGHT = "height";
exports.LAST_MODIFIED = "lastModified";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_WITH_T_Z = "lastModifiedWithTZ";
exports.MIME_TYPE = "mimeType";
exports.PHOTO = "photo";
exports.PHOTO_ID = "photoId";
exports.PHOTO_NAME = "photoName";
exports.PHOTO_TYPE = "photoType";
exports.USER_ID = "userId";
exports.WIDTH = "width";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PhotoEntityBuilder();
};

exports.getClient = function(configurations) {
	return new PhotoClient(configurations);
};

function PhotoClient (configurations) {

	var API_PATH = "/odata/v2/Photo";

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
