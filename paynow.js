whvutil.autoLoad(function(context){
	var cardnumberInput = document.getElementById("cardnumber");
	var verificationInput = document.getElementById("cardverificationcode");
	var expireMonthSelect = document.getElementById("expirymonth");
	var expireYearSelect = document.getElementById("expiryyear");
	var holderInput = document.getElementById("cardholder");

	cardnumberInput.value = context.creditcardnumber;
	verificationInput.value = context.creditcardcode;
	var expireDate = new Date(context.creditcardexpire);
	var m = expireDate.getMonth() + 1;
	m = m < 10 ? '0' + m : m;
	expireMonthSelect.value = m;
	expireYearSelect.value = expireDate.getFullYear();
	holderInput.value = context.cardholder;

	chrome.storage.sync.set({
		enableWhv: false
	}, function(){
		alert("Congratulations! You can click 'Pay now' to finish WHV application.");
	});
});
