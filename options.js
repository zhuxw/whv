window.onload = function(){

	function getContext(){
		return {
			loginname: 'ccschen',
			loginpwd: 'Passw0rd',
			country: 214,
			familyname: 'Chen',
			givenname: 'Chunsen',
			gender: 'F',
			birthday: '1984/12/21',
			streetname: 'abc',
			city: 'New York',
			email: 'zhuxw1984@163.com',
			passportnumber: '12345678',
			passportexpire: '2020/1/1',
			idcarddate: '2014/1/1',
			traveldate: '2015/7/1',
			payername: 'Zhang San',
			cardtype: 'master',
			creditcardnumber: '12345678',
			creditcardcode: '789',
			creditcardexpire: '2020/1/1'
		};
	}

	function getEmptyContext(){
		var context = getContext();
		for(var name in context){
			context[name] = '';
		}
		return context;
	}

	function init(){
		chrome.storage.sync.get(getEmptyContext(), function(context){
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
		var context = getContext();
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
		chrome.storage.sync.set(getContext(), function(){
			init();
		});
	};

	window.clearContext = function(){
		chrome.storage.sync.set(getEmptyContext(), function(){
			init();
		});
	};

	document.getElementById('savebtn').addEventListener('click', saveContext);
	document.getElementById('clearbtn').addEventListener('click', clearContext);
	document.getElementById('samplebtn').addEventListener('click', showSample);
	init();
};

