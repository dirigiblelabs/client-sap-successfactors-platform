var method = PicklistOptionEntityBuilder.prototype;

function PicklistOptionEntityBuilder() {

}

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.id = function(id) {
	this.id = id;
	return this;
};

method.maxValue = function(maxValue) {
	this.maxValue = maxValue;
	return this;
};

method.minValue = function(minValue) {
	this.minValue = minValue;
	return this;
};

method.optionValue = function(optionValue) {
	this.optionValue = optionValue;
	return this;
};

method.sortOrder = function(sortOrder) {
	this.sortOrder = sortOrder;
	return this;
};

method.status = function(status) {
	this.status = status;
	return this;
};

method.childPicklistOptions = function(childPicklistOptions) {
	this.childPicklistOptions = childPicklistOptions;
	return this;
};

method.parentPicklistOption = function(parentPicklistOption) {
	this.parentPicklistOption = parentPicklistOption;
	return this;
};

method.picklist = function(picklist) {
	this.picklist = picklist;
	return this;
};

method.picklistLabels = function(picklistLabels) {
	this.picklistLabels = picklistLabels;
	return this;
};

method.build = function() {
	return {
		externalCode: this.externalCode,
		id: this.id,
		maxValue: this.maxValue,
		minValue: this.minValue,
		optionValue: this.optionValue,
		sortOrder: this.sortOrder,
		status: this.status,
		childPicklistOptions: this.childPicklistOptions,
		parentPicklistOption: this.parentPicklistOption,
		picklist: this.picklist,
		picklistLabels: this.picklistLabels
	};
};

module.exports = PicklistOptionEntityBuilder;
