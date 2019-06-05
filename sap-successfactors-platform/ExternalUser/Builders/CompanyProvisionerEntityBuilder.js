var method = CompanyProvisionerEntityBuilder.prototype;

function CompanyProvisionerEntityBuilder() {

}

method.createdAdminAccountNumber = function(createdAdminAccountNumber) {
	this.createdAdminAccountNumber = createdAdminAccountNumber;
	return this;
};

method.email = function(email) {
	this.email = email;
	return this;
};

method.id = function(id) {
	this.id = id;
	return this;
};

method.name = function(name) {
	this.name = name;
	return this;
};

method.status = function(status) {
	this.status = status;
	return this;
};

method.build = function() {
	return {
		createdAdminAccountNumber: this.createdAdminAccountNumber,
		email: this.email,
		id: this.id,
		name: this.name,
		status: this.status
	};
};

module.exports = CompanyProvisionerEntityBuilder;
