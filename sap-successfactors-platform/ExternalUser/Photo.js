var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
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

exports.getClientAsync = function(configurations) {
	return new PhotoClientAsync(configurations);
};

function PhotoClient (configurations) {

	var API_PATH = "/odata/v2/Photo";

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

function PhotoClientAsync (configurations) {

	var API_PATH = "/odata/v2/Photo";

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
