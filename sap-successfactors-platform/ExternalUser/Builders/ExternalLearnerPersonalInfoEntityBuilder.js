var method = ExternalLearnerPersonalInfoEntityBuilder.prototype;

function ExternalLearnerPersonalInfoEntityBuilder() {

}

method.attachmentId = function(attachmentId) {
	this.attachmentId = attachmentId;
	return this;
};

method.birthName = function(birthName) {
	this.birthName = birthName;
	return this;
};

method.businessFirstName = function(businessFirstName) {
	this.businessFirstName = businessFirstName;
	return this;
};

method.businessLastName = function(businessLastName) {
	this.businessLastName = businessLastName;
	return this;
};

method.certificateEndDate = function(certificateEndDate) {
	this.certificateEndDate = certificateEndDate;
	return this;
};

method.certificateStartDate = function(certificateStartDate) {
	this.certificateStartDate = certificateStartDate;
	return this;
};

method.challengeStatus = function(challengeStatus) {
	this.challengeStatus = challengeStatus;
	return this;
};

method.countryOfBirth = function(countryOfBirth) {
	this.countryOfBirth = countryOfBirth;
	return this;
};

method.dateOfBirth = function(dateOfBirth) {
	this.dateOfBirth = dateOfBirth;
	return this;
};

method.dateOfDeath = function(dateOfDeath) {
	this.dateOfDeath = dateOfDeath;
	return this;
};

method.displayName = function(displayName) {
	this.displayName = displayName;
	return this;
};

method.displayNameAlt1 = function(displayNameAlt1) {
	this.displayNameAlt1 = displayNameAlt1;
	return this;
};

method.displayNameAlt2 = function(displayNameAlt2) {
	this.displayNameAlt2 = displayNameAlt2;
	return this;
};

method.firstName = function(firstName) {
	this.firstName = firstName;
	return this;
};

method.firstNameAlt1 = function(firstNameAlt1) {
	this.firstNameAlt1 = firstNameAlt1;
	return this;
};

method.firstNameAlt2 = function(firstNameAlt2) {
	this.firstNameAlt2 = firstNameAlt2;
	return this;
};

method.formalName = function(formalName) {
	this.formalName = formalName;
	return this;
};

method.formalNameAlt1 = function(formalNameAlt1) {
	this.formalNameAlt1 = formalNameAlt1;
	return this;
};

method.formalNameAlt2 = function(formalNameAlt2) {
	this.formalNameAlt2 = formalNameAlt2;
	return this;
};

method.gender = function(gender) {
	this.gender = gender;
	return this;
};

method.initials = function(initials) {
	this.initials = initials;
	return this;
};

method.isOverridden = function(isOverridden) {
	this.isOverridden = isOverridden;
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

method.lastName = function(lastName) {
	this.lastName = lastName;
	return this;
};

method.lastNameAlt1 = function(lastNameAlt1) {
	this.lastNameAlt1 = lastNameAlt1;
	return this;
};

method.lastNameAlt2 = function(lastNameAlt2) {
	this.lastNameAlt2 = lastNameAlt2;
	return this;
};

method.maritalStatus = function(maritalStatus) {
	this.maritalStatus = maritalStatus;
	return this;
};

method.middleName = function(middleName) {
	this.middleName = middleName;
	return this;
};

method.middleNameAlt1 = function(middleNameAlt1) {
	this.middleNameAlt1 = middleNameAlt1;
	return this;
};

method.middleNameAlt2 = function(middleNameAlt2) {
	this.middleNameAlt2 = middleNameAlt2;
	return this;
};

method.namePrefix = function(namePrefix) {
	this.namePrefix = namePrefix;
	return this;
};

method.nationality = function(nationality) {
	this.nationality = nationality;
	return this;
};

method.nativePreferredLang = function(nativePreferredLang) {
	this.nativePreferredLang = nativePreferredLang;
	return this;
};

method.preferredName = function(preferredName) {
	this.preferredName = preferredName;
	return this;
};

method.salutation = function(salutation) {
	this.salutation = salutation;
	return this;
};

method.script = function(script) {
	this.script = script;
	return this;
};

method.secondLastName = function(secondLastName) {
	this.secondLastName = secondLastName;
	return this;
};

method.secondNationality = function(secondNationality) {
	this.secondNationality = secondNationality;
	return this;
};

method.secondTitle = function(secondTitle) {
	this.secondTitle = secondTitle;
	return this;
};

method.since = function(since) {
	this.since = since;
	return this;
};

method.suffix = function(suffix) {
	this.suffix = suffix;
	return this;
};

method.thirdNationality = function(thirdNationality) {
	this.thirdNationality = thirdNationality;
	return this;
};

method.title = function(title) {
	this.title = title;
	return this;
};

method.build = function() {
	return {
		attachmentId: this.attachmentId,
		birthName: this.birthName,
		businessFirstName: this.businessFirstName,
		businessLastName: this.businessLastName,
		certificateEndDate: this.certificateEndDate,
		certificateStartDate: this.certificateStartDate,
		challengeStatus: this.challengeStatus,
		countryOfBirth: this.countryOfBirth,
		dateOfBirth: this.dateOfBirth,
		dateOfDeath: this.dateOfDeath,
		displayName: this.displayName,
		displayNameAlt1: this.displayNameAlt1,
		displayNameAlt2: this.displayNameAlt2,
		firstName: this.firstName,
		firstNameAlt1: this.firstNameAlt1,
		firstNameAlt2: this.firstNameAlt2,
		formalName: this.formalName,
		formalNameAlt1: this.formalNameAlt1,
		formalNameAlt2: this.formalNameAlt2,
		gender: this.gender,
		initials: this.initials,
		isOverridden: this.isOverridden,
		is_deleted: this.is_deleted,
		itemId: this.itemId,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastName: this.lastName,
		lastNameAlt1: this.lastNameAlt1,
		lastNameAlt2: this.lastNameAlt2,
		maritalStatus: this.maritalStatus,
		middleName: this.middleName,
		middleNameAlt1: this.middleNameAlt1,
		middleNameAlt2: this.middleNameAlt2,
		namePrefix: this.namePrefix,
		nationality: this.nationality,
		nativePreferredLang: this.nativePreferredLang,
		preferredName: this.preferredName,
		salutation: this.salutation,
		script: this.script,
		secondLastName: this.secondLastName,
		secondNationality: this.secondNationality,
		secondTitle: this.secondTitle,
		since: this.since,
		suffix: this.suffix,
		thirdNationality: this.thirdNationality,
		title: this.title
	};
};

module.exports = ExternalLearnerPersonalInfoEntityBuilder;
