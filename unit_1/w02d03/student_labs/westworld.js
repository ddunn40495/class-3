const host = {
    name: 'Daniel',
    occupation: 'Atlanta Falcons MVP',
    saySpecs() {
        console.log('My name is ' + this.name + '. ' + 'My occupation is ' + this.occupation + '.' )
    }
}

host.saySpecs()

class BasicHost {
    constructor(name, occupation) {
        this.name = name
        this.occupation = occupation
    }
    saySpecs() {
        console.log('My name is ' + this.name + '. ' + 'My occupation is ' + this.occupation + '.' )
    }
}

const host1 = new BasicHost('jack', 'cashier')

host1.saySpecs()


const names = [
    'Laila',
    'Jack',
    'Harley',
    'Hertha',
    'Darren',
    'Jolene',
    'Loura',
    'Lona',
    'Davida',
    'Reena',
    'Leland',
    'Ta',
    'Jen',
    'Linn',
    'Roslyn',
    'Margorie',
    'Rafaela',
    'Romona',
    'Shanel',
    'Stan'
  ]

  const occupations = [
    'Clerical assistant',
    'Leaflet distributor',
    'Landowner',
    'Special constable',
    'Anaesthetist',
    'Park-keeper',
    'Butler',
    'Choreographer',
    'Blacksmith',
    'Chef',
    'Legal secretary',
    'Song writer',
    'Librarian',
    'Landscape gardener'
  ]
  
  let nameInd = 0
  let occInd = 0
  
  const randomName = () => {
      nameInd = Math.floor(Math.random() * names.length)
      return names[nameInd] 
  }

  const randomOcc = () => {
        occInd = Math.floor(Math.random() * occupations.length)
        return occupations[occInd]
  }
  const hostArray = []
  for (let i = 0; i < 100; i++) {
      hostArray.push(new BasicHost(randomName(), randomOcc()))
      
  }

  console.log(hostArray)