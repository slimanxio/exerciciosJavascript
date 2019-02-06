/*---- variables ----*/

var km = prompt('¿Cuantos kilometros?');



/*---- funciones ----*/

function kilometros (km) {

m = km*1000;
return m;

}


/*---- alertas ----*/

resp_km = kilometros (km)

alert (km +' kilometros son ' + resp_km + ' metros');
document.write (km +' km son '+ resp_km +' metros');

