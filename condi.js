const choix_valides = ["pierre", "papier", "ciseaux"];
const nombre_parties = 6;

let score_utilisateur = 0;
let score_ordinateur = 0;
let tour = 0;
let prenom = "";

const startBtn = document.getElementById("start-btn");
const prenomInput = document.getElementById("prenom");
const jeuSection = document.getElementById("jeu-section");
const message = document.getElementById("message");
const score = document.getElementById("score");
const buttons = document.querySelectorAll(".buttons button");
const restartBtn = document.getElementById("restart-btn");


startBtn.addEventListener("click", () => {
    prenom = prenomInput.value.trim();
    if (prenom === "") {
        alert("Veuillez entrer votre prénom !");
        return;
    }

    document.getElementById("prenom-section").style.display = "none";
    jeuSection.style.display = "block";
    restartBtn.style.display = "none";

    score_utilisateur = 0;
    score_ordinateur = 0;
    tour = 0;

    message.textContent = `Bonjour ${prenom}, Bienvenue dans le jeu Pierre-Papier-Ciseaux ! Le premier à gagner le plus de parties sur ${nombre_parties} remporte la partie.`;
    score.textContent = `Score - Vous: ${score_utilisateur} | Ordinateur: ${score_ordinateur}`;
});


buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (tour >= nombre_parties) return;

        const choix_utilisateur = btn.getAttribute("data-choix");
        const choix_ordinateur = choix_valides[Math.floor(Math.random() * choix_valides.length)];

        let resultat = "";
        if (choix_utilisateur === choix_ordinateur) {
            resultat = "C'est une égalité !";
        } else if (
            (choix_utilisateur === "pierre" && choix_ordinateur === "ciseaux") ||
            (choix_utilisateur === "papier" && choix_ordinateur === "pierre") ||
            (choix_utilisateur === "ciseaux" && choix_ordinateur === "papier")
        ) {
            resultat = "Vous avez gagné ce tour !";
            score_utilisateur++;
        } else {
            resultat = "L'ordinateur a gagné ce tour !";
            score_ordinateur++;
        }

        tour++;
        message.textContent = `Tour ${tour}: Vous avez choisi ${choix_utilisateur}, l'ordinateur a choisi ${choix_ordinateur}. ${resultat}`;
        score.textContent = `Score - Vous: ${score_utilisateur} | Ordinateur: ${score_ordinateur}`;

        if (tour === nombre_parties) {
            let finalMessage = `Score final après ${nombre_parties} parties : Vous: ${score_utilisateur}, Ordinateur: ${score_ordinateur}. `;
            if (score_utilisateur > score_ordinateur) {
                finalMessage += "Félicitations, tu as gagné la partie !";
            } else if (score_utilisateur < score_ordinateur) {
                finalMessage += "L'ordinateur a gagné la partie. Bonne chance la prochaine fois !";
            } else {
                finalMessage += "La partie s'est terminée par une égalité !";
            }
            message.textContent = finalMessage;

            restartBtn.style.display = "inline-block"; 
        }
    });
});


restartBtn.addEventListener("click", () => {
    score_utilisateur = 0;
    score_ordinateur = 0;
    tour = 0;
    console.log("coucou");
    message.textContent = `Bonjour ${prenom}, Bienvenue dans le jeu Pierre-Papier-Ciseaux ! Le premier à gagner le plus de parties sur ${nombre_parties} remporte la partie.`;
    score.textContent = `Score - Vous: ${score_utilisateur} | Ordinateur: ${score_ordinateur}`;
    restartBtn.style.display = "none";
});
