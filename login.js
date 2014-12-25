whvutil.autoLoad(function(context){
	var userNameInput = document.getElementById("OnlineServicesLoginStealth_VisaLoginControl_userNameTextBox");
	var pwdInput = document.getElementById("OnlineServicesLoginStealth_VisaLoginControl_passwordTextBox");
	var loginBtn = document.getElementById("OnlineServicesLoginStealth_VisaLoginControl_loginImageButton");

	userNameInput.value = context.loginname;
	pwdInput.value = context.loginpwd;

	whvutil.fireEvent(loginBtn, 'click');
});
