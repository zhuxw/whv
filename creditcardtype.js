whvutil.autoLoad(function(context){
	var masterButton = document.getElementById("card_type_MASTERCARD");
	var visaButton = document.getElementById("card_type_VISA");

	var btn = context.cardtype === 'master' ? masterButton : visaButton;
	whvutil.fireEvent(btn, 'click');
});

