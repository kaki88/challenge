//-----------------------------------------------------------------------------INITIALISATION
function init() {
    heros = ["heros"];
    heros_liste = ["heros_1","heros_2","heros_3","heros_4","heros_5"];
    armes = ["aucune", "aucune"];
    armes_cpu = ["armes_1", "armes_2", "armes_3", "armes_4", "armes_5", "armes_6", "armes_7"];
     background = ["WallStreet-City.gif", "Milan-City.gif", "Marseille.jpg" , "Japan-City.gif" ,"EREBOR-Ciity.gif"];
    niveau = 1;
    bt_reflechir = document.getElementById('reflechir');
    bt_coder = document.getElementById('coder');
    bt_manger = document.getElementById('manger');
    bt_dormir = document.getElementById('dormir');
    bt_perdu = document.getElementById('perdu');
            document.body.style.backgroundImage = "url('img/menu2.jpg')";
        document.body.style.backgroundSize = "100% 100vh";
    stage_1 = [];
    stage_1_cpu = [];
    stage_2 = [];
    stage_2_cpu = [];
    stage_3 = [];
    stage_3_cpu = [];
    stage_4 = [];
    stage_4_cpu = [];
}


//-----------------------------------------------------------------------------MELANGER TABLEAU
function melanger(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
//-----------------------------------------------------------------------------RETIRER ELEMENT TABLEAU
Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
//-----------------------------------------------------------------------------AFFICHER/CACHER
function select(non) {
    num = non ;
    heros_select = document.getElementById("heros_" +num).id;
    heros.shift();
    heros.push(heros_select);
   
    console.log(heros);
}

function valider_heros() {
    if (heros[0] == "heros") {
    }
    else {
        heros_liste.remove(heros[0]);
        console.log(heros_liste);
        document.getElementById('liste_armes').classList.remove('a_effacer');
    document.getElementById('liste_heros').classList.add('a_effacer');
        document.getElementById('ch_heros').classList.add('a_effacer');
        document.body.style.backgroundImage = "url('img/fond-arme.jpg')";
        document.body.style.backgroundSize = "100vh 100vh";
        document.getElementById('bouton_armes').classList.remove('a_effacer');
        }
}

function select_armes(non) {
    var armes_select = document.getElementById("armes_" + non).id;
    armes.shift();
    armes.push(armes_select);
    console.log(armes);
}

function valider_armes() {
     melanger(heros_liste);
    if (armes[0] == "aucune" || armes[1] == "aucune" || armes[0] == armes[1]) {
        /*document.getElementById('arme_diff').classList.remove('a_effacer');*/
    } else {
        document.getElementById('liste_armes').classList.add('a_effacer');
        document.getElementById('versus').removeAttribute("style");
        document.getElementById("chargement_"+heros[0]).classList.remove('a_effacer');
        document.getElementById("versus_"+heros_liste[0]).classList.remove('a_effacer');
        document.getElementById('bouton_armes').classList.add('a_effacer');
        melanger(armes_cpu);
        console.log(armes_cpu);
        melanger(background);
        console.log(background);   
        chargement();
       console.log(heros_liste);
    }
}
//-----------------------------------------------------------------------------CHARGEMENT
        
function chargement() {
 puissance();
    setTimeout(function () {
        document.getElementById("versus_"+heros_liste[0]).classList.add('a_effacer');
        document.getElementById("cpu_"+heros_liste[0]).classList.remove('a_effacer');
       document.getElementById('versus').style.display = "none";
        document.getElementById('combat').classList.remove('a_effacer');
        document.getElementById("combat_"+heros[0]).classList.remove('a_effacer');
        document.getElementById('total_arme_cpu').innerHTML="Puissance arme : "+(weapon_1_cpu + weapon_2_cpu);
        document.getElementById('total_arme_joueur').innerHTML="Puissance arme : "+(weapon_1+ weapon_2); 
//-----------------------------------------------------------------------------ARMES/FOND ALEATOIRE
        var url = 'img/';
        document.body.style.backgroundImage = 'url('+ url + background[0] + ')';
        document.body.style.backgroundSize = "100% 100vh";
        background.shift();
        console.log(background);
        melanger(armes_cpu);
        console.log(armes_cpu);
    }, 2000);
}


//-----------------------------------------------------------------------------PUISSANCE ARMES
function puissance(){
     var arm1 = armes[0];
    var arm2 = armes[1];
    var arm1_cpu = armes_cpu[0];
    var arm2_cpu = armes_cpu[1];
    switch (arm1) {
    case "armes_1":
        weapon_1 = 4;
        break;
    case "armes_2":
        weapon_1 = 5;
        break;
    case "armes_3":
        weapon_1 = 1;
        break;
    case "armes_4":
        weapon_1 = 6;
        break;
    case "armes_5":
        weapon_1 = 10;
        break;
    case "armes_6":
        weapon_1 = 3;
        break;
    case "armes_7":
        weapon_1 = 8;
        break;
    }
    switch (arm2) {
    case "armes_1":
        weapon_2 = 4;
        break;
    case "armes_2":
         weapon_2 = 5;
        break;
    case "armes_3":
         weapon_2 = 1;
        break;
    case "armes_4":
         weapon_2 = 6;
        break;
    case "armes_5":
       weapon_2 = 10;
        break;
    case "armes_6":
         weapon_2 = 3;
        break;
    case "armes_7":
         weapon_2 = 8;
        break;
    }
    switch (arm1_cpu) {
    case "armes_1":
        weapon_1_cpu = 4;
        break;
    case "armes_2":
        weapon_1_cpu = 5;
        break;
    case "armes_3":
         weapon_1_cpu = 1;
        break;
    case "armes_4":
         weapon_1_cpu = 6;
        break;
    case "armes_5":
         weapon_1_cpu = 10;
        break;
    case "armes_6":
         weapon_1_cpu = 3;
        break;
    case "armes_7":
         weapon_1_cpu = 8;
        break;
    }
    switch (arm2_cpu) {
    case "armes_1":
         weapon_2_cpu = 4;
        break;
    case "armes_2":
         weapon_2_cpu = 5;
        break;
    case "armes_3":
         weapon_2_cpu = 1;
        break;
    case "armes_4":
         weapon_2_cpu = 6;
        break;
    case "armes_5":
         weapon_2_cpu = 10;
        break;
    case "armes_6":
         weapon_2_cpu = 3;
        break;
    case "armes_7":
         weapon_2_cpu = 8;
        break;
    }
}
//-----------------------------------------------------------------------------15 CLICS
function reflechir() {
    debut = +new Date();
    bt_coder.setAttribute("onClick", "coder()");
    bt_reflechir.removeAttribute("onclick");
    bt_coder.style.backgroundColor = "green";
     bt_reflechir.classList.remove('vert');
}

function coder() {
    bt_manger.setAttribute("onClick", "manger()");
    bt_coder.removeAttribute("onclick");
    bt_manger.style.backgroundColor = "green";
    bt_coder.style.backgroundColor = "";
}

function manger() {
    bt_coder.setAttribute("onClick", "coder2()");
    bt_manger.removeAttribute("onclick");
     bt_coder.style.backgroundColor = "green";
       bt_manger.style.backgroundColor = "";
}

function coder2() {
    bt_dormir.setAttribute("onClick", "dormir()");
    bt_coder.removeAttribute("onclick");
     bt_dormir.style.backgroundColor = "green";
    bt_coder.style.backgroundColor = "";
}

function dormir() {
    bt_reflechir.setAttribute("onClick", "reflechir_2()");
    bt_dormir.removeAttribute("onclick");
     bt_reflechir.style.backgroundColor = "green";
    bt_dormir.style.backgroundColor = "";
}

function reflechir_2() {
    bt_coder.setAttribute("onClick", "coder1_2()");
    bt_reflechir.removeAttribute("onclick");
     bt_coder.style.backgroundColor = "green";
    bt_reflechir.style.backgroundColor = "";
}

function coder1_2() {
    bt_manger.setAttribute("onClick", "manger_2()");
    bt_coder.removeAttribute("onclick");
     bt_manger.style.backgroundColor = "green";
    bt_coder.style.backgroundColor = "";
}

function manger_2() {
    bt_coder.setAttribute("onClick", "coder2_2()");
    bt_manger.removeAttribute("onclick");
     bt_coder.style.backgroundColor = "green";
    bt_manger.style.backgroundColor = "";
}

function coder2_2() {
    bt_dormir.setAttribute("onClick", "dormir_2()");
    bt_coder.removeAttribute("onclick");
     bt_dormir.style.backgroundColor = "green";
    bt_coder.style.backgroundColor = "";
}

function dormir_2() {
    bt_reflechir.setAttribute("onClick", "reflechir_3()");
    bt_dormir.removeAttribute("onclick");
     bt_reflechir.style.backgroundColor = "green";
    bt_dormir.style.backgroundColor = "";
}

function reflechir_3() {
    bt_coder.setAttribute("onClick", "coder1_3()");
    bt_reflechir.removeAttribute("onclick");
     bt_coder.style.backgroundColor = "green";
    bt_reflechir.style.backgroundColor = "";
}

function coder1_3() {
    bt_manger.setAttribute("onClick", "manger_3()");
    bt_coder.removeAttribute("onclick");
     bt_manger.style.backgroundColor = "green";
    bt_coder.style.backgroundColor = "";
}

function manger_3() {
    bt_coder.setAttribute("onClick", "coder2_3()");
    bt_manger.removeAttribute("onclick");
     bt_coder.style.backgroundColor = "green";
    bt_manger.style.backgroundColor = "";
}

function coder2_3() {
    bt_dormir.setAttribute("onClick", "dormir_3()");
    bt_coder.removeAttribute("onclick");
     bt_dormir.style.backgroundColor = "green";
    bt_coder.style.backgroundColor = "";
}

function dormir_3() {
    bt_dormir.removeAttribute("onclick");
    bt_reflechir.setAttribute("onClick", "reflechir()");
    bt_dormir.style.backgroundColor = "";
    fin = +new Date();
    score_temps = fin - debut;
    calcul_des_points();
}
//-----------------------------------------------------------------------------VALEUR ARMES
function calcul_des_points() {
//-----------------------------------------------------------------------------CALCUL SCORE
    document.getElementById('score').classList.remove('a_effacer');
    score_cpu = (weapon_1_cpu + weapon_2_cpu) * 7500;
    document.getElementById('score_cpu').innerHTML = 'cpu :<br/>' + score_cpu;
    score_joueur = (weapon_1 + weapon_2) * (15000 - score_temps);
    if (score_joueur < 0) score_joueur = 0;
    document.getElementById('score_j1').innerHTML = 'joueur :<br/>' + score_joueur;
    console.log("arme 1 du joueur =", weapon_1, "arme 2 du joueur =", weapon_2);
    console.log("temps pour les 15 clics :", score_temps, "millisecondes");
    console.log("arme 1 du cpu =", weapon_1_cpu, "arme 2 du cpu =", weapon_2_cpu);
    if (score_joueur < score_cpu) {
        bt_perdu.classList.remove('a_effacer');
    } else {
        
        document.getElementById('gagne').classList.remove('a_effacer');
        document.getElementById('msg_gagne').innerHTML = 'Stage '+niveau+' terminé'
        
    }
}
//-----------------------------------------------------------------------------STAGE SUIVANT
function next(){
    
    if (niveau == 1) {
    stage_1.push(score_joueur);
    stage_1_cpu.push(score_cpu);
    }
     if (niveau == 2) {
    stage_2.push(score_joueur);
    stage_2_cpu.push(score_cpu);
    }
     if (niveau == 3) {
    stage_3.push(score_joueur);
    stage_3_cpu.push(score_cpu);
    }
     if (niveau == 4) {
    stage_4.push(score_joueur);
    stage_4_cpu.push(score_cpu);
    }
        
    niveau++;
    if (niveau < 5) {
    if (score_joueur < score_cpu) {
    bt_perdu.classList.add('a_effacer');
      } else {
    document.getElementById('gagne').classList.add('a_effacer');      
    } 
    document.getElementById('score').classList.add('a_effacer');
    document.getElementById('combat').classList.add('a_effacer');
    chargement();
    document.getElementById('versus').classList.remove('a_effacer');
    console.log(niveau);
        
        
        document.getElementById("cpu_"+heros_liste[0]).classList.add('a_effacer');
             heros_liste.shift();
           document.getElementById("chargement_"+heros[0]).classList.remove('a_effacer');
        document.getElementById("versus_"+heros_liste[0]).classList.remove('a_effacer');
        console.log(heros_liste);
        console.log(heros_liste.indexOf(heros_liste[0]))
        console.log("index",heros_liste[0]);
        }
//-----------------------------------------------------------------------------FIN DE PARTIE
    else {
         if (score_joueur < score_cpu) {
    bt_perdu.classList.add('a_effacer');
      } else {
    document.getElementById('gagne').classList.add('a_effacer');     
    } 
    document.getElementById('score').classList.add('a_effacer');
    document.getElementById('combat').classList.add('a_effacer');
    document.getElementById('credit').classList.remove('a_effacer');
        document.body.style.backgroundImage = "url('img/fin.png')";
        document.body.style.backgroundSize = "100vh 100vh";
    console.log(niveau);
        
        
        document.getElementById('stage1').innerHTML = stage_1[0];
        document.getElementById('stage1cpu').innerHTML = stage_1_cpu[0];
        document.getElementById('stage2').innerHTML = stage_2[0];
        document.getElementById('stage2cpu').innerHTML = stage_2_cpu[0];
        document.getElementById('stage3').innerHTML = stage_3[0];
        document.getElementById('stage3cpu').innerHTML = stage_3_cpu[0];
        document.getElementById('stage4').innerHTML = stage_4[0];
        document.getElementById('stage4cpu').innerHTML = stage_4_cpu[0];
        
    
        }   
    }

//-----------------------------------------------------------------------------REJOUER
function rejouer(){
location.reload();   
}


//-----------------------------------------------------------------------------BOUTON
function zik() {
    if (armes[0] == "aucune" || armes[1] == "aucune" || armes[0] == armes[1]) {
    }
    else {
        document.getElementsByTagName('audio')[0].play();
    }
}

function memorise1() {
        document.getElementById('armes_1').classList.toggle('memorise_arme');
}
function memorise2() {
        document.getElementById('armes_2').classList.toggle('memorise_arme');
}
function memorise3() {
        document.getElementById('armes_3').classList.toggle('memorise_arme');
}
function memorise4() {
        document.getElementById('armes_4').classList.toggle('memorise_arme');
}
function memorise5() {
        document.getElementById('armes_5').classList.toggle('memorise_arme');
}
function memorise6() {
        document.getElementById('armes_6').classList.toggle('memorise_arme');
}
function memorise7() {
        document.getElementById('armes_7').classList.toggle('memorise_arme');
}

 