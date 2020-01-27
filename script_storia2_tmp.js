var flag = 1;
var immagine = ""; 
var src_foto, src_soluzione = "";
var tempo_intro = 3000;
var larghezza_tasto_random = "175px";
var i = 1;
var n = new Array(0, 0);
var preload_fronte = new Image();
var preload_retro = new Image();
var frasi_donazione = [ 
    "Offrimi un caffè 😪",
    "Offrimi un caffè 😉",
    "Offrimi un caffè 😉",
    "Offrimi un caffè 😪",
    "Offrimi un caffè 😉",
    "Offrimi un caffè 😉",
    "DONA UN SOLDO AL TUO WITCHER",
    "Kaffèèè!1!?? 👴🏻",
    "Birretta? 🍻",
    "Coffee me ☕",
    "Dona il tuo 5x1000" ];

n[i] = Math.floor(Math.random() * 707) + 1;
preload_fronte.src = "storia2_tmp/Tavola disegno " + n[i] + ".jpg";
preload_retro.src = "storia2_tmp/Tavola disegno " + n[i] + " copia.jpg";

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

    n[i] = Math.floor(Math.random() * 707) + 1;
    preload_fronte.src = "storia2_tmp/Tavola disegno " + n[i] + ".jpg";
    preload_retro.src = "storia2_tmp/Tavola disegno " + n[i] + " copia.jpg";

    document.getElementById("Random").style.animation = "none";  
    setTimeout(() => {
        document.getElementById("Random").style.animation = "vibrate-1 0.3s linear 30s infinite";
        }, 1100);
    
    // solo una volta 
    if (flag == 1){
    document.getElementById("ButtonSpoiler").hidden = false;
    document.getElementById("Random").style.animation = "traslazione_random 1s ease forwards";
    document.getElementById( "ButtonSpoiler" ).style.animation = "opacity_on_spoiler 1s ease forwards";
    setTimeout(() => {
    document.getElementById("Random").innerHTML = "Nuova immagine";
    }, 800);
    animazione_manuale_spoiler();
    animazione_manuale_random();
    flag = 0;   
    
}

}

function FunctionSpoiler() {
    // img.hidden = true;
    // setTimeout(() => {
        document.getElementById("img").style.animation = "flip linear 0.5s forwards";
        // img.hidden = false;
    // }, 12);

    if (immagine == "foto") {
        
        
        setTimeout(() => {
            document.getElementById("img").src = src_soluzione;
            immagine = "soluzione";
            
        }, 150);
        document.getElementById("ButtonSpoiler").style.color = "rgb(255, 255, 255)";
        document.getElementById("ButtonSpoiler").style.backgroundColor = "rgb(37, 37, 37)";
    } 
    else {
        setTimeout(() => {
            document.getElementById("img").src = src_foto;  
            immagine = "foto";

        }, 150);
        document.getElementById("ButtonSpoiler").style.color = "rgb(37, 37, 37)";
        document.getElementById("ButtonSpoiler").style.backgroundColor = "rgba(37, 37, 37, 0)";
    }
    setTimeout(() => {
        document.getElementById("img").style.animation = "initial";
    }, 501);

}

function introduzione(){
    div_corpo.hidden = true;
    setTimeout(() => { div_corpo.hidden = false; }, tempo_intro);
    setTimeout(() => {   
        document.getElementById("donazione").innerHTML = frasi_donazione[Math.floor(Math.random() * frasi_donazione.length)];
        animazione_manuale_introduzione();
}, tempo_intro + 100);

}


function animazione_manuale_introduzione(){
        div_corpo.hidden = false;
        document.getElementById("div_corpo").style.opacity = "1";
        document.getElementById("intestazione2").style.animation = "rainbow_intestazione2 5s infinite 1s alternate";

}

function animazione_manuale_spoiler(){
    setTimeout(() => {
    document.getElementById("ButtonSpoiler").style.color = "rgb(37, 37, 37)";
    document.getElementById("ButtonSpoiler").style.border = "2px rgb(37, 37, 37) solid";
    document.getElementById("ButtonSpoiler").style.animation = "none";

    }, 1100);
}
function animazione_manuale_random(){
    setTimeout(() => {
    document.getElementById("Random").style.marginLeft = "10px";
    document.getElementById("Random").style.width = larghezza_tasto_random;
    }, 1100);
}
