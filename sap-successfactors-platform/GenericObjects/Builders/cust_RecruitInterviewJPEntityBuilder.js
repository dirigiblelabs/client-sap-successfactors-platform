var method = cust_RecruitInterviewJPEntityBuilder.prototype;

function cust_RecruitInterviewJPEntityBuilder() {

}

method.createdBy = function(createdBy) {
	this.createdBy = createdBy;
	return this;
};

method.createdDateTime = function(createdDateTime) {
	this.createdDateTime = createdDateTime;
	return this;
};

method.cust_RCInt_1Commu = function(cust_RCInt_1Commu) {
	this.cust_RCInt_1Commu = cust_RCInt_1Commu;
	return this;
};

method.cust_RCInt_1CommuGR = function(cust_RCInt_1CommuGR) {
	this.cust_RCInt_1CommuGR = cust_RCInt_1CommuGR;
	return this;
};

method.cust_RCInt_2Mind = function(cust_RCInt_2Mind) {
	this.cust_RCInt_2Mind = cust_RCInt_2Mind;
	return this;
};

method.cust_RCInt_2MindGR = function(cust_RCInt_2MindGR) {
	this.cust_RCInt_2MindGR = cust_RCInt_2MindGR;
	return this;
};

method.cust_RCInt_3Lead = function(cust_RCInt_3Lead) {
	this.cust_RCInt_3Lead = cust_RCInt_3Lead;
	return this;
};

method.cust_RCInt_3LeadGR = function(cust_RCInt_3LeadGR) {
	this.cust_RCInt_3LeadGR = cust_RCInt_3LeadGR;
	return this;
};

method.cust_RCInt_4Credit = function(cust_RCInt_4Credit) {
	this.cust_RCInt_4Credit = cust_RCInt_4Credit;
	return this;
};

method.cust_RCInt_4CreditGR = function(cust_RCInt_4CreditGR) {
	this.cust_RCInt_4CreditGR = cust_RCInt_4CreditGR;
	return this;
};

method.cust_RCInt_FinalGR = function(cust_RCInt_FinalGR) {
	this.cust_RCInt_FinalGR = cust_RCInt_FinalGR;
	return this;
};

method.cust_RCInt_FinalTXT = function(cust_RCInt_FinalTXT) {
	this.cust_RCInt_FinalTXT = cust_RCInt_FinalTXT;
	return this;
};

method.cust_RCinterviewer = function(cust_RCinterviewer) {
	this.cust_RCinterviewer = cust_RCinterviewer;
	return this;
};

method.effectiveStartDate = function(effectiveStartDate) {
	this.effectiveStartDate = effectiveStartDate;
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

method.mdfSystemEffectiveEndDate = function(mdfSystemEffectiveEndDate) {
	this.mdfSystemEffectiveEndDate = mdfSystemEffectiveEndDate;
	return this;
};

method.mdfSystemRecordStatus = function(mdfSystemRecordStatus) {
	this.mdfSystemRecordStatus = mdfSystemRecordStatus;
	return this;
};

method.mdfSystemTransactionSequence = function(mdfSystemTransactionSequence) {
	this.mdfSystemTransactionSequence = mdfSystemTransactionSequence;
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
		cust_RCInt_1Commu: this.cust_RCInt_1Commu,
		cust_RCInt_1CommuGR: this.cust_RCInt_1CommuGR,
		cust_RCInt_2Mind: this.cust_RCInt_2Mind,
		cust_RCInt_2MindGR: this.cust_RCInt_2MindGR,
		cust_RCInt_3Lead: this.cust_RCInt_3Lead,
		cust_RCInt_3LeadGR: this.cust_RCInt_3LeadGR,
		cust_RCInt_4Credit: this.cust_RCInt_4Credit,
		cust_RCInt_4CreditGR: this.cust_RCInt_4CreditGR,
		cust_RCInt_FinalGR: this.cust_RCInt_FinalGR,
		cust_RCInt_FinalTXT: this.cust_RCInt_FinalTXT,
		cust_RCinterviewer: this.cust_RCinterviewer,
		effectiveStartDate: this.effectiveStartDate,
		externalCode: this.externalCode,
		externalName: this.externalName,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemRecordStatusNav: this.mdfSystemRecordStatusNav
	};
};

module.exports = cust_RecruitInterviewJPEntityBuilder;
