var method = TodoEntryV2EntityBuilder.prototype;

function TodoEntryV2EntityBuilder() {

}

method.categoryId = function(categoryId) {
	this.categoryId = categoryId;
	return this;
};

method.categoryLabel = function(categoryLabel) {
	this.categoryLabel = categoryLabel;
	return this;
};

method.completedDateTime = function(completedDateTime) {
	this.completedDateTime = completedDateTime;
	return this;
};

method.createdDate = function(createdDate) {
	this.createdDate = createdDate;
	return this;
};

method.dueDate = function(dueDate) {
	this.dueDate = dueDate;
	return this;
};

method.formDataId = function(formDataId) {
	this.formDataId = formDataId;
	return this;
};

method.lastModifiedDateTime = function(lastModifiedDateTime) {
	this.lastModifiedDateTime = lastModifiedDateTime;
	return this;
};

method.linkUrl = function(linkUrl) {
	this.linkUrl = linkUrl;
	return this;
};

method.status = function(status) {
	this.status = status;
	return this;
};

method.subjectId = function(subjectId) {
	this.subjectId = subjectId;
	return this;
};

method.todoEntryId = function(todoEntryId) {
	this.todoEntryId = todoEntryId;
	return this;
};

method.todoEntryName = function(todoEntryName) {
	this.todoEntryName = todoEntryName;
	return this;
};

method.build = function() {
	return {
		categoryId: this.categoryId,
		categoryLabel: this.categoryLabel,
		completedDateTime: this.completedDateTime,
		createdDate: this.createdDate,
		dueDate: this.dueDate,
		formDataId: this.formDataId,
		lastModifiedDateTime: this.lastModifiedDateTime,
		linkUrl: this.linkUrl,
		status: this.status,
		subjectId: this.subjectId,
		todoEntryId: this.todoEntryId,
		todoEntryName: this.todoEntryName
	};
};

module.exports = TodoEntryV2EntityBuilder;
