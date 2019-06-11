var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var ExternalLearnerPersonalInfoEntityBuilder = require("sap-successfactors-platform/ExternalUser/Builders/ExternalLearnerPersonalInfoEntityBuilder");

exports.ATTACHMENT_ID = "attachmentId";
exports.BIRTH_NAME = "birthName";
exports.BUSINESS_FIRST_NAME = "businessFirstName";
exports.BUSINESS_LAST_NAME = "businessLastName";
exports.CERTIFICATE_END_DATE = "certificateEndDate";
exports.CERTIFICATE_START_DATE = "certificateStartDate";
exports.CHALLENGE_STATUS = "challengeStatus";
exports.COUNTRY_OF_BIRTH = "countryOfBirth";
exports.DATE_OF_BIRTH = "dateOfBirth";
exports.DATE_OF_DEATH = "dateOfDeath";
exports.DISPLAY_NAME = "displayName";
exports.DISPLAY_NAME_ALT1 = "displayNameAlt1";
exports.DISPLAY_NAME_ALT2 = "displayNameAlt2";
exports.FIRST_NAME = "firstName";
exports.FIRST_NAME_ALT1 = "firstNameAlt1";
exports.FIRST_NAME_ALT2 = "firstNameAlt2";
exports.FORMAL_NAME = "formalName";
exports.FORMAL_NAME_ALT1 = "formalNameAlt1";
exports.FORMAL_NAME_ALT2 = "formalNameAlt2";
exports.GENDER = "gender";
exports.INITIALS = "initials";
exports.IS_OVERRIDDEN = "isOverridden";
exports.IS_DELETED = "is_deleted";
exports.ITEM_ID = "itemId";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_NAME = "lastName";
exports.LAST_NAME_ALT1 = "lastNameAlt1";
exports.LAST_NAME_ALT2 = "lastNameAlt2";
exports.MARITAL_STATUS = "maritalStatus";
exports.MIDDLE_NAME = "middleName";
exports.MIDDLE_NAME_ALT1 = "middleNameAlt1";
exports.MIDDLE_NAME_ALT2 = "middleNameAlt2";
exports.NAME_PREFIX = "namePrefix";
exports.NATIONALITY = "nationality";
exports.NATIVE_PREFERRED_LANG = "nativePreferredLang";
exports.PREFERRED_NAME = "preferredName";
exports.SALUTATION = "salutation";
exports.SCRIPT = "script";
exports.SECOND_LAST_NAME = "secondLastName";
exports.SECOND_NATIONALITY = "secondNationality";
exports.SECOND_TITLE = "secondTitle";
exports.SINCE = "since";
exports.SUFFIX = "suffix";
exports.THIRD_NATIONALITY = "thirdNationality";
exports.TITLE = "title";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new ExternalLearnerPersonalInfoEntityBuilder();
};

exports.getClient = function(configurations) {
	return new ExternalLearnerPersonalInfoClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new ExternalLearnerPersonalInfoClientAsync(configurations);
};

function ExternalLearnerPersonalInfoClient (configurations) {

	var API_PATH = "/odata/v2/ExternalLearnerPersonalInfo";

	this.client = new Client(configurations, API_PATH);

	this.list = function(queryParameters, options) {
		return this.client.list(queryParameters, options);
	};

	this.get = function(id, queryParameters, options) {
		return this.client.get(getId(id), queryParameters, options);
	};

	this.create = function(entity, queryParameters, options) {
		return this.client.create(entity, queryParameters, options);
	};

	this.update = function(id, entity, queryParameters, options) {
		return this.client.update(getId(id), entity, queryParameters, options);
	};

	this.delete = function(id, queryParameters, options) {
		return this.client.delete(getId(id), queryParameters, options);
	};

	this.count = function(queryParameters, options) {
		return this.client.get("/$count", queryParameters, options);
	};
}

function ExternalLearnerPersonalInfoClientAsync (configurations) {

	var API_PATH = "/odata/v2/ExternalLearnerPersonalInfo";

	this.client = new ClientAsync(configurations, API_PATH);

	this.listAsync = function(callback, queryParameters, options) {
		return this.client.listAsync(callback, queryParameters, options);
	};

	this.getAsync = function(callback, id, queryParameters, options) {
		return this.client.getAsync(callback, getId(id), queryParameters, options);
	};

	this.createAsync = function(callback, entity, queryParameters, options) {
		return this.client.createAsync(callback, entity, queryParameters, options);
	};

	this.updateAsync = function(callback, id, entity, queryParameters, options) {
		return this.client.update(callback, getId(id), entity, queryParameters, options);
	};

	this.deleteAsync = function(callback, id, queryParameters, options) {
		return this.client.deleteAsync(callback, getId(id), queryParameters, options);
	};

	this.countAsync = function(callback, queryParameters, options) {
		return this.client.getAsync(callback, "/$count", queryParameters, options);
	};

	this.execute = function() {
		return this.client.execute();
	};
}

function getId(id) {
	return "('" + id + "')";
}
