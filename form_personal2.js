whvutil.autoLoad(function(context){
	var passportNumberInput = document.getElementById("ctl00_ContentPlaceHolder1_identification_passportNumberTextBox");
	var passportNumberConfirmInput = document.getElementById("ctl00_ContentPlaceHolder1_identification_confirmPassportNumberTextBox");
	var passportExpireDateSelect = document.getElementById("ctl00_ContentPlaceHolder1_identification_passportExpiryDateDatePicker_Day");
	var passportExpireMonthSelect = document.getElementById("ctl00_ContentPlaceHolder1_identification_passportExpiryDateDatePicker_Month");
	var passportExpireYearSelect = document.getElementById("ctl00_ContentPlaceHolder1_identification_passportExpiryDateDatePicker_Year");

	var idTypeSelect = document.getElementById("ctl00_ContentPlaceHolder1_identification_otherIdentificationDropdownlist");
	var idDocIssueDateSelect = document.getElementById("ctl00_ContentPlaceHolder1_identification_otherIssueDateDatePicker_Day");
	var idDocIssueMonthSelect = document.getElementById("ctl00_ContentPlaceHolder1_identification_otherIssueDateDatePicker_Month");
	var idDocIssueYearSelect = document.getElementById("ctl00_ContentPlaceHolder1_identification_otherIssueDateDatePicker_Year");

//    var idDocExpireDateSelect = document.getElementById("ctl00_ContentPlaceHolder1_identification_otherExpiryDateDatePicker_Day");
//    var idDocExpireMonthSelect = document.getElementById("ctl00_ContentPlaceHolder1_identification_otherExpiryDateDatePicker_Month");
//    var idDocExpireYearSelect = document.getElementById("ctl00_ContentPlaceHolder1_identification_otherExpiryDateDatePicker_Year");


	passportNumberInput.value = context.passportnumber;
	passportNumberConfirmInput.value = context.passportnumber;
	var expireDate = new Date(context.passportexpire);
	passportExpireDateSelect.value = expireDate.getDate();
	passportExpireMonthSelect.value = expireDate.getMonth() + 1;
	passportExpireYearSelect.value = expireDate.getFullYear();

	idTypeSelect.value = '3';
	var idIssueDate = new Date(context.idcarddate);
	idDocIssueDateSelect.value = idIssueDate.getDate();
	idDocIssueMonthSelect.value = idIssueDate.getMonth() + 1;
	idDocIssueYearSelect.value = idIssueDate.getFullYear();

	return true;
});
