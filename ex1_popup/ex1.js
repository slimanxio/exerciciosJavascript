/* 
	Código en JavaScript
	Nome do ficheiro: ex1.js
	Usado: prompt(), alert(),document.write(), confirm(), if-else
*/

// preguntamos un dato con prompt() e mostrámolo con alert()
var dato; //declaramos unha variable para gardar a resposta
dato = prompt('¿Como te llamas?');
alert('Un placer conocerte '+ dato);


// o navegador sabe HTML:
document.write('<img src="../logoAnxo.jpg" alt="Algo falla no logo" width="200" height="100">');
document.write('<h1>Bienvenidos al ex1.js!!</h1>'); // podemos inserir HTML
document.write('No tenemos ni idea, pero iremos aprendiendo algo'); //non fai caso dos saltos de liña
document.write('Podemos usar la etiqueta HTML br: <br>');
document.write('Funciona? Tambien podemos usar el maravilloso hr: <hr>');

// confirm() mostra cadro de diálogo OK ou Cancel:
var marchamos= confirm('Pasamos de este ejercio? ');

if(marchamos)
{
	document.write('<br> Holaaa!!.... '+ dato);
} 
else 
{
	document.write('<br> Vamos a seguir probando cosas, '+ dato);
}