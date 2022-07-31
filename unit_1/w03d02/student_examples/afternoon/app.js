const data = [
    { name: "Megatron", address: "Cybertron" },
    { name: "Some guy", address: "Some street" },
    { name: "Grace Hopper", address: "Arlington, Virginia" },
    { name: "Ching Shih", address: "The High Seas" },
    { name: "Slimer", address: "The Library" },
    { name: "Umbra", address: "The Void" },
    { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
    { name: "Matt Huntington", address: "Remote" },
    { name: "Ronald McDonald", address: "Casa del McDonalds" },
    { name: "Jem", address: "Starlight Music" }
  ];

//   const $btn = $('.button')

  $(() => {
    const populateData = () => {
        for (let i=0; i < data.length; i++) {
            console.log(data[i]);
            const $infoContainer = $('<div>').addClass('info-container');
            const $nameDiv = $('<div>').addClass('name').text(data[i].name);
            const $addressDiv = $('<div>').addClass('address').text(data[i].address);
            $infoContainer.append($nameDiv);
            $infoContainer.append($addressDiv);
            $('body').append($infoContainer);
        }
    }

    const addData = (name, address) => {
        data.push({ name: name, address: address });
        $('body').empty();
        populateData();
      }
    

      



      $('.button').on('click', () => {
          console.log('click')
          addData('daniel', 'atlanta')
      })
  
  });