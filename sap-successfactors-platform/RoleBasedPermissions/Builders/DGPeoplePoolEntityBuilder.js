var method = DGPeoplePoolEntityBuilder.prototype;

function DGPeoplePoolEntityBuilder() {

}

method.peoplePoolId = function(peoplePoolId) {
	this.peoplePoolId = peoplePoolId;
	return this;
};

method.filters = function(filters) {
	this.filters = filters;
	return this;
};

method.build = function() {
	return {
		peoplePoolId: this.peoplePoolId,
		filters: this.filters
	};
};

module.exports = DGPeoplePoolEntityBuilder;
