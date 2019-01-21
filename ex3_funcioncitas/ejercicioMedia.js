var nota_teoria=parseInt(prompt('Cúal es ru nota teorica'))
var nota_practica=parseInt(prompt('Cúal es ru nota practica'))




function media(nota_teoria,nota_practica) {
	final=(nota_teoria+nota_practica)/2 ; 
	return final;

}

minianxo=media(nota_teoria, nota_practica);

alert(minianxo);