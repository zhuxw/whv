whvutil.autoLoad(function(){

	var renalDialysisSelect = document.getElementById("ctl00_ContentPlaceHolder1_medicalConditions_renalDialysisDropDownList");
	var hasTBSelect = document.getElementById("ctl00_ContentPlaceHolder1_medicalConditions_tuberculosisDropDownList");
	var hasCancerSelect = document.getElementById("ctl00_ContentPlaceHolder1_medicalConditions_cancerDropDownList");
	var hasHeartDiseaseSelect = document.getElementById("ctl00_ContentPlaceHolder1_medicalConditions_heartDiseaseDropDownList");
	var hasDisabilitySelect = document.getElementById("ctl00_ContentPlaceHolder1_medicalConditions_disabilityDropDownList");

	var needHospitalisationSelect = document.getElementById("ctl00_ContentPlaceHolder1_medicalConditions_hospitalisationDropDownList");
	var needResidentalCareSelect = document.getElementById("ctl00_ContentPlaceHolder1_medicalConditions_residentailCareDropDownList");
	var pregnantSelect = document.getElementById("ctl00_ContentPlaceHolder1_medicalConditions_pregnancy_pregnancyStatusDropDownList");

	var tbRiskSelect = document.getElementById("ctl00_ContentPlaceHolder1_medicalConditions_tbRiskDropDownList");

	var no = "No";
	renalDialysisSelect.value = no;
	hasTBSelect.value = no;
	hasCancerSelect.value = no;
	hasHeartDiseaseSelect.value = no;
	hasDisabilitySelect.value = no;
	needHospitalisationSelect.value = no;
	needResidentalCareSelect.value = no;
	if(pregnantSelect){
		pregnantSelect.value = no;
	}
	tbRiskSelect.value = no;

	return true;
});
