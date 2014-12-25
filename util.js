
var whvutil = (function(){
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
			creditcardexpire: '2020/1/1',
			cardholder: 'Zhang San'
		};
	}
	function getEmptyContext(){
		var context = getContext();
		for(var name in context){
			context[name] = '';
		}
		return context;
	}
	function step(id, callback){
		chrome.storage.local.set({
			whvstep: id
		}, callback);
	}

	return {
		fireEvent: function(element, event){
			var evt;
			if(document.createEventObject){
				// dispatch for IE
				evt = document.createEventObject();
				return element.fireEvent('on' + event, evt);
			}else{
				// dispatch for firefox + others
				evt = document.createEvent("HTMLEvents");
				evt.initEvent(event, true, true ); // event type,bubbling,cancelable
				return !element.dispatchEvent(evt);
			}
		},
		autoLoad: function(callback){
			var context = getEmptyContext();
			context.enableWhv = false;
			chrome.storage.sync.get(context, function(args){
				if(args.enableWhv && callback(args)){
					var nextButton = document.getElementById("ctl00_ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_nextImageButton");
					var submitButton = document.getElementById("ctl00_ContentPlaceHolder1_wizardPageHeader_nav_submitImageButton");
					if(submitButton){
						whvutil.fireEvent(submitButton, 'click');
					}else if(nextButton){
						whvutil.fireEvent(nextButton, 'click');
					}
				}
			});
		},
		getContext: getContext,
		getEmptyContext: getEmptyContext,
		step: step
	};
})();
