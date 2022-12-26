const  buttons = document.querySelectorAll('button');
const  second = document.querySelector('.second');
const  milsecond = document.querySelector('.milsecond');
const  start = document.querySelector('.start');
let sec = 0;
let milSec = 0;
let myInterval;

buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let element = e.currentTarget;
        if(element.classList=='stop'){
            clearInterval(myInterval)
            start.style.display= 'inline-block'
        } 
        
        if(element.classList=='restart'){
            start.style.display= 'inline-block'
            clearInterval(myInterval)
            sec = '0'
            milSec ='00'
            second.innerHTML = '0'+ sec;
            milsecond.innerHTML= milSec;
        } 

        myInterval = setInterval(time,10)
        function time(){
             if(element.classList=='start'){
            element.style.display = 'none'
            milSec ++;
            if(milSec < 10){
                milsecond.innerHTML ='0' + milSec;
            }
            else{
                milsecond.innerHTML = milSec;
            }
            if (milSec > 99){
                milSec = 0;
                sec ++;
            }
            if (sec < 10){
                second.innerHTML = '0'+ sec;
            }
            else{
                 second.innerHTML =  sec;
            }
            }
        } 
          
    }) 
})


