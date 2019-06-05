var method = ExternalUserEntityBuilder.prototype;

function ExternalUserEntityBuilder() {

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

method.extAddressInfo = function(extAddressInfo) {
	this.extAddressInfo = extAddressInfo;
	return this;
};

method.extEmailInfo = function(extEmailInfo) {
	this.extEmailInfo = extEmailInfo;
	return this;
};

method.extPersonalInfo = function(extPersonalInfo) {
	this.extPersonalInfo = extPersonalInfo;
	return this;
};

method.extPhoneInfo = function(extPhoneInfo) {
	this.extPhoneInfo = extPhoneInfo;
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
		status: this.status,
		timeZone: this.timeZone,
		userId: this.userId,
		userName: this.userName,
		extAddressInfo: this.extAddressInfo,
		extEmailInfo: this.extEmailInfo,
		extPersonalInfo: this.extPersonalInfo,
		extPhoneInfo: this.extPhoneInfo
	};
};

module.exports = ExternalUserEntityBuilder;
