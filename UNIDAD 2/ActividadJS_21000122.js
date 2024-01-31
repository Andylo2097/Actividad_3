var mes_nacimiento = prompt("Cual es tu mes de nacimiento?");
var dia_nacimiento = prompt("Cual es tu dia de nacimiento?");

var mes_nacimiento = parseInt(mes_nacimiento);
var dia_nacimiento = parseInt(dia_nacimiento);

switch(mes_nacimiento){
  case 1:
    if (dia_nacimiento <= 20){
      
      alert("Eres Capricornio");
    }else{
      alert("Eres Acuario");
    }
    break;
    
  case 2:
    if (dia_nacimiento <= 19){
      alert("Eres Acuario");
    }else{
      alert("Eres Piscis");
    }
    break;
    
  case 3:
    if (dia_nacimiento <= 20){
        alert("Eres Piscis");
    }else{
        alert("Eres Aries");
    }
    break;

  case 4:
    if (dia_nacimiento <= 20){
        alert("Eres Aries");
    }else{
        alert("Eres Tauro");
    }
    break;

  case 5:
    if (dia_nacimiento <= 20){
        alert("Eres Tauro");
    }else{
        alert("Eres Geminis");
    }
    break;

  case 6:
    if (dia_nacimiento >= 20){
        alert("Eres Geminis");
    }else{
        alert("Eres Cancer");
    }
    break;

  case 7:
    if (dia_nacimiento <=22){
        alert("Eres Cancer");
    }else{
        alert("Eres Leo");
    }
    break;

  case 8:
    if (dia_nacimiento <= 23){
        alert("Eres Leo");
    }else{
        alert("Eres Virgo");
    }
    break;

  case 9:
    if (dia_nacimiento <= 22){
        alert("Eres Virgo");
    }else{
        alert("Eres Libra");
    }
    break;

  case 10:
    if (dia_nacimiento <= 23){
        alert("Eres Libra");
    }else{
        alert("Eres Escorpio");
    }
    break;

  case 11:
    if (dia_nacimiento <= 22){
        alert("Eres Escorpio");
    }else{
        alert("Sagitario");
    }
    break;

  case 12:
    if (dia_nacimiento <= 21){
        alert("Eres Sagitario");
    }else{
        alert("Capricornio");
    }
    break;

  default:
    alert("Mes incorrecto");
    break;
}