var Client = require("sap/Client");
var ClientAsync = require("sap/ClientAsync");
var QueryBuilder = require("sap/QueryBuilder")
var UserPermissionsEntityBuilder = require("sap-successfactors-platform/UserManagement/Builders/UserPermissionsEntityBuilder");

exports.ADDRESS_LINE1 = "addressLine1";
exports.ADDRESS_LINE2 = "addressLine2";
exports.ADDRESS_LINE3 = "addressLine3";
exports.BENCH_STRENGTH = "benchStrength";
exports.BENCH_STRENGTH_NAV = "benchStrengthNav";
exports.BONUS_BUDGET_AMOUNT = "bonusBudgetAmount";
exports.BONUS_TARGET = "bonusTarget";
exports.BUSINESS_PHONE = "businessPhone";
exports.BUSINESS_SEGMENT = "businessSegment";
exports.CELL_PHONE = "cellPhone";
exports.CITIZENSHIP = "citizenship";
exports.CITY = "city";
exports.COMPENSATION_BONUS_ELIGIBLE = "compensationBonusEligible";
exports.COMPENSATION_ELIGIBLE = "compensationEligible";
exports.COMPENSATION_READ_ONLY = "compensationReadOnly";
exports.COMPENSATION_SALARY_ELIGIBLE = "compensationSalaryEligible";
exports.COMPENSATION_SALARY_RATE_TYPE = "compensationSalaryRateType";
exports.COMPENSATION_SALARY_RATE_UNITS = "compensationSalaryRateUnits";
exports.COMPENSATION_STOCK_ELIGIBLE = "compensationStockEligible";
exports.COMPETENCY = "competency";
exports.COMPETENCY_RATING_NAV = "competencyRatingNav";
exports.COUNTRY = "country";
exports.CRITICAL_TALENT_COMMENTS = "criticalTalentComments";
exports.CUSTOM01 = "custom01";
exports.CUSTOM02 = "custom02";
exports.CUSTOM03 = "custom03";
exports.CUSTOM04 = "custom04";
exports.CUSTOM05 = "custom05";
exports.CUSTOM06 = "custom06";
exports.CUSTOM07 = "custom07";
exports.CUSTOM08 = "custom08";
exports.CUSTOM09 = "custom09";
exports.CUSTOM10 = "custom10";
exports.CUSTOM11 = "custom11";
exports.CUSTOM12 = "custom12";
exports.CUSTOM13 = "custom13";
exports.CUSTOM14 = "custom14";
exports.CUSTOM15 = "custom15";
exports.CUSTOM_MANAGER = "customManager";
exports.CUSTOM_REPORTS = "customReports";
exports.DATE_OF_BIRTH = "dateOfBirth";
exports.DATE_OF_CURRENT_POSITION = "dateOfCurrentPosition";
exports.DATE_OF_POSITION = "dateOfPosition";
exports.DEFAULT_FULL_NAME = "defaultFullName";
exports.DEFAULT_LOCALE = "defaultLocale";
exports.DEPARTMENT = "department";
exports.DIRECT_REPORTS = "directReports";
exports.DIVISION = "division";
exports.DUMMY_NOMINATION_NAV = "dummyNominationNav";
exports.EMAIL = "email";
exports.EMP_ID = "empId";
exports.EMP_INFO = "empInfo";
exports.EMPLOYEE_CLASS = "employeeClass";
exports.ETHNICITY = "ethnicity";
exports.ETHNICITY_NAV = "ethnicityNav";
exports.FAX = "fax";
exports.FINAL_JOB_CODE = "finalJobCode";
exports.FINAL_JOB_FAMILY = "finalJobFamily";
exports.FINAL_JOB_ROLE = "finalJobRole";
exports.FIRST_NAME = "firstName";
exports.FUTURE_LEADER = "futureLeader";
exports.GENDER = "gender";
exports.HIRE_DATE = "hireDate";
exports.HOME_PHONE = "homePhone";
exports.HR = "hr";
exports.HR_REPORTS = "hrReports";
exports.IMPACT_OF_LOSS = "impactOfLoss";
exports.IMPACT_OF_LOSS_COMMENTS = "impactOfLossComments";
exports.IMPACT_OF_LOSS_NAV = "impactOfLossNav";
exports.ISSUE_COMMENTS = "issueComments";
exports.JOB_CODE = "jobCode";
exports.JOB_FAMILY = "jobFamily";
exports.JOB_LEVEL = "jobLevel";
exports.JOB_ROLE = "jobRole";
exports.JOB_TITLE = "jobTitle";
exports.KEY_POSITION = "keyPosition";
exports.LAST_MODIFIED = "lastModified";
exports.LAST_MODIFIED_DATE_TIME = "lastModifiedDateTime";
exports.LAST_MODIFIED_WITH_T_Z = "lastModifiedWithTZ";
exports.LAST_NAME = "lastName";
exports.LAST_REVIEW_DATE = "lastReviewDate";
exports.LEVEL = "level";
exports.LOCAL_CURRENCY_CODE = "localCurrencyCode";
exports.LOCATION = "location";
exports.LUMPSUM2_TARGET = "lumpsum2Target";
exports.LUMPSUM_TARGET = "lumpsumTarget";
exports.MANAGER = "manager";
exports.MARRIED = "married";
exports.MATRIX1_LABEL = "matrix1Label";
exports.MATRIX2_LABEL = "matrix2Label";
exports.MATRIX_MANAGED = "matrixManaged";
exports.MATRIX_MANAGER = "matrixManager";
exports.MATRIX_REPORTS = "matrixReports";
exports.MERIT_EFFECTIVE_DATE = "meritEffectiveDate";
exports.MERIT_TARGET = "meritTarget";
exports.MI = "mi";
exports.MINORITY = "minority";
exports.NATIONALITY = "nationality";
exports.NEW_TO_POSITION = "newToPosition";
exports.NICKNAME = "nickname";
exports.NOMINATION_NAV = "nominationNav";
exports.OBJECTIVE = "objective";
exports.ONBOARDING_ID = "onboardingId";
exports.ORIG_HIRE_DATE = "origHireDate";
exports.PASSWORD = "password";
exports.PAY_GRADE = "payGrade";
exports.PERFORMANCE = "performance";
exports.POTENTIAL = "potential";
exports.PROMOTION_AMOUNT = "promotionAmount";
exports.PROXY = "proxy";
exports.RAISE_PRORATING = "raiseProrating";
exports.REASON_FOR_LEAVING = "reasonForLeaving";
exports.REASON_FOR_LEAVING_NAV = "reasonForLeavingNav";
exports.RELO_COMMENTS = "reloComments";
exports.RELO_LOCATION = "reloLocation";
exports.RELO_WILLING = "reloWilling";
exports.RELO_WILLING_NAV = "reloWillingNav";
exports.REVIEW_FREQ = "reviewFreq";
exports.RISK_OF_LOSS = "riskOfLoss";
exports.RISK_OF_LOSS_NAV = "riskOfLossNav";
exports.SALARY = "salary";
exports.SALARY_BUDGET_EXTRA2_PERCENTAGE = "salaryBudgetExtra2Percentage";
exports.SALARY_BUDGET_EXTRA_PERCENTAGE = "salaryBudgetExtraPercentage";
exports.SALARY_BUDGET_FINAL_SALARY_PERCENTAGE = "salaryBudgetFinalSalaryPercentage";
exports.SALARY_BUDGET_LUMPSUM_PERCENTAGE = "salaryBudgetLumpsumPercentage";
exports.SALARY_BUDGET_MERIT_PERCENTAGE = "salaryBudgetMeritPercentage";
exports.SALARY_BUDGET_PROMOTION_PERCENTAGE = "salaryBudgetPromotionPercentage";
exports.SALARY_BUDGET_TOTAL_RAISE_PERCENTAGE = "salaryBudgetTotalRaisePercentage";
exports.SALARY_LOCAL = "salaryLocal";
exports.SALARY_PRORATING = "salaryProrating";
exports.SALUTATION = "salutation";
exports.SALUTATION_NAV = "salutationNav";
exports.SCI_LAST_MODIFIED = "sciLastModified";
exports.SEATING_CHART = "seatingChart";
exports.SECOND_MANAGER = "secondManager";
exports.SECOND_REPORTS = "secondReports";
exports.SERVICE_DATE = "serviceDate";
exports.SSN = "ssn";
exports.STATE = "state";
exports.STATUS = "status";
exports.STOCK_BUDGET_OPTION_AMOUNT = "stockBudgetOptionAmount";
exports.STOCK_BUDGET_OTHER1_AMOUNT = "stockBudgetOther1Amount";
exports.STOCK_BUDGET_OTHER2_AMOUNT = "stockBudgetOther2Amount";
exports.STOCK_BUDGET_OTHER3_AMOUNT = "stockBudgetOther3Amount";
exports.STOCK_BUDGET_STOCK_AMOUNT = "stockBudgetStockAmount";
exports.STOCK_BUDGET_UNIT_AMOUNT = "stockBudgetUnitAmount";
exports.SUFFIX = "suffix";
exports.SYS_COST_OF_SOURCE = "sysCostOfSource";
exports.SYS_SOURCE = "sysSource";
exports.SYS_SOURCE_NAV = "sysSourceNav";
exports.SYS_STARTING_SALARY = "sysStartingSalary";
exports.TIME_ZONE = "timeZone";
exports.TITLE = "title";
exports.TOTAL_TEAM_SIZE = "totalTeamSize";
exports.USER_ID = "userId";
exports.USER_PERMISSIONS_NAV = "userPermissionsNav";
exports.USERNAME = "username";
exports.VETERAN_DISABLED = "veteranDisabled";
exports.VETERAN_MEDAL = "veteranMedal";
exports.VETERAN_PROTECTED = "veteranProtected";
exports.VETERAN_SEPARATED = "veteranSeparated";
exports.ZIP_CODE = "zipCode";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new UserPermissionsEntityBuilder();
};

exports.getClient = function(configurations) {
	return new UserPermissionsClient(configurations);
};

exports.getClientAsync = function(configurations) {
	return new UserPermissionsClientAsync(configurations);
};

function UserPermissionsClient (configurations) {

	var API_PATH = "/odata/v2/UserPermissions";

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

function UserPermissionsClientAsync (configurations) {

	var API_PATH = "/odata/v2/UserPermissions";

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
