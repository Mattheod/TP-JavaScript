// == Variables scènes ==

let texteForet = 'Le héros poursuit un ogre monstrueux qui a enlevé la fille du forgeron. Il l\'a suivie jusque dans une forêt dense et inquiétante. Les arbres étouffent la lumière et chaque craquement de branche lui rappelle la présence de l\'ogre et le danger pour la jeune fille. Vous avancez à pas silencieux dans la forêt, vos yeux scrutant chaque ombre. L\'ogre est proche et, quelque part dans cette obscurité, la fille du forgeron est prisonnière. Devant vous, le chemin se divise : à gauche, une caverne sombre et étroite, d\'où s\'échappent des échos inquiétants. À droite, une construction en pierre ancienne, peut-être un fort ou une tour, qui semble encore habitée.';

let texteTour = 'Après avoir choisi le chemin à droite dans la forêt, le héros arrive devant une tour en pierre ancienne. Malgré son apparence abîmée par le temps, la tour semble habité : de la fumée s\'échappe d\'une cheminée branlante, et on entend des craquements venant de l\'intérieur. L\'air est lourd et chargé de tension. L\'ogre pourrait s\'y trouver, et la fille du forgeron être retenue à l\'intérieur ou à proximité. Vous vous tenez devant la tour. Ses murs sont couverts de lierre, et certaines pierres semblent prêtes à tomber. Pourtant, des signes de vie sont présents : une lumière vacille à travers une fenêtre fissurée et de petits bruits proviennent de l\'intérieur. Devant vous, le chemin se divise à nouveau.';

let texteTourFinie = 'Je n\'ai plus rien à faire ici. Je ferais mieux de retourner en arrière ou d\'avancer vers la clairrière';

let textePrairie = 'Après avoir quitté la tour, le héros s\'avance dans une clairière lugubre. Au bout, un lac noir reflète à peine les arbres environnants. Plus il s\'approche, plus l\'obscurité devient oppressante. Vous avancez dans la clairière. Un lac noir se dessine devant vous, et l\'air devient glacial. Soudain, le noir total vous engloutit. Une force invisible vous attire vers le lac…';

let textePrairieLumiere = 'Une épée scintillante surgit du lac, et une femme fantomatique apparaît, vous poussant doucement vers l\'arme. Votre cœur bat à tout rompre, et vous sentez la présence menaçante derrière vous. Au dernier moment, vous réussissez à vous écarter de la femme fantomatique, utilisant un mouvement rapide et précis. La femme s\'empale sur l\'épée à votre place, disparaissant dans un cri silencieux. Vous récupérez l\'épée et l\'ajoutez à votre inventaire, tremblant mais vivant. Sur la droite, vous appercevez une vieille batisse en bois !';

let textePrairieFinie = 'Je n\'ai plus rien à faire ici. Je ferais mieux d\'aller voir la batisse ou de retourner en arrière !';

let textePrairieMort = 'Le noir total l\'engloutit. Le héros meurt mystérieusement, sans jamais savoir ce qui l\'a frappé.';

let texteBat = 'Après avoir traversé le lac et récupéré l\'épée, le héros arrive devant une vieille bâtisse en bois, délabrée par le temps. Les planches grincent sous le vent, et la structure semble prête à s\'effondrer. En s\'approchant, le héros remarque sur la façade une étrange gravure sur la cheminée, qui semble être une énigme. La bâtisse semble abandonnée depuis des décennies. Cependant, en observant de plus près, vous découvrez une énigme gravée sur la pierre de la cheminée : <br /> "Je suis levé pour protéger, <br /> Je repousse ce qui menace. <br /> Sans moi, le courage ne suffit pas. <br /> Qui suis-je ?"';

let texteBatBouclier = 'La cheminée en pierre s\'ouvre lentement, révélant une cachette secrète. À l\'intérieur se trouve un bouclier en acier, que le héros ajoute à son inventaire. Le héros est désormais mieux protégé pour le combat final contre l\'ogre.';

let texteBatFini = 'Je n\'ai plus rien à faire ici. Il va être temps d\'aller voir ce qu\'il se passe dans la grotte !';

let texteBatMort = 'Une force mystérieuse surgit de la bâtisse, et le héros est instantanément désintégré, disparu dans un éclair de lumière noire.';

let texteMagicien = 'Le héros monte tout en haut de la tour. Au sommet, il découvre un magicien étrange, apparemment fou mais bienveillant. Vous atteignez le sommet de la tour. Devant vous se tient un magicien à l\'allure dégingandée, ses vêtements flottant comme animés par un souffle invisible. Il vous sourit et vous invite à vous asseoir. "Ah, enfin un visiteur !", dit-il d\'une voix chantante. "Prenez donc une collation et une boisson chaude, vous en aurez besoin pour la suite." Après quelques instants, le magicien vous conduit vers le balcon. De là, vous apercevez la caverne sombre de la forêt. "Là-bas vit l\'ogre qui a enlevé la fille du forgeron. Il est féroce et la caverne est truffée de pièges. Aucune lumière ne pénètre dans son antre. Si vous voulez survivre et espérer secourir la jeune fille, vous aurez besoin d\'un objet utile… Mais pour l\'obtenir, vous devez répondre à mon énigme :" <br/> "Je ne peux pas être vue, <br/> mais je guide tous les pas. <br/> Sans moi, le voyageur se perd. <br/> Qui suis-je ?"';

let texteMagicienLumiere = 'Le magicien sourit et vous tend un objet magique lumineux (orbe de lumière), ajouté à votre inventaire. Il explique que cet objet permettra d\'éclairer la caverne et d\'éviter les pièges. Le héros redescend en bas de la tour.';

let texteMagicienMort = 'Le visage du magicien se tord, son rire devient hystérique. Il pousse soudain le héros du balcon. Le héros meurt de la chute, fin dramatique immédiate.';

let texteGrotte = 'Le héros se tient devant l\'entrée de la caverne qu\'il avait repérée depuis la tour. L\'air à l\'intérieur est glacial, et une obscurité totale règne à l\'intérieur. Les murs sont humides et le sol irrégulier, et chaque bruit résonne de façon inquiétante. Vous pénétrez dans la caverne. L\'obscurité est totale, et l\'air est lourd. Le moindre pas est dangereux et les échos de vos mouvements vous font frissonner. Vous savez que l\'ogre vit quelque part plus loin.';

let texteGrotteLumiere = 'La caverne s\'illumine grâce à l\'objet lumineux. Vous pouvez voir clairement le chemin, éviter les pièges et avancer sans encombre. La progression vers le cœur de la caverne et l\'ogre devient possible.';

let texteGrotteMort = 'L\'obscurité totale vous empêche de voir quoi que ce soit. Vous avancez, mais votre pied heurte un trou rempli de pics en bois que vous ne pouviez pas voir. Vous tombez et êtes mortellement blessé, vous êtes mort !';

let texteOgre = 'Le héros arrive dans une grande salle humide et sombre, éclairée par le feu de la marmite bouillante. La fille du forgeron est enfermée dans une cage en bois au fond de la salle. L\'ogre, énorme et menaçant, s\'active autour de sa marmite, certainement pour y préparer un repas macabre. Alors que vous entrez dans la pièce, l\'ogre vous voit Il se redresse, massue à la main, et pousse un grondement guttural. "Ah… un invité imprévu ! Vous allez rejoindre votre amie ici !" Il s\'avance vers vous, sa massue prête à frapper. La tension est à son comble…';

let texteOgreVaincu = 'Le héros attaque avec son épée. L\'ogre tente de l\'éviter et lui assène un coup de massue. Grâce au bouclier, le héros bloque le coup puissant. Profitant de l\'ouverture, il contre-attaque et transperce le cœur de l\'ogre avec son épée. L\'ogre s\'effondre, vaincu. Le héros libère la fille du forgeron de sa cage. Elle est saine et sauve, et l\'aventure se termine triomphalement.';

let texteOgreSansArme = 'Le héros tente de se défendre, mais il est complètement désarmé. L\'ogre l\'attrape sans effort, le ligote et le place dans la marmite avec la fille du forgeron.';

let texteOgreSansBouclier = 'Le héros frappe de toutes ses forces avec son épée. L\'ogre esquive habilement et riposte d\'un violent coup de massue, tuant instantanément le héros !';

// == Variables globales ==

let inventory = [];

const nomsObjets = {
    lumiere: "Orbe de lumière",
    epee: "Épée",
    bouclier: "Bouclier"
};

// == Fonctions globales ==

function afficherScene(image, texte, description) {

    sceneImage.classList.remove("assombrir");

    sceneImage.src = image;
    sceneImage.alt = description;

    storyText.innerHTML = texte;

    choicesDiv.innerHTML = "";
}

function ajouterChoix(texte, action) {

    const choix = document.createElement("p");
    choix.textContent = texte;

    choix.addEventListener("click", (event) => {

        if (event.detail > 1) {
            return;
        }

        action();
    });

    choicesDiv.appendChild(choix);
}

// Fonction qui affiche la scène de la mort
function mort(texte) {
    
    afficherScene("img/died.jpg", texte, "Vous êtes mort");

    ajouterChoix("Recommencer l'aventure", recommencer);
}

//Fonction qui remet le jeu a zero et repart de la foret
function recommencer() {

    inventory = [];
    inventoryDiv.innerHTML = "";

    sceneForet();
}

// Fonction de gestion des images dans l'inventaire
function inventoryImg(item) {

    const img = document.createElement("img");
    img.src = "img/" + item + ".png";
    img.alt = nomsObjets[item];
    img.title = nomsObjets[item];

    inventoryDiv.appendChild(img);
}

// == Fonctions scènes ==

// Fonction qui affiche la scène de la forêt
function sceneForet() {

    afficherScene("img/foret.jpg", texteForet, "Une forêt sombre et inquiétante");
    ajouterChoix("Aller à gauche vers la caverne obscure", sceneGrotte);
    ajouterChoix("Aller à droite vers la construction en pierre", sceneTour);
}

// Fonction qui affiche la scène de la tour
function sceneTour() {

    // Si le héros a déja la lumière, le magicien ne lui offre pas
    if (inventory.includes("lumiere")) {
        afficherScene("img/tour.jpg", texteTourFinie, "Une vieille tour en pierre envahie par le lierre");
    } else {
        afficherScene("img/tour.jpg", texteTour, "Une vieille tour en pierre envahie par le lierre");
        ajouterChoix("À gauche : rentrer dans la tour", sceneMagicien);
    }

    ajouterChoix("À droite : partir vers la clairière", scenePrairie);
    ajouterChoix("En arrière : revenir vers la forêt", sceneForet);
}

// Fonction qui affiche la scène de la prairie
function scenePrairie() {

    // Si le héros a déjà l'épée, il est deja aller du lac
    if (inventory.includes("epee")) {
        afficherScene("img/prairie.jpg", textePrairieFinie, "Une clairière au bord d'un lac noir");
        ajouterChoix("Continuer après le lac vers le vieux bâtiment en bois", sceneBat);
        ajouterChoix("Retourner en arrière vers la tour", sceneTour);
        return;
    }

    // Première visite, la clairière s'assombrit
    afficherScene("img/prairie.jpg", textePrairie, "Une clairière au bord d'un lac noir");
    sceneImage.classList.add("assombrir");

    // Héros attiré vers le lac, dépend de l'inventaire
    ajouterChoix("Avancer vers le lac", () => {

        if (inventory.includes("lumiere")) {
            // Avec la lumière + obtient l'épée
            afficherScene("img/prairie.jpg", textePrairieLumiere, "Une clairière au bord d'un lac noir");
            inventory.push("epee");
            inventoryImg("epee");

            ajouterChoix("Continuer après le lac vers le vieux bâtiment en bois", sceneBat);
            ajouterChoix("Retourner en arrière vers la tour", sceneTour);
        } else {
            // Sans la lumière
            mort(textePrairieMort);
        }
    });
}

// Fonction qui affiche la scène du bâtiment
function sceneBat() {

    if (inventory.includes("bouclier")) {
        afficherScene("img/batiment.jpg", texteBatFini, "Une vieille bâtisse en bois");
        ajouterChoix("Retourner en arrière vers la clairière", scenePrairie);
        return;
    }

    afficherScene("img/batiment.jpg", texteBat, "Une vieille bâtisse en bois");

    ajouterChoix("Le casque", () => mort(texteBatMort));

    ajouterChoix("Le bouclier", () => {
        afficherScene("img/batiment.jpg", texteBatBouclier, "Une vieille bâtisse en bois");
        inventory.push("bouclier");
        inventoryImg("bouclier");

        ajouterChoix("Retourner en arrière vers la clairière", scenePrairie);
    });

    ajouterChoix("L'épée", () => mort(texteBatMort));
}

// Fonction qui affiche la scène du magicien
function sceneMagicien() {

    afficherScene("img/magicien.jpg", texteMagicien, "Le magicien au sommet de la tour");

    ajouterChoix("Le vent", () => mort(texteMagicienMort));

    ajouterChoix("La lumière", () => {
        afficherScene("img/magicien.jpg", texteMagicienLumiere, "Le magicien au sommet de la tour");
        inventory.push("lumiere");
        inventoryImg("lumiere");

        ajouterChoix("Retourner dans la forêt pour prendre le chemin de la caverne", sceneForet);
        ajouterChoix("Aller vers la plaine, un nouveau chemin qui pourrait mener à d'autres surprises", scenePrairie);
    });

    ajouterChoix("L'ombre", () => mort(texteMagicienMort));
}

// Fonction qui affiche la scène de la grotte
function sceneGrotte() {

    if (inventory.includes("lumiere")) {
        afficherScene("img/grotte.jpg", texteGrotte + " " + texteGrotteLumiere, "L'intérieur d'une caverne éclairée par une lumière magique");
        ajouterChoix("Avancer prudemment plus profondément dans la caverne vers l'ogre et la fille du forgeron", sceneOgre);
    } else {
        mort(texteGrotte + " " + texteGrotteMort);
    }
}

// Fonction qui affiche la scène de l'ogre
function sceneOgre() {

    afficherScene("img/ogre.jpg", texteOgre, "Le héros face à l'ogre dans son repaire");

    ajouterChoix("Affronter l'ogre", () => {

        const aEpee = inventory.includes("epee");
        const aBouclier = inventory.includes("bouclier");

        if (aEpee && aBouclier) {
            afficherScene("img/victoire.jpg", texteOgreVaincu, "Victoire !");
            ajouterChoix("Rejouer", recommencer);
        } else if (aEpee) {
            mort(texteOgreSansBouclier);
        } else {
            mort(texteOgreSansArme);
        }
    });
}

// == Éléments du dom réutilisable ==

const sceneImage = document.getElementById("scene-image");
const storyText = document.getElementById("story-text");
const choicesDiv = document.getElementById("choices");
const inventoryDiv = document.getElementById("inventory");

// == Code ==

document.addEventListener("DOMContentLoaded", () => {

    sceneImage.addEventListener("click", sceneForet, { once: true });
});