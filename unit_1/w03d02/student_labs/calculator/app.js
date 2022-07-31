$(() => {
    let array = []
    let firstnum = 0
    let secondnum = 0
    let otherArray = []
    const emptyArray = () => {
        array.length = 0
    }
console.log('yup')

	$('#1').on('click', () => {
        const inputVal = $("#1").get(0).id
        array.push(inputVal)
        
    })
    $('#2').on('click', () => {
        const inputVal = $("#2").get(0).id
        array.push(inputVal)
        console.log(inputVal)
    })
    $('#3').on('click', () => {
        const inputVal = $("#3").get(0).id
        console.log(inputVal)
    })
    $('#div-button').on('click', () => {
        const inputVal = '/'
        firstnum = array.join()
        
        otherArray.push(inputVal)
        emptyArray()
        console.log(otherArray)
    })
    $('#equal-button').on('click', () => {

        secondnum = array.join
        
        console.log(secondnum)
        emptyArray()
        calc()
    })
    // $('#8').on('click', () => {
    //     const inputVal = $("#8").get(0).id
    //     array.push(inputVal)
    // })
    $('#8').on('click', () => {
        const inputVal = $("#8").get(0).id
        array.push(inputVal)
        console.log(inputVal)
    })
    // $('#7').on('click', () => {
    //     const inputVal = $("#7").get(0).id
    //     console.log(inputVal)
    // })
    // $('#7').on('click', () => {
    //     const inputVal = $("#7").get(0).id
    //     console.log(inputVal)
    // })
    // $('#7').on('click', () => {
    //     const inputVal = $("#7").get(0).id
    //     console.log(inputVal)
    // })
    // $('#7').on('click', () => {
    //     const inputVal = $("#7").get(0).id
    //     console.log(inputVal)
    // })

    
const calc = () => {
    const result = firstnum + secondnum
    console.log(result)
}


})