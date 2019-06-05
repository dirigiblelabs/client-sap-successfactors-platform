var method = PicklistLabelEntityBuilder.prototype;

function PicklistLabelEntityBuilder() {

}

method.id = function(id) {
	this.id = id;
	return this;
};

method.label = function(label) {
	this.label = label;
	return this;
};

method.locale = function(locale) {
	this.locale = locale;
	return this;
};

method.optionId = function(optionId) {
	this.optionId = optionId;
	return this;
};

method.picklistOption = function(picklistOption) {
	this.picklistOption = picklistOption;
	return this;
};

method.build = function() {
	return {
		id: this.id,
		label: this.label,
		locale: this.locale,
		optionId: this.optionId,
		picklistOption: this.picklistOption
	};
};

module.exports = PicklistLabelEntityBuilder;
