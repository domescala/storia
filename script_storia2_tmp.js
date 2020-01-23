
var n = 0;
var immagine = ""; 
var src_foto, src_soluzione = "";
var tempo_intro = 3000;
var larghezza_tasto_random = "175px";

function FunctionRandom() {
    n = Math.floor(Math.random() * 707);
    n = n+1;
    
    src_foto = "storia2_tmp/Tavola disegno " + n + ".jpg";
    src_soluzione = "storia2_tmp/Tavola disegno " + n + " copia.jpg";
    img.hidden = true;    
    document.getElementById("img").src = src_foto;
    setTimeout(() => {
        img.hidden = false;
        document.getElementById("img").style.animation = "opacity_on 0.75s ease forwards";
        
    }, 100);
    document.getElementById("ButtonSpoiler").hidden = false;
    document.getElementById("Random").style.animation = "traslazione_random 1s ease forwards";
    document.getElementById( "ButtonSpoiler" ).style.animation = "opacity_on_spoiler 1s ease forwards";
   
    setTimeout(() => {
    
    immagine = "foto";
    document.getElementById("Random").innerHTML = "Nuova immagine";
    }, 800);
    animazione_manuale_spoiler();
    animazione_manuale_random();

}

function FunctionSpoiler() {
    document.getElementById( "ButtonSpoiler" ).style.animation = "unset";

    if (immagine == "foto") {
        img.hidden = true;
        document.getElementById("img").src = src_soluzione;
        setTimeout(() => {
            img.hidden = false;
            document.getElementById("img").style.animation = "flip cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s forwards";
            immagine = "soluzione";
        }, 100);

    } else {
        img.hidden = true;
        document.getElementById("img").src = src_foto;  
        setTimeout(() => {
            img.hidden = false;
            document.getElementById("img").style.animation = "flip cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s forwards";
            immagine = "foto";
        }, 100);
    }

}

function introduzione(){
    div_corpo.hidden = true;
    setTimeout(() => { div_corpo.hidden = false; }, tempo_intro);
    setTimeout(() => { 
    
    animazione_manuale_introduzione();
}, tempo_intro + 100);

}


function animazione_manuale_introduzione(){
        div_corpo.hidden = false;
        document.getElementById(div_corpo).style.opacity = "1";
}

function animazione_manuale_spoiler(){
    setTimeout(() => {
    document.getElementById("ButtonSpoiler").style.color = "rgb(37, 37, 37)";
    document.getElementById("ButtonSpoiler").style.border = "2px rgb(37, 37, 37) solid";
    }, 1100);
}
function animazione_manuale_random(){
    setTimeout(() => {
    document.getElementById("Random").style.marginLeft = "10px";
    document.getElementById("Random").style.width = larghezza_tasto_random;
    }, 1100);
}