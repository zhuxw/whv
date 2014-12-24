autoLoad(function(){
	var previousWhsPermitSelect = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_commonWHSQuestions_previousWhsPermitVisaDropDownList");
	var sufficientFundsHolidaySelect = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_commonWHSQuestions_sufficientFundsHolidayDropDownList");

	var intendedTravelDate = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_intendedTravelDateDatePicker_Day");
	var intendedTravelMonth = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_intendedTravelDateDatePicker_Month");
	var intendedTravelYear = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_intendedTravelDateDatePicker_Year");

	var beenToNZSelect = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_beenToNzDropDownList");

	var beenToNZDate = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_whenInNZDatePicker_Day");
	var beenToNZMonth = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_whenInNZDatePicker_Month");
	var beenToNZYear = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_whenInNZDatePicker_Year");

	var sufficientFundsOnwardTicketSelect = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_requirementsQuestions_sufficientFundsOnwardTicketDropDownList");

	var readRequirementSelect = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_requirementsQuestions_readRequirementsDropDownList");

	var nextButton = document.getElementById("ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_nextImageButton");


	var submitButton = document.getElementById("ctl00_ContentPlaceHolder1_wizardPageHeader_nav_submitImageButton");
	if(submitButton){
		fireEvent(submitButton, 'click');
	}
});
