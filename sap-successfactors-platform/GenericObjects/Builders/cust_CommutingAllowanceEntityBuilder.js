var method = cust_CommutingAllowanceEntityBuilder.prototype;

function cust_CommutingAllowanceEntityBuilder() {

}

method.createdBy = function(createdBy) {
	this.createdBy = createdBy;
	return this;
};

method.createdDateTime = function(createdDateTime) {
	this.createdDateTime = createdDateTime;
	return this;
};

method.cust_Amount = function(cust_Amount) {
	this.cust_Amount = cust_Amount;
	return this;
};

method.cust_ConnectionPoint = function(cust_ConnectionPoint) {
	this.cust_ConnectionPoint = cust_ConnectionPoint;
	return this;
};

method.cust_DestinationStation = function(cust_DestinationStation) {
	this.cust_DestinationStation = cust_DestinationStation;
	return this;
};

method.cust_OriginStation = function(cust_OriginStation) {
	this.cust_OriginStation = cust_OriginStation;
	return this;
};

method.cust_PaymentInterval = function(cust_PaymentInterval) {
	this.cust_PaymentInterval = cust_PaymentInterval;
	return this;
};

method.cust_TrainLinename1 = function(cust_TrainLinename1) {
	this.cust_TrainLinename1 = cust_TrainLinename1;
	return this;
};

method.cust_TrainLinename2 = function(cust_TrainLinename2) {
	this.cust_TrainLinename2 = cust_TrainLinename2;
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
		cust_Amount: this.cust_Amount,
		cust_ConnectionPoint: this.cust_ConnectionPoint,
		cust_DestinationStation: this.cust_DestinationStation,
		cust_OriginStation: this.cust_OriginStation,
		cust_PaymentInterval: this.cust_PaymentInterval,
		cust_TrainLinename1: this.cust_TrainLinename1,
		cust_TrainLinename2: this.cust_TrainLinename2,
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

module.exports = cust_CommutingAllowanceEntityBuilder;
