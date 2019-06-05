var method = ExtAddressInfoEntityBuilder.prototype;

function ExtAddressInfoEntityBuilder() {

}

method.address1 = function(address1) {
	this.address1 = address1;
	return this;
};

method.address2 = function(address2) {
	this.address2 = address2;
	return this;
};

method.addressId = function(addressId) {
	this.addressId = addressId;
	return this;
};

method.addressType = function(addressType) {
	this.addressType = addressType;
	return this;
};

method.city = function(city) {
	this.city = city;
	return this;
};

method.country = function(country) {
	this.country = country;
	return this;
};

method.lastModifiedDateTime = function(lastModifiedDateTime) {
	this.lastModifiedDateTime = lastModifiedDateTime;
	return this;
};

method.province = function(province) {
	this.province = province;
	return this;
};

method.state = function(state) {
	this.state = state;
	return this;
};

method.zipCode = function(zipCode) {
	this.zipCode = zipCode;
	return this;
};

method.addressTypeNav = function(addressTypeNav) {
	this.addressTypeNav = addressTypeNav;
	return this;
};

method.build = function() {
	return {
		address1: this.address1,
		address2: this.address2,
		addressId: this.addressId,
		addressType: this.addressType,
		city: this.city,
		country: this.country,
		lastModifiedDateTime: this.lastModifiedDateTime,
		province: this.province,
		state: this.state,
		zipCode: this.zipCode,
		addressTypeNav: this.addressTypeNav
	};
};

module.exports = ExtAddressInfoEntityBuilder;
