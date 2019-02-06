


var nota_teoria=parseInt(prompt('Cúal es tu nota teorica'))
var nota_practica=parseInt(prompt('Cúal es tu nota practica'))




function media(nota_teoria,nota_practica) {
	final=(nota_teoria+nota_practica)/2 ; 
	return final;

}

minianxo=media(nota_teoria, nota_practica);

alert(minianxo);

document.write ('Tu nota media es: ' + minianxo)