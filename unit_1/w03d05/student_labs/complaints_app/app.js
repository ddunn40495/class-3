

$(()=>{
    let listItemsNum = 0


$('button').on('click', (event) => {
    event.preventDefault();
    $('#results-div').empty()
    listItemsNum = $('#input-box').val()
    console.log(listItemsNum)
    const cityName = ($(event.currentTarget).attr('id'))
    console.log(cityName)
    $.ajax({
        url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?city=" + cityName,
        type: "GET",
        data: {
          "$limit" : 5000,
          "$$app_token" : "uK9ogi4ivqXNEGf5cC8lQ9535"
        }
    }).done(function(data) {

        
        for (let i = 0; i < listItemsNum; i++) {
            const $newItem = $(`<h3> ${data[i].complaint_type}</h3> <button class="police" id="${data[i].unique_key}">WHAT DID THE POLICE DO</button>`) 
            $('#results-div').append($newItem)
            
        }
        $('.police').on('click', (event) => {
            const $eventId = ($(event.currentTarget).attr('id'))
            const $newDiv = $('<div>')
            $(event.target).append($newDiv)
            $.ajax({
                url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?unique_key=" + $eventId,
                type: "GET",
                data: {
                  "$limit" : 5000,
                  "$$app_token" : "uK9ogi4ivqXNEGf5cC8lQ9535"
                }
            }).done(function(data) {
              const $cops = $(`<h3>${data[0].resolution_description}</h3>`)
              console.log(data[0].resolution_description)
              $newDiv.append($cops)
            });
        })

        
    });






    
})

    

























})