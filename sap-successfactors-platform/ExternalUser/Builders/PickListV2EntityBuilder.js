var method = PickListV2EntityBuilder.prototype;

function PickListV2EntityBuilder() {

}

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

method.displayOrder = function(displayOrder) {
	this.displayOrder = displayOrder;
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

method.id = function(id) {
	this.id = id;
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

method.legacyPickListId = function(legacyPickListId) {
	this.legacyPickListId = legacyPickListId;
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

method.name = function(name) {
	this.name = name;
	return this;
};

method.parentPickList = function(parentPickList) {
	this.parentPickList = parentPickList;
	return this;
};

method.picklistCreationSource = function(picklistCreationSource) {
	this.picklistCreationSource = picklistCreationSource;
	return this;
};

method.status = function(status) {
	this.status = status;
	return this;
};

method.parentPickListNav = function(parentPickListNav) {
	this.parentPickListNav = parentPickListNav;
	return this;
};

method.values = function(values) {
	this.values = values;
	return this;
};

method.build = function() {
	return {
		createdBy: this.createdBy,
		createdDate: this.createdDate,
		createdDateTime: this.createdDateTime,
		displayOrder: this.displayOrder,
		effectiveEndDate: this.effectiveEndDate,
		effectiveStartDate: this.effectiveStartDate,
		id: this.id,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDate: this.lastModifiedDate,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedDateWithTZ: this.lastModifiedDateWithTZ,
		legacyPickListId: this.legacyPickListId,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId,
		name: this.name,
		parentPickList: this.parentPickList,
		picklistCreationSource: this.picklistCreationSource,
		status: this.status,
		parentPickListNav: this.parentPickListNav,
		values: this.values
	};
};

module.exports = PickListV2EntityBuilder;
