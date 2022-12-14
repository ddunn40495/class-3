$(() => {

    $('form').on('submit', (event) => {
        event.preventDefault();

        const userInput = $('input[type="text"]').val();
        // $('form').trigger('reset');

        $.ajax(
            {
                url: 'https://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput
            }
        ).then(
            (data) => { //success callback
                $('#title').html(data.Title);
                $('#year').html(data.Year);
                $('#rated').html(data.Rated);
            },
            (error) => { //fail callback
                console.log(error);
            }
        )


    })


})
