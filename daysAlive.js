function getDaysAlive(){
	//todays date
	var currDate = new Date();
	//date of birth entered
	var birthDate = new Date(document.getElementById("dob").value);
	//calculating days you have been alive
	var Difference_In_Time = currDate.getTime() - birthDate.getTime(); 
	var Difference_In_Days = Difference_In_Time / (1000* 3600 *24);
	
	//displaying days alive.
	document.getElementById("results").innerHTML = "You have been alive for : " + Math.round(Difference_In_Days) + " days.";
}