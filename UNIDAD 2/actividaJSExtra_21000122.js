var computadora = 0;
var usuario = 0;
var carta = 0;

for(var contador = 0; contador < 2; contador++){
    carta = Math.ceil(Math.random()*11);
    computadora = computadora + carta;
}

for(var contador = 0; contador < 2; contador++){ 
    carta = Math.ceil(Math.random()*11);
    usuario = usuario + carta;
}

alert("Actualmente el valor de tus cartas suma " + usuario);
var respuesta = prompt("¿Deseas otra carta? 'si' si deseas otra carta 'no' para terminar partida");

//noprotect
while(respuesta != "no"){
    if(computadora == 21 && usuario == 21){
        var respuesta = "no";
        alert("EMPATE!!");
    }else if(computadora == 21){
        var respuesta = "no";
        alert("Lastima has perdido, computadora ganadora! con un resultado de " + computadora);
    }else if(usuario == 21){
        var respuesta = "no";
        alert("Enhorabuena, has ganado! con un resultado de " + usuario);
    }else if(computadora > 21){
        var respuesta = "no";
        alert("Enhorabuena, le has ganado a la computadora! con un resultado de " + usuario);
    }else if(usuario > 21){
        var respuesta = "no";
        alert("Lastimas, tu total ha sido de " + usuario + " suerte para la proxima");
    }else{ 
        carta = Math.ceil(Math.random()*11);
        computadora = computadora + carta;

        carta = Math.ceil(Math.random()*11);
        usuario = usuario + carta;
        alert("Su nueva carta vale " + carta + " su total es " + usuario);
        if(usuario > 21){
          var respuesta = "no";
          alert("lastima, te has pasado de 21, has perdido");
        }else{
          var respuesta = prompt("¿Deseas otra carta? 'si' si deseas otra carta 'no' para terminar partida");
        }
    }
 }

alert("La computadora tiene " + computadora + " cartas");
alert("El usuario tiene " + usuario + " cartas");

if(computadora == 21 && usuario == 21){
  alert("empateee!");
}

if(usuario > computadora && usuario <= 21){
  alert("enhorabuena, ha ganado!");
}else if((computadora > usuario && computadora <= 21) || usuario > 21){
  alert("lastima, has perdido");
}
