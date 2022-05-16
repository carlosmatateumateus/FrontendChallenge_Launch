let times = [
    document.querySelector('#days'),
    document.querySelector('#hours'),
    document.querySelector('#minutes'),
    document.querySelector('#seconds')
]

let finish = false
let timeTools = {
    setTime:
        () =>{
            times[3].textContent -= 1

            if (times[0].textContent == 0){
                finish = true
                for(timing in times){
                    times[timing].textContent = 0
                }

            }

            if (finish == false){
                if (times[1].textContent == 0){
                    times[0].textContent -= 1
                    times[1].textContent = 24
                }
                if (times[2].textContent == 0){
                    times[2].textContent = 60
                    times[1].textContent -= 1
                }
                if (times[3].textContent == 0){
                    times[3].textContent = 60
                    times[2].textContent -= 1
                }
            }
        }
    }

setInterval(()=>{
    console.log(timeTools.setTime())
}, 1000)
