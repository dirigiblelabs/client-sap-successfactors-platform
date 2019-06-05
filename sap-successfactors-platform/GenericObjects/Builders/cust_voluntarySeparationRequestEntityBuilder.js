var method = cust_voluntarySeparationRequestEntityBuilder.prototype;

function cust_voluntarySeparationRequestEntityBuilder() {

}

method.createdBy = function(createdBy) {
	this.createdBy = createdBy;
	return this;
};

method.createdDateTime = function(createdDateTime) {
	this.createdDateTime = createdDateTime;
	return this;
};

method.cust_eecomments = function(cust_eecomments) {
	this.cust_eecomments = cust_eecomments;
	return this;
};

method.cust_hrcomments = function(cust_hrcomments) {
	this.cust_hrcomments = cust_hrcomments;
	return this;
};

method.cust_lastday = function(cust_lastday) {
	this.cust_lastday = cust_lastday;
	return this;
};

method.cust_lastdayppolicy = function(cust_lastdayppolicy) {
	this.cust_lastdayppolicy = cust_lastdayppolicy;
	return this;
};

method.cust_mgrcomments = function(cust_mgrcomments) {
	this.cust_mgrcomments = cust_mgrcomments;
	return this;
};

method.cust_noticePeriodMonths = function(cust_noticePeriodMonths) {
	this.cust_noticePeriodMonths = cust_noticePeriodMonths;
	return this;
};

method.cust_noticerecovery = function(cust_noticerecovery) {
	this.cust_noticerecovery = cust_noticerecovery;
	return this;
};

method.cust_reason = function(cust_reason) {
	this.cust_reason = cust_reason;
	return this;
};

method.cust_requestAsOfDate = function(cust_requestAsOfDate) {
	this.cust_requestAsOfDate = cust_requestAsOfDate;
	return this;
};

method.cust_shortfallinnperiod = function(cust_shortfallinnperiod) {
	this.cust_shortfallinnperiod = cust_shortfallinnperiod;
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

method.mdfSystemRecordStatusNav = function(mdfSystemRecordStatusNav) {
	this.mdfSystemRecordStatusNav = mdfSystemRecordStatusNav;
	return this;
};

method.build = function() {
	return {
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		cust_eecomments: this.cust_eecomments,
		cust_hrcomments: this.cust_hrcomments,
		cust_lastday: this.cust_lastday,
		cust_lastdayppolicy: this.cust_lastdayppolicy,
		cust_mgrcomments: this.cust_mgrcomments,
		cust_noticePeriodMonths: this.cust_noticePeriodMonths,
		cust_noticerecovery: this.cust_noticerecovery,
		cust_reason: this.cust_reason,
		cust_requestAsOfDate: this.cust_requestAsOfDate,
		cust_shortfallinnperiod: this.cust_shortfallinnperiod,
		effectiveStartDate: this.effectiveStartDate,
		externalCode: this.externalCode,
		externalName: this.externalName,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemRecordStatusNav: this.mdfSystemRecordStatusNav
	};
};

module.exports = cust_voluntarySeparationRequestEntityBuilder;
