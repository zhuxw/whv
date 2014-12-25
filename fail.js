whvutil.autoLoad(function(){
	chrome.storage.local.get({
		whvstep: 0,
		retry: false
	}, function(args){
		if(args.whvstep === 1){
			if(args.retry){
				whvutil.step(0, function(){
					window.location = "https://www.immigration.govt.nz/secure/Login+Working+Holiday.htm";
				});
			}else{
				alert('WHV not available yet!');
			}
		}
	});
});
