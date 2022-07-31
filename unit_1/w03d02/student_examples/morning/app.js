$(() => {
    
    const randColorRGB = () => {
        const red = Math.floor( Math.random() * 256 );
        const green = Math.floor( Math.random() * 256 );
        const blue = Math.floor( Math.random() * 256 );
        return `rgb(${red}, ${green}, ${blue})`
    }
    
    const addH2 = () => {
      const $h2 = $('<h2>Just getting started</h2>');
      $('body').append($h2);
    }
  
    addH2();

    const generateSquares = (numberOfSquares) => {
        for (let i = 1; i <= numberOfSquares; i++) {
            console.log(i)
            const $square = $('<div>').addClass('square')
            const color = randColorRGB()
            $square.css('background-color', color)
            $square.text(i)
            $square.attr('id', 'square' + i);
            $('body').append($square)
            
        }
    }

    generateSquares(1000);






  });