/*----------- Empiezar -----------*/
var bigNumber = Number.MAX_VALUE * 2;
if (bigNumber === Number.POSITIVE_INFINITY) {
 bigNumber = returnFinite();
}


document.write('<h3>☞Contar de -7 a casi 700</h3>');
for (var i=-7; i<= bigNumber; i=i+100) {
	document.write(i + ', ');
}