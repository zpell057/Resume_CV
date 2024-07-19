document.getElementById('SwitchLang').addEventListener('click', function() {
    switchLanguage();
});
const en={
    "Studies":"BASc Electrical Engineering and BSc Computing Technology student",
    "SwitchLang": "FR",
    "TitleProjects":"Projects",
    "PersoProjMenu":"Personal projects",
    "CoopProjMenu":"Cooperative projects",
    "CEGProj":"Final CÉGEP project",
    "Model":"3D modeling",
    "Creal":"Creation club",
    "GameinWatch":"Game & Watch-type game",
    "vga":"VGA animation using "
}
const fr={
    "Studies":"Étudiant en B.Sc.A. Génie électrique et B.Sc. Technologie de l'informatique",
    "SwitchLang": "EN",
    "TitleProjects":"Projets",
    "PersoProjMenu":"Projets personnels",
    "CoopProjMenu":"Projets coopératifs",
    "CEGProj":"Projet final CÉGEP",
    "Model":"Modélisation 3D",
    "Creal": "Club de création" ,
    "GameinWatch":"Jeu de type Game & Watch",
    "vga":"Animation VGA avec "
}

function switchLanguage(){

    if(document.getElementById("SwitchLang").innerText == "FR"){/*Switch to FR*/
        for(const key in fr){
            document.getElementById(key).innerText=fr[key]
        }
    }
    else{/*Switch to EN*/
        for(const key in en){
            document.getElementById(key).innerText=en[key]
        } 
    }
}