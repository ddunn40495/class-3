$(()=>{
    const $body = $('body')
    const $container = $('<div>').addClass('container')

    $body.append($container)
    
   



    const makeTriangle = (params) => {
        const $row = $('<div>').addClass('row')
        for (let i = 1; i <= params; i++) {
            // console.log(i)
            const $triangle = $('<div>').addClass('triangle')
            $row.append($triangle)
        }
        
        return $row
    }

    const makePyramid = (rows) => {
        for (let i = 0; i <= rows; i++) {
            console.log(i)
            $container.append(makeTriangle(i))
            
        }
    }


    makePyramid(6)















});