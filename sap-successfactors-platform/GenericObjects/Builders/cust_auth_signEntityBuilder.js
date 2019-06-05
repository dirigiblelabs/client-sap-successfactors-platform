var method = cust_auth_signEntityBuilder.prototype;

function cust_auth_signEntityBuilder() {

}

method.createdBy = function(createdBy) {
	this.createdBy = createdBy;
	return this;
};

method.createdDateTime = function(createdDateTime) {
	this.createdDateTime = createdDateTime;
	return this;
};

method.cust_asofdate = function(cust_asofdate) {
	this.cust_asofdate = cust_asofdate;
	return this;
};

method.cust_signature = function(cust_signature) {
	this.cust_signature = cust_signature;
	return this;
};

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
	return this;
};

method.externalName = function(externalName) {
	this.externalName = externalName;
	return this;
};

method.lastModifiedBy = function(lastModifiedBy) {
	this.lastModifiedBy = lastModifiedBy;
	return this;
};

method.lastModifiedDateTime = function(lastModifiedDateTime) {
	this.lastModifiedDateTime = lastModifiedDateTime;
	return this;
};

method.mdfSystemRecordStatus = function(mdfSystemRecordStatus) {
	this.mdfSystemRecordStatus = mdfSystemRecordStatus;
	return this;
};

method.mdfSystemRecordStatusNav = function(mdfSystemRecordStatusNav) {
	this.mdfSystemRecordStatusNav = mdfSystemRecordStatusNav;
	return this;
};

method.build = function() {
	return {
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		cust_asofdate: this.cust_asofdate,
		cust_signature: this.cust_signature,
		externalCode: this.externalCode,
		externalName: this.externalName,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemRecordStatusNav: this.mdfSystemRecordStatusNav
	};
};

module.exports = cust_auth_signEntityBuilder;
