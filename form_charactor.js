autoLoad(function(){
	var imprison5YearsSelect = document.getElementById("ctl00_ContentPlaceHolder1_character_imprisonment5YearsDropDownList");
	var imprison12YearsSelect = document.getElementById("ctl00_ContentPlaceHolder1_character_imprisonment12MonthsDropDownList");
	var removalOrderSelect = document.getElementById("ctl00_ContentPlaceHolder1_character_removalOrderDropDownList");
	var deportedSelect = document.getElementById("ctl00_ContentPlaceHolder1_character_deportedDropDownList");

	var chargedSelect = document.getElementById("ctl00_ContentPlaceHolder1_character_chargedDropDownList");
	var convictedSelect = document.getElementById("ctl00_ContentPlaceHolder1_character_convictedDropDownList");
	var investigationSelect = document.getElementById("ctl00_ContentPlaceHolder1_character_underInvestigationDropDownList");
	var excludedSelect = document.getElementById("ctl00_ContentPlaceHolder1_character_excludedDropDownList");
	var removedSelect = document.getElementById("ctl00_ContentPlaceHolder1_character_removedDropDownList");

	var nextButton = document.getElementById("ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_nextImageButton");
	fireEvent(nextButton, 'click');
});
