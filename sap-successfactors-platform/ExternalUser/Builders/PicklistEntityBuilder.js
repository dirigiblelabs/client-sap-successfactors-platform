var method = PicklistEntityBuilder.prototype;

function PicklistEntityBuilder() {

}

method.picklistId = function(picklistId) {
	this.picklistId = picklistId;
	return this;
};

method.picklistOptions = function(picklistOptions) {
	this.picklistOptions = picklistOptions;
	return this;
};

method.build = function() {
	return {
		picklistId: this.picklistId,
		picklistOptions: this.picklistOptions
	};
};

module.exports = PicklistEntityBuilder;
