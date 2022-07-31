// console.log('hello there')

class Car {
  constructor (maker, serialNumber) {
    this.serialNumber = serialNumber
    this.maker = maker
  }
  drive () {
    console.log('Vroom Vroom')
  }
}

const newCar = new Car('Mazda', 12345)

// console.log(newCar)

class Factory {
  constructor(company) {
    this.company = company
    this.cars = []
  }
  generateCar () {
    const newCar = new Car(this.company, this.cars.length)
    this.cars.push(newCar)
  }
  findCar(index) {
    return this.cars[index]
  }
}

const tesla = new Factory('Tesla')
tesla.generateCar()
tesla.generateCar()
tesla.generateCar()
tesla.generateCar()
tesla.generateCar()
tesla.generateCar()
tesla.generateCar()
// console.log(tesla)
// console.log(tesla.findCar(0))

const porche = new Factory('Porche')
porche.generateCar()
porche.generateCar()
console.log(porche)
console.log(porche.findCar(1))
