function mudarHora() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  
	// var hora = 7
  msg.innerHTML = `agora são ${hora} horas`;
  if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = "img/manha.png";
    document.body.style.background = "pink";
  } else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src = "img/tarde.png";
    document.body.style.background = "orange";
  } else {
    //boa noite
    img.src = "img/noite.png";
    document.body.style.background = "brown";
  }
}
