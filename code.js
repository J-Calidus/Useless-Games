






//Challenge dunno Ω: Create a Bean
function generateBean() {
    var rusure = prompt('Are you sure you would like to go through this dangerous process?\n        Yes or No')
    if (rusure = "Yes") {
        var beanpic = document.createElement('img');
        var beandiv = document.getElementById('flex-bean');
        beanpic.src = "https://i.imgflip.com/6pgbeq.jpg"
        beandiv.appendChild(beanpic);
    } else {
        alert('Well thats too bad');
        var beanpic = document.createElement('img');
        var beandiv = document.getElementById('flex-bean');
        beanpic.src = "https://i.imgflip.com/6pgbeq.jpg"
        beandiv.appendChild(beanpic);
    }
}
















//Challenge Alpha ɑ: Age in dais

function urAge() {
    var age = prompt("This info will be sold for data\nWhen were you born?")
    var ageInDays = (2022-age) * 365;
    var h1 = document.createElement('h1');
    var visualAnswer = document.createTextNode("You are " + ageInDays + " days old");
    h1.setAttribute("id", 'urAge');
    h1.appendChild(visualAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}



function reset() {
    document.getElementById('urAge').remove();
}

















//Challenge Beta β: SPARTAAAAAAAA and GREEEEEEEEECE vs TROOOOOOOOOOY and PERSIAAAAAAAA
function LeonidasAndAchilles() {
    var image = document.createElement('img');
    image.setAttribute("id", "battle");
    var div = document.getElementById('flex-greece');
    //image.src = "https://cdn.quotesgram.com/img/13/59/291421283-tumblr_mino1shqMo1qg4blro1_500.gif"
    image.src = "https://media1.tenor.com/images/3f768df29d2f195cebbd238ba48f0ab7/tenor.gif?itemid=14920014"

    div.appendChild(image);
}


function endBattle() {
    document.getElementById('battle').remove();
}
















//Challenge Gamma ɣ: Sword Shield Bow ||| Rock=Shield  Paper=Bow  Scissors=Sword  Ultimate Weapon=Theon(Gods, Goddesses)
function sbsGame(yourChoice) {
    PlayPass();
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberChoice(randomInteger());
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);
    sbsFrontEnd(yourChoice.id, botChoice, message)
}

function PlayPass() {
    let input = prompt('If you would like to play this game, enter code.')
    if (input === '') {
        alert('Code accepted. Please enjoy sir');
    }   else {
        confirm('Yeah too bad stinko. Stop being a couch potato and hurry up do something else.');
        document.getElementById('shield').remove();
        document.getElementById('bow').remove();
        document.getElementById('sword').remove();
        document.getElementById('theon').remove();
    }
}

function randomInteger() {
    return Math.floor(Math.random() * 3);
}

function numberChoice(number) {
    return ['shield', 'bow', 'sword'] [number];
}

function decideWinner(yourChoice, computerChoice) {
    var database = {
        'shield' : {'sword': 1, 'shield': 0.5, 'bow': 0, 'theon': 0},
        'bow': {'sword': 0, 'shield': 1, 'bow': 0.5, 'theon': 0},
        'sword': {'sword': 0.5, 'shield': 1, 'bow': 0, 'theon': 0},
        'theon': {'sword': 1, 'shield': 1, 'bow': 1},

    };

    var yourScore = database[yourChoice] [computerChoice];
    var computerScore = database[computerChoice] [yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': "You lost :(", 'color': 'red'};
    }   else if (yourScore === 0.5) {
        return {'message': 'You tied :/', 'color': 'yellow'};
    }   else {
        return {'message': 'You won :)', 'color': 'green'}
    }
}

function sbsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'shield': document.getElementById('shield').src,
        'bow': document.getElementById('bow').src,
        'sword': document.getElementById('sword').src,
        'theon': document.getElementById('theon').src,
    }

    document.getElementById('shield').remove();
    document.getElementById('bow').remove();
    document.getElementById('sword').remove();
    document.getElementById('theon').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color': " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-sbs-div').appendChild(humanDiv);
    document.getElementById('flex-box-sbs-div').appendChild(messageDiv);
    document.getElementById('flex-box-sbs-div').appendChild(botDiv);

}

function tryAgain() {
    location.reload();
}





















//Challenge Delta δ: Change Button Colours
let all_buttons = document.getElementsByTagName('button');

const copyAllButtons = []
for (let i=0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonColorChange(choice) {
    console.log(choice.value);
    if (choice.value === 'red') {
        buttonRed();
    } else if (choice.value === 'green') {
        buttonGreen();
    } else if (choice.value === 'blue') {
        buttonBlue();
    } else if (choice.value === 'yellow') {
        buttonYellow();
    } else if (choice.value === 'reset') {
        buttonReset();
    } else if (choice.value === 'random') {
        buttonRandom();
    }
}

function buttonRed() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonBlue() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary');
    }
}

function buttonYellow() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }
}

function buttonReset() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonRandom() {
    let select = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for(let i=0; i < all_buttons.length; i++) {
        var randomNumber = (Math.floor(Math.random() * 4));
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(select[randomNumber]);
    }
}    






















//Challenge Epsilon ε: Blackjack

let bjGame = {
    'you': {'scoreSpan': '#ur-bj-result', 'div': '#ur-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-bj-result', 'div': '#dealer-box', 'score': 0},
    'card': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    'cardMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': [11, 1]},
    'wins': 0,
    'losses': 0,
    'draws' : 0,
    'chips': 0,
    'standMode': false,
    'turnsOver': false,
};
 


const You = bjGame['you']
const Dealer = bjGame['dealer']

const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3')
const lossSound = new Audio('sounds/aww.mp3')



document.querySelector('#bj-hit-btn').addEventListener('click', bjHit);
document.querySelector('#bj-deal-btn').addEventListener('click', bjDeal);
document.querySelector('#bj-stand-btn').addEventListener('click', dealerLogic);
document.querySelector('#Chips-counter').style.color = 'white';
document.querySelector('#title').style.color = 'white';




//card
function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return bjGame['card'][randomIndex];
}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
    let cardImage = document.createElement('img');
    cardImage.src = `images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
    }
}


//score
function score(card, activePlayer) {
    if (card === 'A') {
        if(activePlayer['score'] + bjGame['cardMap'][card] <= 21) {
            activePlayer['score'] += bjGame['cardMap'][card][1];
        } else {
            activePlayer['score'] += bjGame['cardMap'][card][0];
        }
    } else { 
        activePlayer['score'] += bjGame['cardMap'][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}



//winner and loser
function calculateWinner() {
    let winner;
    if (You['score'] <= 21) {
        if (You['score'] > Dealer['score'] || (Dealer['score'] > 21)) {
            bjGame['wins'] ++;
            bjGame['chips'] ++;
            winner = You;
        } else if (You['score'] < Dealer['score']) {
            bjGame['losses'] ++;
            bjGame['chips'] --
            winner = Dealer;
        } else if (You['score'] === Dealer['score']) {
            bjGame['draws'] ++;
            winner = 'Draw';
        }
    } else if (You['score'] > 21 && Dealer['score'] <= 21) {
        bjGame['losses'] ++;
        bjGame['chips'] --
        winner = Dealer;
    } else if (You['score'] > 21 && Dealer['score'] > 21) {
        bjGame['draws'] ++;
        winner = 'Draw';
    }
    console.log(bjGame);
    return winner;
}

function showResult(winner) {
    let message, messageColor;
    if (bjGame['turnsOver'] === true) {

    
        if (winner === You) {
            message = '💸 ᛃ ᚠ You won ᚠ ᛃ 💸';
            messageColor = 'green'
            winSound.play();
            document.querySelector('#wins').textContent = bjGame['wins'];
        } else if (winner === Dealer) {
            message = 'ᚾ ᚺ You lost ᚺ ᚾ';
            messageColor = 'brown'
            lossSound.play();
            document.querySelector('#losses').textContent = bjGame['losses'];
        } else {
            message = 'ᛁ You tied ᛁ'
            messageColor = 'blue'
            document.querySelector('#draws').textContent = bjGame['draws'];
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}




//dealer
function dealerLogic() {
    bjGame['standMode'] = true;
    while (Dealer['score'] < 16 && bjGame['standMode'] === true) {
        let card = randomCard();
        showCard(card, Dealer);
        score(card, Dealer);
        showScore(Dealer);
    }
    bjGame['turnsOver'] = true;
    let winner = calculateWinner();
    showResult(winner);
    document.querySelector('#Chips-counter').textContent = bjGame['chips'];
    
}



//buttons
function bjHit() {
    if (bjGame['standMode'] === false) {
        let card = randomCard();
        showCard(card, You);
        score(card, You);
        showScore(You);
        console.log(You['score'])
    }
}

function bjDeal() {
    //showResult(calculateWinner());
    if (bjGame['turnsOver'] === true) {
        bjGame['standMode'] = false;
        let urImages = document.querySelector('#ur-box').querySelectorAll('img');
        for (i=0; i < urImages.length; i++) {
            urImages[i].remove();
        }

        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
        for (i=0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }

        You['score'] = 0;
        Dealer['score'] = 0;

        document.querySelector('#ur-bj-result').textContent = 0;
        document.querySelector('#ur-bj-result').style.color = 'black'; 

        document.querySelector('#dealer-bj-result').textContent = 0;
        document.querySelector('#dealer-bj-result').style.color = 'black';

        bjGame['turnsOver'] = false;
    }

}




//reset score
function resetScore() {
    document.querySelector('#wins').textContent = 0;
    document.querySelector('#losses').textContent = 0;
    document.querySelector('#draws').textContent = 0;
    document.querySelector('#Chips-counter').textContent = 0;
}




