whvutil.autoLoad(function(context){
	var genderSelect = document.getElementById("ctl00_ContentPlaceHolder1_personDetails_genderDropDownList");
	var birthDateSelect = document.getElementById("ctl00_ContentPlaceHolder1_personDetails_dateOfBithDatePicker_Day");
	var birthMonthSelect = document.getElementById("ctl00_ContentPlaceHolder1_personDetails_dateOfBithDatePicker_Month");
	var birthYearSelect = document.getElementById("ctl00_ContentPlaceHolder1_personDetails_dateOfBithDatePicker_Year");
	var birthCountrySelect = document.getElementById("ctl00_ContentPlaceHolder1_personDetails_CountryDropDownList");

//    var streetNumberInput = document.getElementById("ctl00_ContentPlaceHolder1_addressContactDetails_address_streetNumberTextbox");
	var streetNameInput = document.getElementById("ctl00_ContentPlaceHolder1_addressContactDetails_address_address1TextBox");
	var cityInput = document.getElementById("ctl00_ContentPlaceHolder1_addressContactDetails_address_cityTextBox");
//    var provinceInput = document.getElementById("ctl00_ContentPlaceHolder1_addressContactDetails_address_provinceStateTextBox");
	var countrySelect = document.getElementById("ctl00_ContentPlaceHolder1_addressContactDetails_address_countryDropDownList");

//    var dayPhoneInput = document.getElementById("ctl00_ContentPlaceHolder1_addressContactDetails_contactDetails_phoneNumberTextBox");
//    var nightPhoneInput = document.getElementById("ctl00_ContentPlaceHolder1_addressContactDetails_contactDetails_phoneNumberNightTextBox");
	var emailInput = document.getElementById("ctl00_ContentPlaceHolder1_addressContactDetails_contactDetails_emailAddressTextBox");
	var hasAgentSelect = document.getElementById("ctl00_ContentPlaceHolder1_hasAgent_representedByAgentDropdownlist");
	var communicationMethodSelect = document.getElementById("ctl00_ContentPlaceHolder1_communicationMethod_communicationMethodDropDownList");
	var hasCreditCardSelect = document.getElementById("ctl00_ContentPlaceHolder1_hasCreditCard_hasCreditCardDropDownlist");

	genderSelect.value = context.gender;
	var birthday = new Date(context.birthday);
	birthDateSelect.value = birthday.getDate();
	birthMonthSelect.value = birthday.getMonth() + 1;
	birthYearSelect.value = birthday.getFullYear();
	birthCountrySelect.value = context.country;
	streetNameInput.value = context.streetname;
	cityInput.value = context.city;
	countrySelect.value = context.country;
	emailInput.value = context.email;

	hasAgentSelect.value = "No";
	communicationMethodSelect.value = "1";
	hasCreditCardSelect.value = "Yes";

	return true;
});
