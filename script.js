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
        this.cards.push(new Cards(suits[i], ranks[j], j+1))
      }
    }
}
}
let newDeck = new Deck()
console.log(newDeck.cards)