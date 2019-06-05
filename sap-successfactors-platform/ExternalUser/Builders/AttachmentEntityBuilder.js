var method = AttachmentEntityBuilder.prototype;

function AttachmentEntityBuilder() {

}

method.attachmentId = function(attachmentId) {
	this.attachmentId = attachmentId;
	return this;
};

method.createdDate = function(createdDate) {
	this.createdDate = createdDate;
	return this;
};

method.deletable = function(deletable) {
	this.deletable = deletable;
	return this;
};

method.deprecable = function(deprecable) {
	this.deprecable = deprecable;
	return this;
};

method.description = function(description) {
	this.description = description;
	return this;
};

method.documentCategory = function(documentCategory) {
	this.documentCategory = documentCategory;
	return this;
};

method.documentEntityId = function(documentEntityId) {
	this.documentEntityId = documentEntityId;
	return this;
};

method.documentEntityType = function(documentEntityType) {
	this.documentEntityType = documentEntityType;
	return this;
};

method.documentType = function(documentType) {
	this.documentType = documentType;
	return this;
};

method.externalId = function(externalId) {
	this.externalId = externalId;
	return this;
};

method.fileContent = function(fileContent) {
	this.fileContent = fileContent;
	return this;
};

method.fileExtension = function(fileExtension) {
	this.fileExtension = fileExtension;
	return this;
};

method.fileName = function(fileName) {
	this.fileName = fileName;
	return this;
};

method.fileSize = function(fileSize) {
	this.fileSize = fileSize;
	return this;
};

method.imageConvertInProgress = function(imageConvertInProgress) {
	this.imageConvertInProgress = imageConvertInProgress;
	return this;
};

method.lastAccessed = function(lastAccessed) {
	this.lastAccessed = lastAccessed;
	return this;
};

method.lastModifiedDateTime = function(lastModifiedDateTime) {
	this.lastModifiedDateTime = lastModifiedDateTime;
	return this;
};

method.mimeType = function(mimeType) {
	this.mimeType = mimeType;
	return this;
};

method.module = function(module) {
	this.module = module;
	return this;
};

method.moduleCategory = function(moduleCategory) {
	this.moduleCategory = moduleCategory;
	return this;
};

method.ownerId = function(ownerId) {
	this.ownerId = ownerId;
	return this;
};

method.ownerIdType = function(ownerIdType) {
	this.ownerIdType = ownerIdType;
	return this;
};

method.piiFlag = function(piiFlag) {
	this.piiFlag = piiFlag;
	return this;
};

method.searchable = function(searchable) {
	this.searchable = searchable;
	return this;
};

method.softDelete = function(softDelete) {
	this.softDelete = softDelete;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.viewable = function(viewable) {
	this.viewable = viewable;
	return this;
};

method.build = function() {
	return {
		attachmentId: this.attachmentId,
		createdDate: this.createdDate,
		deletable: this.deletable,
		deprecable: this.deprecable,
		description: this.description,
		documentCategory: this.documentCategory,
		documentEntityId: this.documentEntityId,
		documentEntityType: this.documentEntityType,
		documentType: this.documentType,
		externalId: this.externalId,
		fileContent: this.fileContent,
		fileExtension: this.fileExtension,
		fileName: this.fileName,
		fileSize: this.fileSize,
		imageConvertInProgress: this.imageConvertInProgress,
		lastAccessed: this.lastAccessed,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mimeType: this.mimeType,
		module: this.module,
		moduleCategory: this.moduleCategory,
		ownerId: this.ownerId,
		ownerIdType: this.ownerIdType,
		piiFlag: this.piiFlag,
		searchable: this.searchable,
		softDelete: this.softDelete,
		userId: this.userId,
		viewable: this.viewable
	};
};

module.exports = AttachmentEntityBuilder;
