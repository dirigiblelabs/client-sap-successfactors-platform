var method = ExternalLearnerEmailInfoEntityBuilder.prototype;

function ExternalLearnerEmailInfoEntityBuilder() {

}

method.emailAddress = function(emailAddress) {
	this.emailAddress = emailAddress;
	return this;
};

method.emailType = function(emailType) {
	this.emailType = emailType;
	return this;
};

method.isPrimary = function(isPrimary) {
	this.isPrimary = isPrimary;
	return this;
};

method.is_deleted = function(is_deleted) {
	this.is_deleted = is_deleted;
	return this;
};

method.itemId = function(itemId) {
	this.itemId = itemId;
	return this;
};

method.lastModifiedDateTime = function(lastModifiedDateTime) {
	this.lastModifiedDateTime = lastModifiedDateTime;
	return this;
};

method.emailTypeNav = function(emailTypeNav) {
	this.emailTypeNav = emailTypeNav;
	return this;
};

method.build = function() {
	return {
		emailAddress: this.emailAddress,
		emailType: this.emailType,
		isPrimary: this.isPrimary,
		is_deleted: this.is_deleted,
		itemId: this.itemId,
		lastModifiedDateTime: this.lastModifiedDateTime,
		emailTypeNav: this.emailTypeNav
	};
};

module.exports = ExternalLearnerEmailInfoEntityBuilder;
