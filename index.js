let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
  
}
 
console.log(getRandomCard())


function startGame() {
  isAlive = true
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard

  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  
  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw another Card?"
  } else if (sum === 21) {
    message = "Wohoo! You've got BlackJack!"
    hasBlackJack = true
  } else {
    message = "You're Out of the Game!"
    isAlive = false
  }

  messageEl.textContent = message

}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card
    cards.push(card)
    renderGame()
  }
}