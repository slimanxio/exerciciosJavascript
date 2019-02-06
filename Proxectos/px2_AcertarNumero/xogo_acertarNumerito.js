
// xenera un número aleatorio menor ca 1
var misterio = Math.random();

// o número será menor ca 10
misterio = misterio*10;

//redondeo para non ter decimais
misterio = Math.round(misterio)


//var escolle = prompt('Cal é  o número misterioso menor ca 10? ')


//exercicio 2
var escolle = prompt('Cal é  o número misterioso menor ca 10? ')

while (escolle != misterio)

	

//Numero random y numero escogido

document.write('Misterio -->' + misterio + '<br>');

document.write('Escogido -->' + escolle + '<br><br>');

//Mayor o menor

if (misterio < escolle) {

	document.write ('El numero misterioso es menor que el escogido')
}

if (misterio > escolle) {

	document.write ('El numero misterioso es mayor que el escogido')
}


//Mensaje FINAL

if (escolle == misterio)
{
	document.write ('<br><br>' + '<h1> You WIIIN <h1>')
}
else
{
	document.write ('<br><br>' + '<h1> Game over </h1>')
}

