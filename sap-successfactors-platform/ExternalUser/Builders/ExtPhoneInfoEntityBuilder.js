var method = ExtPhoneInfoEntityBuilder.prototype;

function ExtPhoneInfoEntityBuilder() {

}

method.areaCode = function(areaCode) {
	this.areaCode = areaCode;
	return this;
};

method.countryCode = function(countryCode) {
	this.countryCode = countryCode;
	return this;
};

method.extension = function(extension) {
	this.extension = extension;
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

method.phoneInfoId = function(phoneInfoId) {
	this.phoneInfoId = phoneInfoId;
	return this;
};

method.phoneNumber = function(phoneNumber) {
	this.phoneNumber = phoneNumber;
	return this;
};

method.phoneType = function(phoneType) {
	this.phoneType = phoneType;
	return this;
};

method.phoneTypeNav = function(phoneTypeNav) {
	this.phoneTypeNav = phoneTypeNav;
	return this;
};

method.build = function() {
	return {
		areaCode: this.areaCode,
		countryCode: this.countryCode,
		extension: this.extension,
		isPrimary: this.isPrimary,
		lastModifiedDateTime: this.lastModifiedDateTime,
		phoneInfoId: this.phoneInfoId,
		phoneNumber: this.phoneNumber,
		phoneType: this.phoneType,
		phoneTypeNav: this.phoneTypeNav
	};
};

module.exports = ExtPhoneInfoEntityBuilder;
