/*---- variables ----*/
var num1=parseInt(prompt('Inserta primer número'))
var num2=parseInt(prompt('Inserta segundo número'))

/*---- Titulo ----*/
document.write ( '<h1> Tus calculos: </h1><br>' )

/*---- Calculos ----*/
document.write ( 'Suma:  ' + (num1 + num2) + '<br>')
document.write ( 'Resta:  ' + (num1 - num2) + '<br>')
document.write ( 'Multiplicación:  ' + (num1 * num2) + '<br>')





document.write ('<br><input type="button" value="Volver a jugar" onclick="location.reload()"/>')