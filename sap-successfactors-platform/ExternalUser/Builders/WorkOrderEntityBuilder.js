var method = WorkOrderEntityBuilder.prototype;

function WorkOrderEntityBuilder() {

}

method.billingAmount = function(billingAmount) {
	this.billingAmount = billingAmount;
	return this;
};

method.billingRate = function(billingRate) {
	this.billingRate = billingRate;
	return this;
};

method.createdBy = function(createdBy) {
	this.createdBy = createdBy;
	return this;
};

method.createdDate = function(createdDate) {
	this.createdDate = createdDate;
	return this;
};

method.createdDateTime = function(createdDateTime) {
	this.createdDateTime = createdDateTime;
	return this;
};

method.currency = function(currency) {
	this.currency = currency;
	return this;
};

method.effectiveEndDate = function(effectiveEndDate) {
	this.effectiveEndDate = effectiveEndDate;
	return this;
};

method.effectiveStartDate = function(effectiveStartDate) {
	this.effectiveStartDate = effectiveStartDate;
	return this;
};

method.effectiveStatus = function(effectiveStatus) {
	this.effectiveStatus = effectiveStatus;
	return this;
};

method.endDate = function(endDate) {
	this.endDate = endDate;
	return this;
};

method.lastModifiedBy = function(lastModifiedBy) {
	this.lastModifiedBy = lastModifiedBy;
	return this;
};

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
	return this;
};

method.lastModifiedDateTime = function(lastModifiedDateTime) {
	this.lastModifiedDateTime = lastModifiedDateTime;
	return this;
};

method.lastModifiedDateWithTZ = function(lastModifiedDateWithTZ) {
	this.lastModifiedDateWithTZ = lastModifiedDateWithTZ;
	return this;
};

method.mdfSystemEntityId = function(mdfSystemEntityId) {
	this.mdfSystemEntityId = mdfSystemEntityId;
	return this;
};

method.mdfSystemObjectType = function(mdfSystemObjectType) {
	this.mdfSystemObjectType = mdfSystemObjectType;
	return this;
};

method.mdfSystemRecordId = function(mdfSystemRecordId) {
	this.mdfSystemRecordId = mdfSystemRecordId;
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

method.mdfSystemVersionId = function(mdfSystemVersionId) {
	this.mdfSystemVersionId = mdfSystemVersionId;
	return this;
};

method.startDate = function(startDate) {
	this.startDate = startDate;
	return this;
};

method.userSysId = function(userSysId) {
	this.userSysId = userSysId;
	return this;
};

method.vendor = function(vendor) {
	this.vendor = vendor;
	return this;
};

method.workOrderId = function(workOrderId) {
	this.workOrderId = workOrderId;
	return this;
};

method.workOrderName = function(workOrderName) {
	this.workOrderName = workOrderName;
	return this;
};

method.workOrderOwnerId = function(workOrderOwnerId) {
	this.workOrderOwnerId = workOrderOwnerId;
	return this;
};

method.workerType = function(workerType) {
	this.workerType = workerType;
	return this;
};

method.currencyNav = function(currencyNav) {
	this.currencyNav = currencyNav;
	return this;
};

method.vendorNav = function(vendorNav) {
	this.vendorNav = vendorNav;
	return this;
};

method.workerTypeNav = function(workerTypeNav) {
	this.workerTypeNav = workerTypeNav;
	return this;
};

method.build = function() {
	return {
		billingAmount: this.billingAmount,
		billingRate: this.billingRate,
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		currency: this.currency,
		effectiveEndDate: this.effectiveEndDate,
		effectiveStartDate: this.effectiveStartDate,
		effectiveStatus: this.effectiveStatus,
		endDate: this.endDate,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDate: this.lastModifiedDate,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedDateWithTZ: this.lastModifiedDateWithTZ,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId,
		startDate: this.startDate,
		userSysId: this.userSysId,
		vendor: this.vendor,
		workOrderId: this.workOrderId,
		workOrderName: this.workOrderName,
		workOrderOwnerId: this.workOrderOwnerId,
		workerType: this.workerType,
		currencyNav: this.currencyNav,
		vendorNav: this.vendorNav,
		workerTypeNav: this.workerTypeNav
	};
};

module.exports = WorkOrderEntityBuilder;
