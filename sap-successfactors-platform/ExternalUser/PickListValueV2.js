var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var PickListValueV2EntityBuilder = require("sap-successfactors-platform/ExternalUser/Builders/PickListValueV2EntityBuilder");

exports.PICK_LIST_V2_EFFECTIVE_START_DATE = "PickListV2_effectiveStartDate";
exports.PICK_LIST_V2_ID = "PickListV2_id";
exports.CREATED_BY = "createdBy";
exports.CREATED_DATE = "createdDate";
exports.CREATED_DATE_TIME = "createdDateTime";
exports.EXTERNAL_CODE = "externalCode";
exports.L_VALUE = "lValue";
exports.LABEL_DE__D_E = "label_de_DE";
exports.LABEL_DEFAULT_VALUE = "label_defaultValue";
exports.LABEL_EN__G_B = "label_en_GB";
exports.LABEL_EN__U_S = "label_en_US";
exports.LABEL_ES__E_S = "label_es_ES";
exports.LABEL_FR__F_R = "label_fr_FR";
exports.LABEL_JA__J_P = "label_ja_JP";
exports.LABEL_KO__K_R = "label_ko_KR";
exports.LABEL_LOCALIZED = "label_localized";
exports.LABEL_NL__N_L = "label_nl_NL";
exports.LABEL_PT__B_R = "label_pt_BR";
exports.LABEL_PT__P_T = "label_pt_PT";
exports.LABEL_RU__R_U = "label_ru_RU";
exports.LABEL_ZH__C_N = "label_zh_CN";
exports.LABEL_ZH__T_W = "label_zh_TW";
exports.LAST_MODIFIED_BY = "lastModifiedBy";
exports.LAST_MODIFIED_DATE = "lastModifiedDate";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_DATE_WITH_T_Z = "lastModifiedDateWithTZ";
exports.LEGACY_STATUS = "legacyStatus";
exports.MAX_VAL = "maxVal";
exports.MDF_SYSTEM_EFFECTIVE_END_DATE = "mdfSystemEffectiveEndDate";
exports.MDF_SYSTEM_EFFECTIVE_START_DATE = "mdfSystemEffectiveStartDate";
exports.MDF_SYSTEM_ENTITY_ID = "mdfSystemEntityId";
exports.MDF_SYSTEM_OBJECT_TYPE = "mdfSystemObjectType";
exports.MDF_SYSTEM_RECORD_ID = "mdfSystemRecordId";
exports.MDF_SYSTEM_RECORD_STATUS = "mdfSystemRecordStatus";
exports.MDF_SYSTEM_TRANSACTION_SEQUENCE = "mdfSystemTransactionSequence";
exports.MDF_SYSTEM_VERSION_ID = "mdfSystemVersionId";
exports.MIN_VAL = "minVal";
exports.NON_UNIQUE_EXTERNAL_CODE = "nonUniqueExternalCode";
exports.OPT_VALUE = "optValue";
exports.OPTION_ID = "optionId";
exports.PARENT_PICK_LIST_VALUE = "parentPickListValue";
exports.R_VALUE = "rValue";
exports.STATUS = "status";
exports.PARENT_PICK_LIST_VALUE_NAV = "parentPickListValueNav";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new PickListValueV2EntityBuilder();
};

exports.getClient = function(configurations) {
	return new PickListValueV2Client(configurations);
};

exports.getClientAsync = function(configurations) {
	return new PickListValueV2ClientAsync(configurations);
};

function PickListValueV2Client (configurations) {

	var API_PATH = "/odata/v2/PickListValueV2";

	this.client = new Client(configurations, API_PATH);

	this.list = function(queryParameters) {
		return this.client.list(queryParameters);
	};

	this.get = function(id, queryParameters) {
		return this.client.get(getId(id), queryParameters);
	};

	this.create = function(entity, queryParameters) {
		return this.client.create(entity, queryParameters);
	};

	this.update = function(id, entity, queryParameters) {
		return this.client.update(getId(id), entity, queryParameters);
	};

	this.delete = function(id, queryParameters) {
		return this.client.delete(getId(id), queryParameters);
	};

	this.count = function() {
		return this.client.get("/$count");
	};
}

function PickListValueV2ClientAsync (configurations) {

	var API_PATH = "/odata/v2/PickListValueV2";

	this.client = new ClientAsync(configurations, API_PATH);

	this.listAsync = function(callback, queryParameters, options) {
		return this.client.listAsync(callback, queryParameters, options);
	};

	this.getAsync = function(callback, id, queryParameters, options) {
		return this.client.getAsync(callback, getId(id), queryParameters, options);
	};

	this.createAsync = function(callback, entity, queryParameters, options) {
		return this.client.createAsync(callback, entity, queryParameters, options);
	};

	this.updateAsync = function(callback, id, entity, queryParameters, options) {
		return this.client.update(callback, getId(id), entity, queryParameters, options);
	};

	this.deleteAsync = function(callback, id, queryParameters, options) {
		return this.client.deleteAsync(callback, getId(id), queryParameters, options);
	};

	this.countAsync = function(callback) {
		return this.client.getAsync(callback, "/$count");
	};

	this.execute = function() {
		return this.client.execute();
	};
}

function getId(id) {
	return "('" + id + "')";
}
