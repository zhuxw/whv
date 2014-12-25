whvutil.autoLoad(function(context){
	var workingHolidayButton = document.getElementById('OnlineServices_workingHolidayAnchor');
	var country = context.country;
	if(workingHolidayButton){
		whvutil.step(1, function(){
			window.location = "https://www.immigration.govt.nz/WorkingHoliday/Application/Create.aspx?CountryId=" + country;
		});
	}else{
		var loginBtn = document.getElementById('SecureLoginPage');
		loginBtn = loginBtn.querySelector('img');
		whvutil.fireEvent(loginBtn, 'click');
	}
});
