$(document).ready(() => {

    const numOfPics = 20
    let score = 0
    function play() {

        const picContainer = $("#picContainer")
        const pics = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5', 'pic6', 'pic7', 'pic8']
        let currentPicOrder = []
        let timer = 10
    
        function addPicElement() {
            let markup = ""
            for(let i = 0; i < numOfPics; i++) {
                let pic = pics[Math.floor(Math.random() * pics.length)]
                currentPicOrder.push(pic)
                markup = `<div id='pic${i}' class='grid-item'></div>`
                picContainer.append(markup)
                $(`#pic${i}`).append(`<img id='img${i}' src='./assets/${pic}.png' width='100%'>`)
    
            }
        }
    
        function hidePics() {
            for(let i = 0; i < numOfPics; i++) {
                $(`#img${i}`).remove()
            }
        }
    
        function handelClickEvent(){
            $('#picContainer div').click((e) => {
                let id = e['target'].id.slice(-1)
                e['target'].innerHTML = `<img id='img${id}' src='./assets/${currentPicOrder[id]}.png' width='100%'></img>`
                handelScore(currentPicOrder[id])
                $(`#${e['target'].id}`).unbind()
            })
        }
    
        let picChoice = ''
        function handelScore(pic) {
            if(pic == picChoice) {
                score++
                $('#score').html('Score: ' + score)
                picChoice = ''
            } else {
    
                picChoice = pic
            }
        }
    
    
        addPicElement()
        id = setInterval(() => {
            $('#timer').html(`00:${timer}`)
            timer--
            console.log(timer)
            if (timer == 0) {
                clearInterval(id)
                $('#timer').css('background-color', 'rgb(128, 240, 133)')
                $('#timer').html('00:00')
            }
        }, 1000)
        setTimeout(() => {
            hidePics()
            handelClickEvent()
            console.log(currentPicOrder)
        }, 10000)
    }
    
    $('#replay').click(() => {
        for(let i = 0; i < numOfPics; i++) {
            $(`#pic${i}`).remove()
        }
        score = 0
        $('#score').html(`Score: ${score}`)
        $('#timer').css('background-color', 'lightcoral')
        play()
    })

})

