window.onload = function(){
	var enabledCheck = document.getElementById('enableWhv');
	var retryCheck = document.getElementById('retry');
	var applyBtn = document.getElementById('applyBtn');

	chrome.storage.sync.get({
		enableWhv: false,
		retry: false
	}, function(args){
		enabledCheck.checked = !!args.enableWhv;
		retryCheck.checked = !!args.retry;
	});

	enabledCheck.addEventListener('change', function(){
		chrome.storage.sync.set({
			enableWhv: enabledCheck.checked
		});
	});
	retryCheck.addEventListener('change', function(){
		chrome.storage.sync.set({
			retry: retryCheck.checked
		});
	});

	applyBtn.addEventListener('click', function(){
		chrome.storage.local.set({
			whvstep: 0
		}, function(){
			chrome.tabs.create({
				url: 'http://www.immigration.govt.nz/migrant/default.htm',
				active: true
			});
		});
	});
};
