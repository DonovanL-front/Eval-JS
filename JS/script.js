let round , global , runGame , activePlayer , notActivePlayer; 
let newGame = document.getElementById('newGame'); 
let rollDice = document.getElementById('rollDice'); 
let holdRound = document.getElementById('hold-round');


init()



rollDice.addEventListener('click', () => { 
    // Tirage du dès aléatoire si 1 : nextPlayer() , image  
    let randomNumber = Math.trunc(Math.random() * 6) + 1
    console.log(randomNumber)

    let displayGoodImg = document.querySelector('.dice')
    displayGoodImg.style.display = 'block'
    displayGoodImg.src = '../IMG/dès-'+ randomNumber + '.png'

    if(randomNumber !== 1 ) { 
        round += randomNumber; 
        document.querySelector('#round-' + activePlayer).textContent = round
        document.querySelector(activePlayer).classList.remove('active')
    } else {  
        nextPlayer()
    }
})





holdRound.addEventListener('click' , () => {
    // Récupère le score de round et l'ajoute au global

    if(runGame) { 
        global[activePlayer] += round
        console.log(global[activePlayer])
    

        
        

        document.querySelector('#score-' + activePlayer).textContent = global[activePlayer]
        
        
        // Victoire 
        if(global[activePlayer] >= 100) { 
            document.querySelector('#name-' + activePlayer).textContent= 'Winner!';
            document.querySelector('.player-' + activePlayer).classList.add('winner')
            // document.querySelector('.player-' + activePlayer).classList.remove('active') 
            runGame = false; 
        } else { 
            
            nextPlayer() ; 
           
        }
    }
})






function nextPlayer() { 
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    notActivePlayer === 0 ? notActivePlayer = 1 : notActivePlayer = 0 ;
    
    round = 0; 
    document.querySelector('#round-0').textContent = '0'; 
    document.querySelector('#round-1').textContent = '0'; 
    console.log()
    document.querySelector('.player-' + notActivePlayer).classList.remove('active')
    document.querySelector('.player-' + activePlayer).classList.add('active');

    document.querySelector('.active').style.backgroundColor = '#f1f1f1'
    

}



newGame.addEventListener('click' , init)



function init() {
    global = [0,0]; 
    round = 0;
    activePlayer = 0;
    runGame = true 
    
    document.querySelector('#round-0').textContent = '0'
    document.querySelector('#round-1').textContent = '0'
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-0').textContent = 'Player 1' ; 
    document.querySelector('#name-0').classList.remove('winner')
    document.querySelector('#name-1').classList.remove
    ('winner')
    document.querySelector('.player-0').classList.add('active')
    document.querySelector('.player-1').classList.add('active')

    document.querySelector('.active').style.backgroundColor = '#f1f1f1'
    document.querySelector('.dice').style.display = 'none'
}