var method = ExtPersonalInfoEntityBuilder.prototype;

function ExtPersonalInfoEntityBuilder() {

}

method.firstName = function(firstName) {
	this.firstName = firstName;
	return this;
};

method.lastModifiedDateTime = function(lastModifiedDateTime) {
	this.lastModifiedDateTime = lastModifiedDateTime;
	return this;
};

method.lastName = function(lastName) {
	this.lastName = lastName;
	return this;
};

method.middleName = function(middleName) {
	this.middleName = middleName;
	return this;
};

method.personalInfoId = function(personalInfoId) {
	this.personalInfoId = personalInfoId;
	return this;
};

method.build = function() {
	return {
		firstName: this.firstName,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastName: this.lastName,
		middleName: this.middleName,
		personalInfoId: this.personalInfoId
	};
};

module.exports = ExtPersonalInfoEntityBuilder;
