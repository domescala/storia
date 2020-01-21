
var n, a2, a3, i = 0;

var tempo_intro = 3000;
animazione_manuale_introduzione()
function FunctionRandom() {
    n = Math.floor(Math.random() * 707);
    n = n+1;
    nome_foto = "storia2_tmp/Tavola disegno " + n + ".jpg";
    nome_foto_soluzione = "storia2_tmp/Tavola disegno " + n + " copia.jpg";
    document.getElementById("img").src = nome_foto;
    document.getElementById("ButtonSpoiler").hidden = false;
    document.getElementById("Random").style.animation = "traslazione_random 1s ease forwards";
    document.getElementById( "ButtonSpoiler" ).style.animation = "opacity_on_spoiler 1s ease forwards";
   setTimeout(() => {
        
    document.getElementById("Random").innerHTML = "Nuova immagine";
    }, 800);

}

function FunctionSpoiler() {
    document.getElementById("img").src = nome_foto_soluzione;

}
function introduzione(){
    div_corpo.hidden = true;
    setTimeout(() => { div_corpo.hidden = false; }, tempo_intro);
}


function animazione_manuale_introduzione(){
    setTimeout(() => { 
        div_corpo.hidden = false; 
        document.getElementById(div_corpo).style.opacity = "1";
    }, tempo_intro);
}