window.onload = function(){
	var enabledCheck = document.getElementById('enableWhv');
	chrome.storage.sync.get({
		enableWhv: false
	}, function(args){
		enabledCheck.value = args.enableWhv;
	});
	enabledCheck.addEventListener('change', function(){
		chrome.storage.sync.set({
			enableWhv: enabledCheck.checked
		});
	});
	var applyBtn = document.getElementById('applyBtn');
	applyBtn.addEventListener('click', function(){
		chrome.tabs.create({
			url: 'http://www.immigration.govt.nz/migrant/default.htm',
			active: true
		});
	});
};
