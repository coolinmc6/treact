
class Person {
  constructor(name, poundsLost) {
      this.name = name;
      this.poundsLost = poundsLost;
      this.bets = {}
  }

  setPersonPayoff(personArray) {
      personArray.map(({person, amount}) => {
          this.bets[person.name] = {
              amount,
              person
          }
          person.bets[this.name] = amount
      })
  }

  calculatePayoff() {
      Object.keys(this.bets).map()
  }
}

const andy = new Person('Andy', 15)
const colin = new Person('Colin', 20)
const jack = new Person('Jack', 25)

andy.setPersonPayoff([{ person: colin, amount: 5}, { person: jack, amount: 5}])
colin.setPersonPayoff([{ person: jack, amount: 10}])

console.log(andy);
console.log(colin);
console.log(jack);



