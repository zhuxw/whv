autoLoad(function(){
	alert('login');
	chrome.runtime.sendMessage('whvcontext', function(response){
		var userNameInput = document.getElementById("OnlineServicesLoginStealth_VisaLoginControl_userNameTextBox");
		var pwdInput = document.getElementById("OnlineServicesLoginStealth_VisaLoginControl_passwordTextBox");
		var loginBtn = document.getElementById("OnlineServicesLoginStealth_VisaLoginControl_loginImageButton");

		userNameInput.value = "ccschen";
		pwdInput.value = "Passw0rd";

		fireEvent(loginBtn, 'click');
	});
});
