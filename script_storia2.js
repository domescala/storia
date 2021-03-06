var imgArchLink = [
    "2012 - Norman Foster - Campus Einaudi - Torino - Contesto.jpg"
];
var imgDesLink = [
    "data- autore - opera - luogo, città - contesto .jpg"
];
var imgGrafLink = [
    "data- autore - opera - luogo, città - contesto .jpg"
];
var a1, a2, a3, i = 0;
var tempo_intro = 3000;
var larghezza_tasto_random = "175px";
animazione_manuale_introduzione()
function archFunction() {
    a1 = Math.floor(Math.random() * imgArchLink.length);
    document.getElementById("imgArch").src = "img2/Arch/" + imgArchLink[a1];
    document.getElementById("archButtonSpoiler").hidden = false;
    document.getElementById("archRandom").style.animation = "traslazione_random 1s ease forwards";
    document.getElementById( "archButtonSpoiler" ).style.animation = "opacity_on_spoiler 1s ease forwards";

    setTimeout(() => {
        
    document.getElementById("archRandom").innerHTML = "Nuova immagine";
    }, 800);

    document.getElementById("spoilerArch-tab").hidden = false;
    //reset della soluzione         
    document.getElementById("DataArch").innerHTML = "";
    document.getElementById("AutoreArch").innerHTML = "";
    document.getElementById("OperaArch").innerHTML = "";
    document.getElementById("LuogoArch").innerHTML = "";
    document.getElementById("ContestoArch").innerHTML = "";

    animazione_manuale_random("archRandom", 1000);
    animazione_manuale_spoiler( "archButtonSpoiler" , 1000);
}

function archFunctionSpoiler() {

    var wordspoiler = imgArchLink[a1].split('-');
    document.getElementById("DataArch").innerHTML = wordspoiler[0];
    document.getElementById("AutoreArch").innerHTML = wordspoiler[1];
    document.getElementById("OperaArch").innerHTML = wordspoiler[2];
    document.getElementById("LuogoArch").innerHTML = wordspoiler[3];
    document.getElementById("ContestoArch").innerHTML = wordspoiler[4].replace(".jpg", "");
}

// design
function desFunction() {
    a1 = Math.floor(Math.random() * imgDesLink.length);
    document.getElementById("imgDes").src = "img2/Des/" + imgDesLink[a1];
    document.getElementById("desButtonSpoiler").hidden = false;
    document.getElementById("desRandom").style.animation = "traslazione_random 1s ease forwards";
    document.getElementById( "desButtonSpoiler" ).style.animation = "opacity_on_spoiler 1s ease forwards";

    setTimeout(() => {
        
    document.getElementById("desRandom").innerHTML = "Nuova immagine";
    }, 800);

    document.getElementById("spoilerDes-tab").hidden = false;
    //reset della soluzione         
    document.getElementById("DataDes").innerHTML = "";
    document.getElementById("AutoreDes").innerHTML = "";
    document.getElementById("OperaDes").innerHTML = "";
    document.getElementById("LuogoDes").innerHTML = "";
    document.getElementById("ContestoDes").innerHTML = "";
    
    animazione_manuale_random("desRandom", 1000);
    animazione_manuale_spoiler( "desButtonSpoiler" , 1000);
}

function desFunctionSpoiler() {

    var wordspoiler = imgDesLink[a1].split('-');
    document.getElementById("DataDes").innerHTML = wordspoiler[0];
    document.getElementById("AutoreDes").innerHTML = wordspoiler[1];
    document.getElementById("OperaDes").innerHTML = wordspoiler[2];
    document.getElementById("LuogoDes").innerHTML = wordspoiler[3];
    document.getElementById("ContestoDes").innerHTML = wordspoiler[4].replace(".jpg", "");
}

// grafica
function grafFunction() {
    a1 = Math.floor(Math.random() * imgGrafLink.length);
    document.getElementById("imgGraf").src = "img2/Graf/" + imgGrafLink[a1];
    document.getElementById("grafButtonSpoiler").hidden = false;
    document.getElementById("grafRandom").style.animation = "traslazione_random 1s ease forwards";
    document.getElementById( "grafButtonSpoiler" ).style.animation = "opacity_on_spoiler 1s ease forwards";

    setTimeout(() => {
        
    document.getElementById("grafRandom").innerHTML = "Nuova immagine";
    }, 800);

    document.getElementById("spoilerGraf-tab").hidden = false;
    //reset della soluzione         
    document.getElementById("DataGraf").innerHTML = "";
    document.getElementById("AutoreGraf").innerHTML = "";
    document.getElementById("OperaGraf").innerHTML = "";
    document.getElementById("LuogoGraf").innerHTML = "";
    document.getElementById("ContestoGraf").innerHTML = "";

    
    animazione_manuale_random("grafRandom", 1000);
    animazione_manuale_spoiler( "grafButtonSpoiler" , 1000);
}

function grafFunctionSpoiler() {

    var wordspoiler = imgGrafLink[a1].split('-');
    document.getElementById("DataGraf").innerHTML = wordspoiler[0];
    document.getElementById("AutoreGraf").innerHTML = wordspoiler[1];
    document.getElementById("OperaGraf").innerHTML = wordspoiler[2];
    document.getElementById("LuogoGraf").innerHTML = wordspoiler[3];
    document.getElementById("ContestoGraf").innerHTML = wordspoiler[4].replace(".jpg", "");
}
function introduzione(){
    div_corpo.hidden = true;
    setTimeout(() => { div_corpo.hidden = false; }, tempo_intro);
}

function animazione_manuale_spoiler(nome_id, time){
    time = time + 100;
    setTimeout(() => {
    document.getElementById(nome_id).style.color = "rgb(37, 37, 37)";
    document.getElementById(nome_id).style.border = "2px rgb(37, 37, 37) solid";
    }, time);
}
function animazione_manuale_random(nome_id, time){
    time = time + 100;
    setTimeout(() => {
    document.getElementById(nome_id).style.marginLeft = "10px";
    document.getElementById(nome_id).style.width = larghezza_tasto_random;
    }, time);
}
    
function animazione_manuale_introduzione(){
    setTimeout(() => { 
        div_corpo.hidden = false; 
        document.getElementById(div_corpo).style.opacity = "1";
    }, tempo_intro);
}