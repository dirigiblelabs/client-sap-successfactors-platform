var method = CompetencyRatingEntityBuilder.prototype;

function CompetencyRatingEntityBuilder() {

}

method.formContentId = function(formContentId) {
	this.formContentId = formContentId;
	return this;
};

method.formDataId = function(formDataId) {
	this.formDataId = formDataId;
	return this;
};

method.guid = function(guid) {
	this.guid = guid;
	return this;
};

method.id = function(id) {
	this.id = id;
	return this;
};

method.lastModified = function(lastModified) {
	this.lastModified = lastModified;
	return this;
};

method.lastModifiedDateTime = function(lastModifiedDateTime) {
	this.lastModifiedDateTime = lastModifiedDateTime;
	return this;
};

method.lastModifiedWithTZ = function(lastModifiedWithTZ) {
	this.lastModifiedWithTZ = lastModifiedWithTZ;
	return this;
};

method.module = function(module) {
	this.module = module;
	return this;
};

method.rater = function(rater) {
	this.rater = rater;
	return this;
};

method.raterCategory = function(raterCategory) {
	this.raterCategory = raterCategory;
	return this;
};

method.rating = function(rating) {
	this.rating = rating;
	return this;
};

method.scaleMax = function(scaleMax) {
	this.scaleMax = scaleMax;
	return this;
};

method.scaleMin = function(scaleMin) {
	this.scaleMin = scaleMin;
	return this;
};

method.source = function(source) {
	this.source = source;
	return this;
};

method.status = function(status) {
	this.status = status;
	return this;
};

method.type = function(type) {
	this.type = type;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.validFrom = function(validFrom) {
	this.validFrom = validFrom;
	return this;
};

method.validTo = function(validTo) {
	this.validTo = validTo;
	return this;
};

method.build = function() {
	return {
		formContentId: this.formContentId,
		formDataId: this.formDataId,
		guid: this.guid,
		id: this.id,
		lastModified: this.lastModified,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedWithTZ: this.lastModifiedWithTZ,
		module: this.module,
		rater: this.rater,
		raterCategory: this.raterCategory,
		rating: this.rating,
		scaleMax: this.scaleMax,
		scaleMin: this.scaleMin,
		source: this.source,
		status: this.status,
		type: this.type,
		userId: this.userId,
		validFrom: this.validFrom,
		validTo: this.validTo
	};
};

module.exports = CompetencyRatingEntityBuilder;
