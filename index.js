let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() {
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
  console.log("Drawing a new card from the deck")
  
  let card = 7
  sum += card
  cards.push(card)
  renderGame()
}
