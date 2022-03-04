class Player {
  constructor(name) {
    this.name = name;
    this.deck = [];
  }
}

class Cards {
  constructor(suit, rank, score) {
    this.suit = suit;
    this.rank = rank;
    this.score = score;
  }
}
class Deck {
  constructor() {
    this.cards = [];
    this.createDeck();
  }
  createDeck() {
    let suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    let ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.cards.push(new Cards(suits[i], ranks[j], j + 2));
        this.cards.sort((a, b) => Math.random() - Math.random());
      }
    }
  }
}
let newDeck = new Deck();
let player1 = new Player("Undertaker");
let player2 = new Player("Triple H");

class Game {
  constructor(deck, player1, player2) {
    this.deck = deck;
    this.player1 = player1;
    this.player2 = player2;
  }

  playGame() {
    let half = Math.ceil(this.deck.length / 2);
    let deckOne = this.deck.slice(0, half);
    let deckTwo = this.deck.slice(-half);
    this.player1.deck = deckOne;
    this.player2.deck = deckTwo;
    let p1Deck = this.player1.deck;
    let p2Deck = this.player2.deck;

  
    while (p1Deck.length > 0 && p2Deck.length > 0) {
      if (p1Deck[0].score > p2Deck[0].score) {
        p1Deck.push(p2Deck.shift(), p1Deck.shift());
      } else if (p1Deck[0].score < p2Deck[0].score) {
        p2Deck.push(p1Deck.shift(), p2Deck.shift());
      } else if (p1Deck[0].score === p2Deck[0].score) {
        let stillTie = true;
        let pile = [];
                                                          // this is the war
        while (stillTie) {
             
          console.log(p1Deck)
          console.log("this is war")
          
          if (p1Deck.length < 4 || p2Deck.length < 4) {
              
            stillTie = false;
            if (p1Deck.length < 4) p1Deck.length = 0 
                         
            else if (p2Deck.length < 4) p2Deck.length = 0
                             
          } else if (p1Deck[3].score > p2Deck[3].score) {
            
            let p1warCards = p1Deck.splice(0, 4);
            let p2warCards = p2Deck.splice(0, 4);
            p1Deck.push(...p1warCards, ...p2warCards, ...pile);

            stillTie = false;
          } else if (p1Deck[3].score < p2Deck[3].score) {
            let p1warCards = p1Deck.splice(0, 4);
            let p2warCards = p2Deck.splice(0, 4);
            p2Deck.push(...p1warCards, ...p2warCards, ...pile);
            console.log(p1Deck.length, p2Deck.length)
            stillTie = false;
          } else {
            let p1warCards = p1Deck.splice(0, 4);
            let p2warCards = p2Deck.splice(0, 4);
            pile.push(...p1warCards, ...p2warCards);
          }
       
        }
      }
    }
    if (p1Deck.length === 0) {
      console.log("player 2 wins!");
    } else {
      console.log("player 1 wins!");
    }
  }
}
let myGame = new Game(newDeck.cards, player1, player2);

myGame.playGame();


