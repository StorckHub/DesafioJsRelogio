function carregar() {
  var msg = window.document.getElementById("msg"); // puxa a div que apresenta a hora para o js
  var img = window.document.getElementById("imagem"); //puxa a div que mostra a imagem para o js
  var data = new Date();
  var hora = data.getHours(); // puxa a hora do seu pc
  var mim = data.getMinutes(); // puxa os minutos do seu pc
  mim = mim > 9 ? mim : "0" + mim; //serve para adicionar o digito 0 nos minutos de 01 a 09

  msg.innerHTML = `${hora}:${mim}`; //exibe as horas e minutos do seu pc
  if (hora >= 0 && hora <= 12) {
    // se for entre meia noite e meio dia, altera a imagem e a cor do fundo para manha
    img.src = "manha.png";
    //Manha
    document.body.style.background = "#0F75B9";
  } else if (hora >= 12 && hora <= 18) {
    // se for entre meio dia e seis horas altera a imagem e fundo para tarde
    //Tarde
    img.src = "tarde.png";
    document.body.style.background = "#f4b97c";
  } else {
    // se não for nem manha ou tarde altera imagem e fundo para noite
    //Noite
    img.src = "noite.png";
    document.body.style.background = "#13436c";
  }
}
