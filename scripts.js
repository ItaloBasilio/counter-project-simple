  // setTimeout(() => {
            
        // }, timeout);

        // setTimeout(function(){
        //     alert("Executei")
        // }, 3000);

        
        let number = 0
        let cron
        let h2 = document.querySelector('h2')

        function start(){

            cron= setInterval(() => {
                number++;
                h2.innerHTML = number;
            }, 1000);
        }

        function stop(){
            clearInterval(cron)
            number = 0;
            h2.innerHTML = number;
        }

        
        // let intervalId;
        // let number = 0;
    
        // function start() {
        //     const counterNumber = document.querySelector(".counter");
        //     counterNumber.innerHTML = number;
    
        //     intervalId = setInterval(() => {
        //         number++;
        //         counterNumber.innerHTML = number;
        //     }, 1000);
        // }
    
        // function stop() {
        //     clearInterval(intervalId);
        //     // Resetar o valor para 0 ao parar o contador
        //     number = 0;
        //     const counterNumber = document.querySelector(".counter");
        //     counterNumber.innerHTML = number;
        // }
        
            
        
