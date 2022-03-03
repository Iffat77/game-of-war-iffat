class Player {
  constructor(name) {
    this.name = name
    this.deck = []
  }
}

class Cards {
  constructor(suit, rank, score) {
    this.suit = suit
    this.rank = rank
    this.score = score
  }
}
class Deck{
  constructor() {
    this.cards = []
    this.createDeck()
  }
  createDeck() {
    let suits = ["Hearts", "Spades","Clubs", "Diamonds"]
    let ranks =  ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen","King", "Ace"]
    for (let i = 0; i < suits.length; i++){
      for (let j = 0; j < ranks.length; j++){
        this.cards.push(new Cards(suits[i], ranks[j], j + 2))
        this.cards.sort((a,b) => Math.random() - Math.random())
      }
    }
  }
}
let newDeck = new Deck()
let player1 = new Player("Undertaker")
let player2 = new Player("Triple H")

class Game{
  constructor(deck, player1, player2) {
    this.deck = deck
    this.player1 = player1
    this.player2 = player2
  }
  
  playGame() {
    let half = Math.ceil(this.deck.length/2)
     let deckOne = this.deck.slice(0, half)
      let deckTwo = this.deck.slice(-half)
       this.player1.deck = deckOne
         this.player2.deck = deckTwo
         
    if (this.player1.deck[0].score > this.player2.deck[0].score) {
      this.player1.deck.push(this.player2.deck.shift(), this.player1.deck.shift())
    } else if (this.player1.deck[0].score < this.player2.deck[0].score) {
      this.player2.deck.push(this.player1.deck.shift(), this.player2.deck.shift())
    }
                  
      
               
  }

}

let myGame = new Game(newDeck.cards, player1, player2)



myGame.playGame()

console.log(myGame.playGame().length)
