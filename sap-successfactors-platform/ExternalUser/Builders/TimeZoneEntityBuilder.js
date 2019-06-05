var method = TimeZoneEntityBuilder.prototype;

function TimeZoneEntityBuilder() {

}

method.comment = function(comment) {
	this.comment = comment;
	return this;
};

method.country = function(country) {
	this.country = country;
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

method.effectiveStartDate = function(effectiveStartDate) {
	this.effectiveStartDate = effectiveStartDate;
	return this;
};

method.effectiveStatus = function(effectiveStatus) {
	this.effectiveStatus = effectiveStatus;
	return this;
};

method.externalCode = function(externalCode) {
	this.externalCode = externalCode;
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

method.name_de_DE = function(name_de_DE) {
	this.name_de_DE = name_de_DE;
	return this;
};

method.name_defaultValue = function(name_defaultValue) {
	this.name_defaultValue = name_defaultValue;
	return this;
};

method.name_en_GB = function(name_en_GB) {
	this.name_en_GB = name_en_GB;
	return this;
};

method.name_en_US = function(name_en_US) {
	this.name_en_US = name_en_US;
	return this;
};

method.name_es_ES = function(name_es_ES) {
	this.name_es_ES = name_es_ES;
	return this;
};

method.name_fr_FR = function(name_fr_FR) {
	this.name_fr_FR = name_fr_FR;
	return this;
};

method.name_ja_JP = function(name_ja_JP) {
	this.name_ja_JP = name_ja_JP;
	return this;
};

method.name_ko_KR = function(name_ko_KR) {
	this.name_ko_KR = name_ko_KR;
	return this;
};

method.name_localized = function(name_localized) {
	this.name_localized = name_localized;
	return this;
};

method.name_nl_NL = function(name_nl_NL) {
	this.name_nl_NL = name_nl_NL;
	return this;
};

method.name_pt_BR = function(name_pt_BR) {
	this.name_pt_BR = name_pt_BR;
	return this;
};

method.name_pt_PT = function(name_pt_PT) {
	this.name_pt_PT = name_pt_PT;
	return this;
};

method.name_ru_RU = function(name_ru_RU) {
	this.name_ru_RU = name_ru_RU;
	return this;
};

method.name_zh_CN = function(name_zh_CN) {
	this.name_zh_CN = name_zh_CN;
	return this;
};

method.name_zh_TW = function(name_zh_TW) {
	this.name_zh_TW = name_zh_TW;
	return this;
};

method.supported = function(supported) {
	this.supported = supported;
	return this;
};

method.utcDstOffset = function(utcDstOffset) {
	this.utcDstOffset = utcDstOffset;
	return this;
};

method.utcOffset = function(utcOffset) {
	this.utcOffset = utcOffset;
	return this;
};

method.countryNav = function(countryNav) {
	this.countryNav = countryNav;
	return this;
};

method.build = function() {
	return {
		comment: this.comment,
		country: this.country,
		createdBy: this.createdBy,
		createdDateTime: this.createdDateTime,
		effectiveStartDate: this.effectiveStartDate,
		effectiveStatus: this.effectiveStatus,
		externalCode: this.externalCode,
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
		name_de_DE: this.name_de_DE,
		name_defaultValue: this.name_defaultValue,
		name_en_GB: this.name_en_GB,
		name_en_US: this.name_en_US,
		name_es_ES: this.name_es_ES,
		name_fr_FR: this.name_fr_FR,
		name_ja_JP: this.name_ja_JP,
		name_ko_KR: this.name_ko_KR,
		name_localized: this.name_localized,
		name_nl_NL: this.name_nl_NL,
		name_pt_BR: this.name_pt_BR,
		name_pt_PT: this.name_pt_PT,
		name_ru_RU: this.name_ru_RU,
		name_zh_CN: this.name_zh_CN,
		name_zh_TW: this.name_zh_TW,
		supported: this.supported,
		utcDstOffset: this.utcDstOffset,
		utcOffset: this.utcOffset,
		countryNav: this.countryNav
	};
};

module.exports = TimeZoneEntityBuilder;
