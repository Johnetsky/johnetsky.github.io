var CounterIMG = 0;
var other=0;
function ChangeImage() {
	
	if(CounterIMG == 0)
{
	document.getElementById("MyImage").src = "/PICS/MySelf2.jpg";  
	document.getElementById("ChangeButton").innerHTML = "Change to my business self.";
	CounterIMG = 1;
}
	else
{
	document.getElementById("MyImage").src = "/PICS/MySelf.jpg";
	document.getElementById("ChangeButton").innerHTML = "Change to my casual self.";
	CounterIMG = 0;
}
}
