var method = VendorInfoEntityBuilder.prototype;

function VendorInfoEntityBuilder() {

}

method.createdBy = function(createdBy) {
	this.createdBy = createdBy;
	return this;
};

method.createdDateTime = function(createdDateTime) {
	this.createdDateTime = createdDateTime;
	return this;
};

method.description_de_DE = function(description_de_DE) {
	this.description_de_DE = description_de_DE;
	return this;
};

method.description_defaultValue = function(description_defaultValue) {
	this.description_defaultValue = description_defaultValue;
	return this;
};

method.description_en_GB = function(description_en_GB) {
	this.description_en_GB = description_en_GB;
	return this;
};

method.description_en_US = function(description_en_US) {
	this.description_en_US = description_en_US;
	return this;
};

method.description_es_ES = function(description_es_ES) {
	this.description_es_ES = description_es_ES;
	return this;
};

method.description_fr_FR = function(description_fr_FR) {
	this.description_fr_FR = description_fr_FR;
	return this;
};

method.description_ja_JP = function(description_ja_JP) {
	this.description_ja_JP = description_ja_JP;
	return this;
};

method.description_ko_KR = function(description_ko_KR) {
	this.description_ko_KR = description_ko_KR;
	return this;
};

method.description_localized = function(description_localized) {
	this.description_localized = description_localized;
	return this;
};

method.description_nl_NL = function(description_nl_NL) {
	this.description_nl_NL = description_nl_NL;
	return this;
};

method.description_pt_BR = function(description_pt_BR) {
	this.description_pt_BR = description_pt_BR;
	return this;
};

method.description_pt_PT = function(description_pt_PT) {
	this.description_pt_PT = description_pt_PT;
	return this;
};

method.description_ru_RU = function(description_ru_RU) {
	this.description_ru_RU = description_ru_RU;
	return this;
};

method.description_zh_CN = function(description_zh_CN) {
	this.description_zh_CN = description_zh_CN;
	return this;
};

method.description_zh_TW = function(description_zh_TW) {
	this.description_zh_TW = description_zh_TW;
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

method.lastModifiedBy = function(lastModifiedBy) {
	this.lastModifiedBy = lastModifiedBy;
	return this;
};

method.lastModifiedDateTime = function(lastModifiedDateTime) {
	this.lastModifiedDateTime = lastModifiedDateTime;
	return this;
};

method.mdfSystemCreatedBy = function(mdfSystemCreatedBy) {
	this.mdfSystemCreatedBy = mdfSystemCreatedBy;
	return this;
};

method.mdfSystemCreatedDate = function(mdfSystemCreatedDate) {
	this.mdfSystemCreatedDate = mdfSystemCreatedDate;
	return this;
};

method.mdfSystemEffectiveEndDate = function(mdfSystemEffectiveEndDate) {
	this.mdfSystemEffectiveEndDate = mdfSystemEffectiveEndDate;
	return this;
};

method.mdfSystemEntityId = function(mdfSystemEntityId) {
	this.mdfSystemEntityId = mdfSystemEntityId;
	return this;
};

method.mdfSystemLastModifiedBy = function(mdfSystemLastModifiedBy) {
	this.mdfSystemLastModifiedBy = mdfSystemLastModifiedBy;
	return this;
};

method.mdfSystemLastModifiedDate = function(mdfSystemLastModifiedDate) {
	this.mdfSystemLastModifiedDate = mdfSystemLastModifiedDate;
	return this;
};

method.mdfSystemLastModifiedDateWithTZ = function(mdfSystemLastModifiedDateWithTZ) {
	this.mdfSystemLastModifiedDateWithTZ = mdfSystemLastModifiedDateWithTZ;
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

method.vendorCode = function(vendorCode) {
	this.vendorCode = vendorCode;
	return this;
};

method.vendorName = function(vendorName) {
	this.vendorName = vendorName;
	return this;
};

method.build = function() {
	return {
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		description_de_DE: this.description_de_DE,
		description_defaultValue: this.description_defaultValue,
		description_en_GB: this.description_en_GB,
		description_en_US: this.description_en_US,
		description_es_ES: this.description_es_ES,
		description_fr_FR: this.description_fr_FR,
		description_ja_JP: this.description_ja_JP,
		description_ko_KR: this.description_ko_KR,
		description_localized: this.description_localized,
		description_nl_NL: this.description_nl_NL,
		description_pt_BR: this.description_pt_BR,
		description_pt_PT: this.description_pt_PT,
		description_ru_RU: this.description_ru_RU,
		description_zh_CN: this.description_zh_CN,
		description_zh_TW: this.description_zh_TW,
		effectiveStartDate: this.effectiveStartDate,
		effectiveStatus: this.effectiveStatus,
		lastModifiedBy: this.lastModifiedBy,
		lastModifiedDateTime: this.lastModifiedDateTime,
		mdfSystemCreatedBy: this.mdfSystemCreatedBy,
		mdfSystemCreatedDate: this.mdfSystemCreatedDate,
		mdfSystemEffectiveEndDate: this.mdfSystemEffectiveEndDate,
		mdfSystemEntityId: this.mdfSystemEntityId,
		mdfSystemLastModifiedBy: this.mdfSystemLastModifiedBy,
		mdfSystemLastModifiedDate: this.mdfSystemLastModifiedDate,
		mdfSystemLastModifiedDateWithTZ: this.mdfSystemLastModifiedDateWithTZ,
		mdfSystemObjectType: this.mdfSystemObjectType,
		mdfSystemRecordId: this.mdfSystemRecordId,
		mdfSystemRecordStatus: this.mdfSystemRecordStatus,
		mdfSystemTransactionSequence: this.mdfSystemTransactionSequence,
		mdfSystemVersionId: this.mdfSystemVersionId,
		vendorCode: this.vendorCode,
		vendorName: this.vendorName
	};
};

module.exports = VendorInfoEntityBuilder;
