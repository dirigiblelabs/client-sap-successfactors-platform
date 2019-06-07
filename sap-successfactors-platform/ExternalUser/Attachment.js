var Client = require("sap/Client");
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

function AttachmentClient (configurations) {

	var API_PATH = "/odata/v2/Attachment";

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
