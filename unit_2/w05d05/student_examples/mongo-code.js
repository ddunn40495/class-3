db.bounties.find(
    {}, {name: 1, _id: 0}
)

db.bounties.remove(
    {
        name: 'Han Solo'
    },
    {
        justOne: true
    }
)

db.bounties.update(
    {name: 'Sara Lance'},
    {
      $set: {name: 'White Canary'}
    }
  )
  
  db.bounties.update(
    {name: 'Rocket'},
    {
      $set: {ship: 'The Milano 2'}
    }
  )


  db.bounties.find({
      hunters: {
          $in: ['Nebula']
      }
  })

  db.bounties.find({
    $or: [
        {
            ship: 'Waverider'
        },
        {
            ship: 'Serenity'
        }
    ]
})
