var method = SuccessStoreContentEntityBuilder.prototype;

function SuccessStoreContentEntityBuilder() {

}

method.bestPractice = function(bestPractice) {
	this.bestPractice = bestPractice;
	return this;
};

method.comments = function(comments) {
	this.comments = comments;
	return this;
};

method.contentId = function(contentId) {
	this.contentId = contentId;
	return this;
};

method.contentType = function(contentType) {
	this.contentType = contentType;
	return this;
};

method.customField = function(customField) {
	this.customField = customField;
	return this;
};

method.defaultContent = function(defaultContent) {
	this.defaultContent = defaultContent;
	return this;
};

method.defaultContentName = function(defaultContentName) {
	this.defaultContentName = defaultContentName;
	return this;
};

method.domain = function(domain) {
	this.domain = domain;
	return this;
};

method.expiryOnDate = function(expiryOnDate) {
	this.expiryOnDate = expiryOnDate;
	return this;
};

method.publishOnDate = function(publishOnDate) {
	this.publishOnDate = publishOnDate;
	return this;
};

method.revisionNo = function(revisionNo) {
	this.revisionNo = revisionNo;
	return this;
};

method.status = function(status) {
	this.status = status;
	return this;
};

method.wizardable = function(wizardable) {
	this.wizardable = wizardable;
	return this;
};

method.contentData = function(contentData) {
	this.contentData = contentData;
	return this;
};

method.build = function() {
	return {
		bestPractice: this.bestPractice,
		comments: this.comments,
		contentId: this.contentId,
		contentType: this.contentType,
		customField: this.customField,
		defaultContent: this.defaultContent,
		defaultContentName: this.defaultContentName,
		domain: this.domain,
		expiryOnDate: this.expiryOnDate,
		publishOnDate: this.publishOnDate,
		revisionNo: this.revisionNo,
		status: this.status,
		wizardable: this.wizardable,
		contentData: this.contentData
	};
};

module.exports = SuccessStoreContentEntityBuilder;
