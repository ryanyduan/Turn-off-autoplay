function disable(){
	var toggleBTN = document.querySelector("#improved-toggle");
	if (toggleBTN && toggleBTN.hasAttribute('checked')) toggleBTN.click();
}

setTimeout(disable, 10000);


