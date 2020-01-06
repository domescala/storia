

function animazione() {
    var speed = 100;
    var j = 0;
    var i = 1;

var color = "#ffd37b";
var nocolor = "#fcfcfc";
    scrittaOFF();
    function scrittaOFF() {
        i = 1;
        while (i < 18) {
            document.getElementById("t" + i.toString()).style.fill = nocolor;
            i = i + 1;
        }
    }
    puntiOFF();
    function puntiOFF() {
        i = 1;
        while (i < 4) {
            document.getElementById("punto" + i.toString()).style.fill = nocolor;
            i = i + 1;
        }
    }
    i = 1;
    setTimeout(() => { scritta() }, 1500);
    function scritta() {

        
        if (i < 18) {
            document.getElementById("t" + i.toString()).style.fill = color;
            i++;
            setTimeout(() => { scritta() }, speed);
        }
        else {
            i = 0;
            setTimeout(() => { punti() }, speed);
        }
    }

    function punti()
        {
            setTimeout(() => {document.getElementById("punto1").style.fill = color;    }, 0);
            setTimeout(() => {document.getElementById("punto1").style.fill = nocolor;    }, 600);
            setTimeout(() => {document.getElementById("punto2").style.fill = color;    }, 500);
            
            setTimeout(() => {document.getElementById("punto2").style.fill = nocolor;    }, 1100);
        setTimeout(() => {document.getElementById("punto3").style.fill = color;   }, 1000);
        setTimeout(() => {document.getElementById("punto3").style.fill = nocolor;    }, 1600);
        setTimeout(() => {punti()  }, 1601);
        // i++;
        // if (i < 7){setTimeout(() => {punti()    }, 1700)}        
        //     else{
        //         setTimeout(() => {animazione()
            
        //         }, 1000);
        //     }
    }
        
        
        
    
        
}






// function scritta() {
//     var i = 0;
//     var speed = 100;
//     var color = "#000000";
//     while (i < 17) {
//         (function (i) {
//             setTimeout(function () { document.getElementById("t" + i.toString()).style.fill = color; }, speed * i);
//         })
//             (i = i + 1)
//     }
//     tempo = i * speed;
// }
// function punti() {
//     i = 0;
//     speed = 500;
//     color = "#000000";
//     while (i < 3) {
//         (function (i) {
//             setTimeout(function () { document.getElementById("punto" + i.toString()).style.fill = color; }, tempo + speed * i);
//         })
//             (i = i + 1)
//     }
//     tempo = i * speed;
// }

