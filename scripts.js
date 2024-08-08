document.getElementById('SwitchLang').addEventListener('click', function() {
    switchLanguage();
});
document.getElementById('PersoProjMenu').addEventListener('click',scrollToPerso)
document.getElementById('CoopProjMenu').addEventListener('click',scrollToCoop)
document.getElementById('menuArduino').addEventListener('click',scrollToArduino)
document.getElementById('menuPython').addEventListener('click',scrollToPython)
document.getElementById('menuModel').addEventListener('click',scrollToModel)
document.getElementById('menuGNG').addEventListener('click',scrollToGNG)
document.getElementById('menuCEGProj').addEventListener('click',scrollToCEGProj)
document.getElementById('menuCreal').addEventListener('click',scrollToCreal)
document.getElementById('menuJava').addEventListener('click',scrollToJava)

const en={
    "Studies":"BASc Electrical Engineering and BSc Computing Technology student",
    "SwitchLang": "FR",
    "TitleProjects":"Projects",
    "PersoProjMenu":"Personal projects",
    "CoopProjMenu":"Cooperative projects",
    "menuCEGProj":"Final CÉGEP project",
    "menuModel":"3D modeling",
    "menuCreal":"Creation club",
    "GameinWatch":"Game & Watch-type game",
    "vga":"VGA animation using ",
    "soundTrap":"Audio message player using an SD card reader, a small speaker and a switch",
    "appDesc":"Arithmetic practice Android app developped in Java using Android Studio",
    "chartsDesc1":"Series of python programs made to edit a video compilation of all #1 songs on the canadian charts in a given decade. The data of what songs were #1 during what time was scraped off of wikipedia using ",
    "chartsDesc2":"to then be searched and downloaded from Youtube using google cloud's Youtube Data API v3 and ",
    "chartsDesc3":"The final video was then created by editing 10 second clips from each video and adding text showing info about the song with",
    "modelDesc":"Various 3D modeling projects done in Fusion 360 and onshape.",
    "appleMouse":"Old Apple computer mouse converted to optical and USB to be used on modern computers using the internals of a modern mouse."

}
const fr={
    "Studies":"Étudiant en B.Sc.A. Génie électrique et B.Sc. Technologie de l'informatique",
    "SwitchLang": "EN",
    "TitleProjects":"Projets",
    "PersoProjMenu":"Projets personnels",
    "CoopProjMenu":"Projets coopératifs",
    "menuCEGProj":"Projet final CÉGEP",
    "menuModel":"Modélisation 3D",
    "menuCreal": "Club de création" ,
    "GameinWatch":"Jeu de type Game & Watch",
    "vga":"Animation VGA avec ",
    "soundTrap":"Lecteur de message audio activé par un interrupteur utilisant un lecteur de carte SD et un haut-parleur miniature",
    "appDesc":"Application Andoid de pratique arithmétique réalisée sur Android Studio",
    "chartsDesc1":"Série de programmes python qui réalisent une compilation de tous les chansons #1 aux charts canadiennes pour une décennie données. L'information sur quelles chansons étaient #1 a été obtenue sur Wikipedia avec",
    "chartsDesc2":"pour ensuite rechercher et télécharger ces chansons sur youtube avec l'API Youtube Data API v3 de google cloud et",
    "chartsDesc3":". La vidéo finale a été créée en montant des segments de 10 secondes de chaque vidéo et en ajoutant du texte avec l'information sur la chanson à l'aide de ",
    "modelDesc":"Multiples projets de modélisation 3D avec Fusion 360 et onshape.",
    "appleMouse":"Ancienne souris d'ordinateur Apple modernisée avec une souris optique moderne pour être utilisée par USB."

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
function scrollToPerso(){
    document.getElementById('PersProjectsSection').scrollIntoView({behavior: 'smooth'})
}
function scrollToArduino(){
    document.getElementById('Arduino').scrollIntoView({behavior: 'smooth'})
}
function scrollToPython(){
    document.getElementById('python').scrollIntoView({behavior: 'smooth'})
}
function scrollToModel(){
    document.getElementById('modeling').scrollIntoView({behavior: 'smooth'})
}
function scrollToGNG(){
    document.getElementById('').scrollIntoView({behavior: 'smooth'})
}
function scrollToCEGProj(){
    document.getElementById('').scrollIntoView({behavior: 'smooth'})
}
function scrollToCreal(){
    document.getElementById('').scrollIntoView({behavior: 'smooth'})
}
function scrollToCoop(){
    document.getElementById('').scrollIntoView({behavior: 'smooth'})
}
function scrollToJava(){
    document.getElementById('JavaAndroid').scrollIntoView({behavior: 'smooth'})
}
function type(targetID) {
    const target = document.getElementById(targetID)
    let index=0;
    const text = target.innerText
    target.innerText=""
    function typeChar() {
        if (index < text.length) {
            target.innerHTML += text.charAt(index);
            index++;
            requestAnimationFrame(typeChar)
        }
    }

    typeChar();
}
type('MainTitle')
type('Studies')