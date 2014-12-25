window.onload = function(){


	function init(){
		chrome.storage.sync.get(whvutil.getEmptyContext(), function(context){
			for(var name in context){
				var input = document.getElementById(name);
				if(input.getAttribute('data-type') === 'date'){
					var d = new Date(context[name]);
					if(isNaN(d.getTime())){
						input.value = '';
					}else{
						input.value = [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('/');
					}
				}else{
					input.value = context[name];
				}
			}
		});
	}

	window.saveContext = function(){
		var context = whvutil.getContext();
		for(var name in context){
			var input = document.getElementById(name);
			var v = input.value;
			if(input.getAttribute('data-type') === 'date'){
				var d = new Date(v);
				if(isNaN(d.getTime())){
					context[name] = '';
				}else{
					context[name] = [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('/');
				}
			}else{
				context[name] = v || '';
			}
		}
		chrome.storage.sync.set(context, function(){
			init();
			alert('saved');
		});
	};

	window.showSample = function(){
		chrome.storage.sync.set(whvutil.getContext(), function(){
			init();
		});
	};

	window.clearContext = function(){
		chrome.storage.sync.set(whvutil.getEmptyContext(), function(){
			init();
		});
	};

	document.getElementById('savebtn').addEventListener('click', saveContext);
	document.getElementById('clearbtn').addEventListener('click', clearContext);
	document.getElementById('samplebtn').addEventListener('click', showSample);
	init();
};

