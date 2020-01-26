
var a = 0;
var i = 1;
var n = new Array(0, 0);
n[i] = Math.floor(Math.random() * 707) + 1;
var preload_fronte = new Image();
var preload_retro = new Image();
preload_fronte.src = "storia2_tmp/Tavola disegno " + n[i] + ".jpg";
preload_retro.src = "storia2_tmp/Tavola disegno " + n[i] + " copia.jpg";
var n2, n3= 0;
var immagine = ""; 
var src_foto, src_soluzione = "";
var tempo_intro = 3000;
var larghezza_tasto_random = "175px";

function FunctionRandom() {
     
    src_foto = preload_fronte.src;
    src_soluzione = preload_retro.src;
    img.hidden = true;    
    document.getElementById("img").src = src_foto;
    setTimeout(() => {
        img.hidden = false;
        document.getElementById("img").style.animation = "opacity_on 0.75s ease forwards";
        
    }, 100);
    immagine = "foto";
    
    i = 1 - i ; // i diventa 1 se era 0 e diventa 0 se era 1

    nrandom[i] = Math.floor(Math.random() * 707) + 1;
    preload_fronte.src = "storia2_tmp/Tavola disegno " + n[i] + ".jpg";
    preload_retro.src = "storia2_tmp/Tavola disegno " + n[i] + " copia.jpg";


    // solo una volta 
    document.getElementById("ButtonSpoiler").hidden = false;
    document.getElementById("Random").style.animation = "traslazione_random 1s ease forwards";
    document.getElementById( "ButtonSpoiler" ).style.animation = "opacity_on_spoiler 1s ease forwards";
    setTimeout(() => {
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

    