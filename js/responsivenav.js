function responsiveNav(){
	
	var navclass = document.getElementById("myRnav");
	if (navclass.className === "top-nav") {
		
		navclass.className += " responsive";
	
	}
	
	else {
		
		navclass.className = "top-nav";
	
	}
	
}