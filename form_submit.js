whvutil.autoLoad(function(){
	var payBtn = document.getElementById("ctl00_ContentPlaceHolder1_payAnchor");
	if(payBtn){
		whvutil.fireEvent(payBtn, 'click');
	}else{
		var c1 = document.getElementById("ctl00_ContentPlaceHolder1_falseStatementCheckBox");
		var c2 = document.getElementById("ctl00_ContentPlaceHolder1_notesCheckBox");
		var c3 = document.getElementById("ctl00_ContentPlaceHolder1_circumstancesCheckBox");
		var c4 = document.getElementById("ctl00_ContentPlaceHolder1_warrantsCheckBox");
		var c5 = document.getElementById("ctl00_ContentPlaceHolder1_informationCheckBox");
		var c6 = document.getElementById("ctl00_ContentPlaceHolder1_healthCheckBox");
		var c7 = document.getElementById("ctl00_ContentPlaceHolder1_adviceCheckBox");
		var c8 = document.getElementById("ctl00_ContentPlaceHolder1_registrationCheckBox");
		var c9 = document.getElementById("ctl00_ContentPlaceHolder1_entitlementCheckbox");
		var c10 = document.getElementById("ctl00_ContentPlaceHolder1_permitExpiryCheckBox");
		var c11 = document.getElementById("ctl00_ContentPlaceHolder1_medicalInsuranceCheckBox");

		c1.checked = true;
		c2.checked = true;
		c3.checked = true;
		c4.checked = true;
		c5.checked = true;
		c6.checked = true;
		c7.checked = true;
		c8.checked = true;
		c9.checked = true;
		c10.checked = true;
		c11.checked = true;

		var submitButton = document.getElementById("ctl00_ContentPlaceHolder1_submitImageButton");
		whvutil.fireEvent(submitButton, 'click');
	}
});
