// SCRIPT JS - BENOIT DESMOTTES - FORMATION NIVEAU 1 - BLOC 1 //
// LE 16/11/2021 

// Fletching data
let M340_1 = document.getElementsByClassName("M340_1");
let M340_2 = document.getElementsByClassName("M340_2");
let M340_3 = document.getElementsByClassName("M340_3");
let M340_4 = document.getElementsByClassName("M340_4");
let M340_5 = document.getElementsByClassName("M340_5");
let M340_6 = document.getElementsByClassName("M340_6");
let M340_7 = document.getElementsByClassName("M340_7");
let M340_8 = document.getElementsByClassName("M340_8");
let M340_9 = document.getElementsByClassName("M340_9");
let M340_10 = document.getElementsByClassName("M340_10");

let txt_description = document.getElementsByClassName("txt-description");
let txt_title = document.getElementsByClassName("txt-title");

let requete = new XMLHttpRequest();

let list_text = ""

// Create requete
requete.open('GET', "./assets/data.json");
requete.responseType = 'json';
requete.send() // envoie
requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
        // requete 200 =>
        if (requete.status === 200) {
            list_text = requete.response;
            console.log(list_text);
        }
        else {
            alert("Il semblerait que le fichier data.json soit absent.");
        }
    }
}

// private function
function format_hover () {
    txt_description[0].style.color = "black";
    txt_description[0].style.fontSize = "1.5rem";
    txt_description[0].style.textAlign = "left";
}

function format_leave () {
    txt_description[0].style.color = "crimson";
    txt_description[0].style.fontSize = "2rem";
    txt_description[0].style.textAlign = "center";
    txt_title[0].innerHTML = "";
}



// Informations
M340_1[0].addEventListener("mouseover", function() {
    txt_title[0].innerHTML = list_text.M340_1.title;
    txt_description[0].innerHTML = list_text.M340_1.description;
    format_hover();
});

M340_2[0].addEventListener("mouseover", function() {
    txt_title[0].innerHTML = list_text.M340_2.title;
    txt_description[0].innerHTML = list_text.M340_2.description;
    format_hover();
});

M340_3[0].addEventListener("mouseover", function() {
    txt_title[0].innerHTML = list_text.M340_3.title;
    txt_description[0].innerHTML = list_text.M340_3.description;
    format_hover();
});

M340_4[0].addEventListener("mouseover", function() {
    txt_title[0].innerHTML = list_text.M340_4.title;
    txt_description[0].innerHTML = list_text.M340_4.description;
    format_hover();
});

M340_5[0].addEventListener("mouseover", function() {
    txt_title[0].innerHTML = list_text.M340_5.title;
    txt_description[0].innerHTML = list_text.M340_5.description;
    format_hover();
});

M340_6[0].addEventListener("mouseover", function() {
    txt_title[0].innerHTML = list_text.M340_6.title;
    txt_description[0].innerHTML = list_text.M340_6.description;
    format_hover();
});

M340_7[0].addEventListener("mouseover", function() {
    txt_title[0].innerHTML = list_text.M340_7.title;
    txt_description[0].innerHTML = list_text.M340_7.description;
    format_hover();
});

M340_8[0].addEventListener("mouseover", function() {
    txt_title[0].innerHTML = list_text.M340_8.title;
    txt_description[0].innerHTML = list_text.M340_8.description;
    format_hover();
});

M340_9[0].addEventListener("mouseover", function() {
    txt_title[0].innerHTML = list_text.M340_9.title;
    txt_description[0].innerHTML = list_text.M340_9.description;
    format_hover();
});

M340_10[0].addEventListener("mouseover", function() {
    txt_title[0].innerHTML = list_text.M340_10.title;
    txt_description[0].innerHTML = list_text.M340_10.description;
    format_hover();
});

// Disparition des informations
M340_1[0].addEventListener("mouseleave", function() {
    txt_description[0].innerHTML = "Survolez une image pour visualiser le contenu.";
    format_leave();
});

M340_2[0].addEventListener("mouseleave", function() {
    txt_description[0].innerHTML = "Survolez une image pour visualiser le contenu.";
    format_leave();
});

M340_3[0].addEventListener("mouseleave", function() {
    txt_description[0].innerHTML = "Survolez une image pour visualiser le contenu.";
    format_leave();
});

M340_4[0].addEventListener("mouseleave", function() {
    txt_description[0].innerHTML = "Survolez une image pour visualiser le contenu.";
    format_leave();
});

M340_5[0].addEventListener("mouseleave", function() {
    txt_description[0].innerHTML = "Survolez une image pour visualiser le contenu.";
    format_leave();
});

M340_6[0].addEventListener("mouseleave", function() {
    txt_description[0].innerHTML = "Survolez une image pour visualiser le contenu.";
    format_leave();
});

M340_7[0].addEventListener("mouseleave", function() {
    txt_description[0].innerHTML = "Survolez une image pour visualiser le contenu.";
    format_leave();
});


M340_8[0].addEventListener("mouseleave", function() {
    txt_description[0].innerHTML = "Survolez une image pour visualiser le contenu.";
    format_leave();
});


M340_9[0].addEventListener("mouseleave", function() {
    txt_description[0].innerHTML = "Survolez une image pour visualiser le contenu.";
    format_leave();
});


M340_10[0].addEventListener("mouseleave", function() {
    txt_description[0].innerHTML = "Survolez une image pour visualiser le contenu.";
    format_leave();
});




