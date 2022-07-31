$(() => {
  $('.button').on('click', event => {
    event.preventDefault()

    // grab the number from the input box store it in a variable
    let userInput = $('input[type="number"]').val() || 10
    // console.log(userInput)

    //grab the borough based on the id of the clicked button store that as well
    let borough = $(event.target).attr('id')
    // console.log(borough)

    // set a link based on borough that was clicked on
    let link = `https://data.cityofnewyork.us/resource/fhrw-4uyv.json?borough=${borough}&agency=NYPD`

    console.log(link)

    $.ajax({
      url: link,
      type: 'GET',
      data: {
        $limit: userInput
      }
    })
      .then(
        reports => {
          for (let report of reports) {
            const $reports = $('.reports')

            const $div = $('<div>').appendTo($reports)

            const $h3 = $('<h3>')
              .text(report.descriptor)
              .appendTo($div)

            const $text = $('<p>')
              .text(report.resolution_description)
              .appendTo($div)
              .hide()

            const $policeButton = $('<button>')
              .text('What did the police do?')
              .appendTo($div)
              .on('click', event => {
                $(event.currentTarget)
                  .parent()
                  .children()
                  .eq(1)
                  .toggle()
              })
          }
        },
        err => {
          console.log(err)
        }
      )
      .catch(err => {
        console.log(err)
      })
  })
})
