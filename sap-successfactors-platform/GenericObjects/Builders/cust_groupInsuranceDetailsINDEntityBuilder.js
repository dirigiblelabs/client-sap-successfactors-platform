var method = cust_groupInsuranceDetailsINDEntityBuilder.prototype;

function cust_groupInsuranceDetailsINDEntityBuilder() {

}

method.BenefitEmployeeClaim_id = function(BenefitEmployeeClaim_id) {
	this.BenefitEmployeeClaim_id = BenefitEmployeeClaim_id;
	return this;
};

method.createdBy = function(createdBy) {
	this.createdBy = createdBy;
	return this;
};

method.createdDateTime = function(createdDateTime) {
	this.createdDateTime = createdDateTime;
	return this;
};

method.cust_endDate = function(cust_endDate) {
	this.cust_endDate = cust_endDate;
	return this;
};

method.cust_sicknessDetails = function(cust_sicknessDetails) {
	this.cust_sicknessDetails = cust_sicknessDetails;
	return this;
};

method.cust_startDate = function(cust_startDate) {
	this.cust_startDate = cust_startDate;
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
		BenefitEmployeeClaim_id: this.BenefitEmployeeClaim_id,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		cust_endDate: this.cust_endDate,
		cust_sicknessDetails: this.cust_sicknessDetails,
		cust_startDate: this.cust_startDate,
		externalCode: this.externalCode,
		externalName: this.externalName,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemRecordStatusNav: this.mdfSystemRecordStatusNav
	};
};

module.exports = cust_groupInsuranceDetailsINDEntityBuilder;
