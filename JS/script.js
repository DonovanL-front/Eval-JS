let round, global, runGame, activePlayer;
let newGame = document.getElementById("newGame");
let rollDice = document.getElementById("rollDice");
let holdRound = document.getElementById("hold-round");


rollDice.addEventListener("click", () => {
    // Tirage du dès aléatoire si 1 : nextPlayer() , image
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(randomNumber);
    
    let displayGoodImg = document.querySelector(".dice");
    displayGoodImg.style.display = "block";
    displayGoodImg.src = "../IMG/dès-" + randomNumber + ".png";
    
    if (randomNumber !== 1) {
        round += randomNumber;
        document.querySelector("#round-" + activePlayer).textContent = round;
    } else {
        nextPlayer();
    }
});

holdRound.addEventListener("click", () => {
    // Récupère le score de round et l'ajoute au global
    
    if (runGame) {
        // document.querySelector('.box-player-' + notActivePlayer).classList.remove('active')
        
        global[activePlayer] += round;
        console.log(global[activePlayer]);
        
        document.querySelector("#score-" + activePlayer).textContent =
        global[activePlayer];
        
        // Victoire
        if (global[activePlayer] >= 100) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner!";
            document
            .querySelector(".box-player-" + activePlayer)
            .classList.add("winner");
            runGame = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    round = 0;
    
    
    document.querySelector(".box-player-0").classList.toggle("active");
    document.querySelector(".box-player-1").classList.toggle("active");
    document.querySelector(".box-player-0").classList.toggle("activePlayer");
    document.querySelector(".box-player-1").classList.toggle("activePlayer");

    document.querySelector("#round-0").textContent = "0";
    document.querySelector("#round-1").textContent = "0";
}

newGame.addEventListener("click", init);
init();

function init() {
    global = [0, 0];
    round = 0;
    activePlayer = 0;
    runGame = true;
    
    document.querySelector("#round-0").textContent = "0";
    document.querySelector("#round-1").textContent = "0";
    document.querySelector("#score-0").textContent = "0";
    document.querySelector("#score-1").textContent = "0";
    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-0").classList.remove("winner");
    document.querySelector("#name-1").classList.remove("winner");
    document.querySelector(".box-player-0").classList.remove("active");
    document.querySelector(".box-player-1").classList.remove("active");
    document.querySelector(".box-player-0").classList.remove("activePlayer");
    document.querySelector(".box-player-1").classList.remove("activePlayer");
    document.querySelector(".box-player-0").classList.add("active");
    document.querySelector(".box-player-0").classList.add("activePlayer");

    document.querySelector(".dice").style.display = "none";
}
