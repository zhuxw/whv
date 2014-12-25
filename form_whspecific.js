whvutil.autoLoad(function(context){
	var previousWhsPermitSelect = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_commonWHSQuestions_previousWhsPermitVisaDropDownList");
	var sufficientFundsHolidaySelect = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_commonWHSQuestions_sufficientFundsHolidayDropDownList");

	var intendedTravelDate = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_intendedTravelDateDatePicker_Day");
	var intendedTravelMonth = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_intendedTravelDateDatePicker_Month");
	var intendedTravelYear = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_intendedTravelDateDatePicker_Year");

	var beenToNZSelect = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_beenToNzDropDownList");

//    var beenToNZDate = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_whenInNZDatePicker_Day");
//    var beenToNZMonth = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_whenInNZDatePicker_Month");
//    var beenToNZYear = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_whenInNZDatePicker_Year");

	var sufficientFundsOnwardTicketSelect = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_requirementsQuestions_sufficientFundsOnwardTicketDropDownList");

	var readRequirementSelect = document.getElementById("ctl00_ContentPlaceHolder1_offshoreDetails_requirementsQuestions_readRequirementsDropDownList");

	var no = "No";
	var yes = "Yes";
	previousWhsPermitSelect.value = no;
	sufficientFundsHolidaySelect.value = yes;

	var travelDate = new Date(context.traveldate);
	intendedTravelDate.value = travelDate.getDate();
	intendedTravelMonth.value = travelDate.getMonth() + 1;
	intendedTravelYear.value = travelDate.getFullYear();

	beenToNZSelect.value = no;
	sufficientFundsOnwardTicketSelect.value = yes;
	readRequirementSelect.value = yes;

	return true;
});
