/* 
	Código en JavaScript
	Nome do ficheiro: ex2.js
	Usado: parseInt(), Math.random(), Math.round()
*/

document.write('<img src="../logoAnxo.jpg" alt="Algo falla no logo">');
document.write('<h1> Hoja de calculadora .css </h1>')

// as variables decláranse
var num1; 
var num2;

// pregunto o valor ó usuario; Javscript considéraos caracteres, non números
num1 = prompt('¿Primer número? ');
num2 = prompt('¿Segundo número? ');

// convertimos a números
var solucionado = parseInt(num1)+parseInt(num2);
document.write('La suma de los numeros que me has dado es: '+ solucionado);

// fallos nos cálculos
var num3 = 0;
document.write('<br> <hr>El resutado de tu suma entre 0 será...'+ solucionado/num3); // opsssss


document.write('<hr><h3>Javascript busca un número entre 0 e 5</h3>');

var misterio = Math.random();
document.write('<br>Xenero un número aleatorio menor ca un: '+ misterio);

//olliño con este truquito para non crear máis variables
misterio = misterio*5;
document.write('<br> Agora está entre 0 e 5: '+ misterio);

//olliño con este truquito para non crear máis variables (outra vez)
misterio = Math.round(misterio)
document.write('<br> Redondeo para no andar con decimales '+ misterio);