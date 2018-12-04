document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.12.04.7";
var synth = window.speechSynthesis;

function afiseaza_voci()
{
	document.getElementById("id_voci").innerHTML = "";
	
	var lista_voci = synth.getVoices();
	
	for (var i = 0; i < lista_voci.length; i++)
		document.getElementById("id_voci").innerHTML +=
				lista_voci[i].lang + " " + lista_voci[i].name + "<br>";
}

function vorbeste()
{
	var enunt = new SpeechSynthesisUtterance();
	enunt.text = document.getElementById("id_text").value;
	enunt.lang = "it-IT";
	synth.speak(enunt);
}