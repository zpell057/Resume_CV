document.getElementById('SwitchLang').addEventListener('click', function() {
    switchLanguage();
});
document.getElementById('PersoProjMenu').addEventListener('click',function(){scrollTo('PersProjectsSection');})
document.getElementById('CoopProjMenu').addEventListener('click',function(){scrollTo('GNGtitle');})
document.getElementById('menuArduino').addEventListener('click',function(){scrollTo('Arduino');})
document.getElementById('menuPython').addEventListener('click',function(){scrollTo('pythonTitle');})
document.getElementById('menuModel').addEventListener('click',function(){scrollTo('modelingTitle');})
document.getElementById('menuGNG').addEventListener('click',function(){scrollTo('GNGtitle');})
document.getElementById('menuCEGProj').addEventListener('click',function(){scrollTo('cegepTitle');})
document.getElementById('menuCreal').addEventListener('click',function(){scrollTo('crealTitle');})
document.getElementById('menuJava').addEventListener('click',function(){scrollTo('javaTitle');})

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
    "longAppDesc":"I have learned Java in one of my first year university courses. Being an android user and knowing that android apps run on the JVM, I wanted to apply the theoretical knowledge from this course for a project. I therefore decided to make an app inspired by Texas Instruments' Little Professor toy. \n With the help of an online course, I easily translated that knowledge to real-life use.",
    "gngDesc":"GNG 1503 is a first-year class where students cooperate in teams of 4 to 6 to create a solution for a real-life client. \nWhen I took the class in the fall semester of 2023, my team and I had to create a solution to accurately and efficiently determine the dimensions of roller bearings put in front of a camera. The solution had to be simple to use and cheap. \nBecause I was the only student in our team who knew how to code, I had the responsibility of creating a program that would determine the size of a roller bearing and automatically find which bearing was being measured. \nI developed this program in Python using OpenCV to detect the shapes of the bearing and compare their sizes to a square of known dimensions. Using Pandas, the program then efficiently sorted through the catalog of bearings of the client and returned the products which were closest to the measurements. The right bearings were usually in the first ten bearings returned by the program, depending on the quality of the pictures of the bearings.\nIn the final competition on design day, our solution was judged as the second best in our category.",
    "cegepDesc":"For my CÉGEP capstone project, I was in a team of three to design a project relating to physics and math. \nWe decided to build a manually powered electric generator from scratch. I built, among other things, the gearbox that spun the magnetic rotor that induced the current.\nWe then rectified and normalised the current to make it DC with an electric circuit.\nAfter a lot of optimisations, we were able to induce 3.2 volts DC from the rectified output of our three coils.",
    "crealDesc":"While I was studying at CÉGEP, I joined the Créalab which is a student club taking place in the school’s makerspace.\nOur project was to build a pinball machine from scratch. \nI was mostly involved in designing 3D printed parts to build the features and obstacles that the ball would hit.\nI enjoyed my time at the club, because it allowed me to meet other like-minded creatives and tinkerers. The club also served as experience on collaborative work among a team of different people who work towards a common goal."
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
    "longAppDesc":"J'ai appris Java dans le cadre d'un de mes cours d'université de première année. En tant qu'utilisateur android, je savais que les applications android sont exécutées sur le JVM. J'ai ainsi voulu appliquer le contenu théorique du cours dans un projet inspiré du jeu de Texas Instruments \"Little Professor\". \n À l'aide d'un cours en ligne sur le développement android, j'ai facilement réussi à traduire mon savoir théorique en application réelle.",
    "gngDesc":"GNG 1503 est un cours de première année où les étudiants coopèrent en équipes de 4 à 6 personnes pour créer une solution au problème d’un client réel.\nQuand j’ai suivi ce cours en automne 2023, mon équipe devait créer une solution pour rapidement identifier et mesurer des roulements à billes avec des photos. \nÉtant le seul programmeur de mon équipe, j’ai programmé l’ensemble du programme de mesure et identification des roulements dans Python avec OpenCV pour détecter les formes et dimensions des roulements et les comparer aux dimensions d’un carré de forme connue. Le programme utilise ensuite Pandas pour trouver les roulements dont les mesures correspondent aux mesures. Les bons roulements étaient habituellement affichés dans les 10 premiers résultats du programme selon la qualité des photos.\nDans la compétition finale durant la journée de conception, notre solution a été jugée comme la deuxième meilleure de notre cathégorie.",
    "cegepDesc":"Dans le cadre de mon projet final de CÉGEP, j’ai fait un projet de physique et mathématiques dans une équipe de trois.\nNous avons choisi de construire une génératrice électrique actionnée manuellement. J’étais chargé, parmi d’autres choses, de réaliser la transmission qui servait à faire tourner les aimants qui induisent le courant dans les trois bobines de phases différentes.\nNous avons ensuite rectifié et stabilisé le courant à l’aide d’un circuit électrique.\nAprès une suite d’optimisations, nous avons réussis à induire 3,2 volts de courant continu.",
    "crealDesc":"Au CÉGEP, j’ai rejoint le Créalab qui est un club étudiant qui prends place dans le fablab de l’école.\nNotre projet était de construire une machine à boules (pinball).\nJ’étais surtout chargé de concevoir des pièces imprimées en 3D qui serviraient d’obstacles pour la boule dans le jeu.\nJ’ai beaucoup apprécié mon temps dans le club, car il m’a permis de rencontrer des gens créatifs comme moi. Le club m’a aussi servi d’expérience de travail collaboratif au sein d’une équipe variée de créatifs travaillant vers un but commun."
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
function scrollTo(targetID){
    document.getElementById(targetID).scrollIntoView({behavior:'smooth'})
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