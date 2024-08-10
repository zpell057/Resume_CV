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
    "appleMouse":"Old Apple computer mouse converted to optical and USB to be used on modern computers using the internals of a modern mouse.",
    "arduinoDesc":"Arduino projects are some of my favorites, because they let me combine my interests in software and hardware development.\n The GIF to the right presents a game that I have made where the player sorts alphabetically a randomly generated array of numbers using a controller made from repurposed keyboard switches (from the keyboard I am playing with in the header).\n In the next projects I have made an infinitely looping animation for VGA monitors and a device that plays a sound from an SD card when a switch is opened.",
    "longAppDesc":"I have learned Java in one of my first year university courses. Being an android user and knowing that android apps run on the JVM, I wanted to apply the theoretical knowledge from this course for a project. I therefore decided to make an app inspired by Texas Instruments' Little Professor toy. \n With the help of an online course, I easily translated that knowledge to real-life use."
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
    "appleMouse":"Ancienne souris d'ordinateur Apple modernisée avec une souris optique moderne pour être utilisée par USB.",
    "arduinoDesc":"Les projets Arduino sont parmi mes favoris, car j'aime combiner mes habiletés logicielles et électroniques dans mes projets. \n Dans le GIF à droite, j'ai conçu un jeu où l'utilisateur doit mettre en ordre alphabétique une série de lettres générées aléatoirement. Le jeu est contrôlé à partir d'une manette faite à partir de touches d'un ancien clavier (celui avec lequel je m'amuse dans l'en-tête).\n Dans les deux projets suivants, j'ai réalisé une animation infinie pour les écrans VGA ainsi qu'un diffuseur de fichier audio qui s'active quand un interrupteur s'ouvre.",
    "longAppDesc":"J'ai appris Java dans le cadre d'un de mes cours d'université de première année. En tant qu'utilisateur android, je savais que les applications android sont exécutées sur le JVM. J'ai ainsi voulu appliquer le contenu théorique du cours dans un projet inspiré du jeu de Texas Instruments \"Little Professor\". \n À l'aide d'un cours en ligne sur le développement android, j'ai facilement réussi à traduire mon savoir théorique en application réelle."
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