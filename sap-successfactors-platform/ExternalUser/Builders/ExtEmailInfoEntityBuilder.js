var method = ExtEmailInfoEntityBuilder.prototype;

function ExtEmailInfoEntityBuilder() {

}

method.emailAddress = function(emailAddress) {
	this.emailAddress = emailAddress;
	return this;
};

method.emailInfoId = function(emailInfoId) {
	this.emailInfoId = emailInfoId;
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
		emailInfoId: this.emailInfoId,
		emailType: this.emailType,
		isPrimary: this.isPrimary,
		lastModifiedDateTime: this.lastModifiedDateTime,
		emailTypeNav: this.emailTypeNav
	};
};

module.exports = ExtEmailInfoEntityBuilder;
