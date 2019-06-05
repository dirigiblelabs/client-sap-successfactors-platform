var method = ExternalLearnerEntityBuilder.prototype;

function ExternalLearnerEntityBuilder() {

}

method.defaultLocale = function(defaultLocale) {
	this.defaultLocale = defaultLocale;
	return this;
};

method.is_deleted = function(is_deleted) {
	this.is_deleted = is_deleted;
	return this;
};

method.lastModifiedDateTime = function(lastModifiedDateTime) {
	this.lastModifiedDateTime = lastModifiedDateTime;
	return this;
};

method.loginMethod = function(loginMethod) {
	this.loginMethod = loginMethod;
	return this;
};

method.password = function(password) {
	this.password = password;
	return this;
};

method.personGUID = function(personGUID) {
	this.personGUID = personGUID;
	return this;
};

method.personId = function(personId) {
	this.personId = personId;
	return this;
};

method.personIdExternal = function(personIdExternal) {
	this.personIdExternal = personIdExternal;
	return this;
};

method.productName = function(productName) {
	this.productName = productName;
	return this;
};

method.sourceChannel = function(sourceChannel) {
	this.sourceChannel = sourceChannel;
	return this;
};

method.status = function(status) {
	this.status = status;
	return this;
};

method.timeZone = function(timeZone) {
	this.timeZone = timeZone;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.userName = function(userName) {
	this.userName = userName;
	return this;
};

method.emailInfo = function(emailInfo) {
	this.emailInfo = emailInfo;
	return this;
};

method.homeAddress = function(homeAddress) {
	this.homeAddress = homeAddress;
	return this;
};

method.personalInfo = function(personalInfo) {
	this.personalInfo = personalInfo;
	return this;
};

method.phoneInfo = function(phoneInfo) {
	this.phoneInfo = phoneInfo;
	return this;
};

method.sourceChannelNav = function(sourceChannelNav) {
	this.sourceChannelNav = sourceChannelNav;
	return this;
};

method.build = function() {
	return {
		defaultLocale: this.defaultLocale,
		is_deleted: this.is_deleted,
		lastModifiedDateTime: this.lastModifiedDateTime,
		loginMethod: this.loginMethod,
		password: this.password,
		personGUID: this.personGUID,
		personId: this.personId,
		personIdExternal: this.personIdExternal,
		productName: this.productName,
		sourceChannel: this.sourceChannel,
		status: this.status,
		timeZone: this.timeZone,
		userId: this.userId,
		userName: this.userName,
		emailInfo: this.emailInfo,
		homeAddress: this.homeAddress,
		personalInfo: this.personalInfo,
		phoneInfo: this.phoneInfo,
		sourceChannelNav: this.sourceChannelNav
	};
};

module.exports = ExternalLearnerEntityBuilder;
