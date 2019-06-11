var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var AttachmentEntityBuilder = require("sap-successfactors-platform/ExternalUser/Builders/AttachmentEntityBuilder");

exports.ATTACHMENT_ID = "attachmentId";
exports.CREATED_DATE = "createdDate";
exports.DELETABLE = "deletable";
exports.DEPRECABLE = "deprecable";
exports.DESCRIPTION = "description";
exports.DOCUMENT_CATEGORY = "documentCategory";
exports.DOCUMENT_ENTITY_ID = "documentEntityId";
exports.DOCUMENT_ENTITY_TYPE = "documentEntityType";
exports.DOCUMENT_TYPE = "documentType";
exports.EXTERNAL_ID = "externalId";
exports.FILE_CONTENT = "fileContent";
exports.FILE_EXTENSION = "fileExtension";
exports.FILE_NAME = "fileName";
exports.FILE_SIZE = "fileSize";
exports.IMAGE_CONVERT_IN_PROGRESS = "imageConvertInProgress";
exports.LAST_ACCESSED = "lastAccessed";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.MIME_TYPE = "mimeType";
exports.MODULE = "module";
exports.MODULE_CATEGORY = "moduleCategory";
exports.OWNER_ID = "ownerId";
exports.OWNER_ID_TYPE = "ownerIdType";
exports.PII_FLAG = "piiFlag";
exports.SEARCHABLE = "searchable";
exports.SOFT_DELETE = "softDelete";
exports.USER_ID = "userId";
exports.VIEWABLE = "viewable";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new AttachmentEntityBuilder();
};

exports.getClient = function(configurations) {
	return new AttachmentClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new AttachmentClientAsync(configurations);
};

function AttachmentClient (configurations) {

	var API_PATH = "/odata/v2/Attachment";

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

function AttachmentClientAsync (configurations) {

	var API_PATH = "/odata/v2/Attachment";

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
