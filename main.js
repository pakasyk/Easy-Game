let milliseconds = 1000;
let jump = 120;



let moveUp = () => {
    console.log(document.getElementsByClassName('minion').length);
    jump += 20;
    
    for (let i = 0; i < document.getElementsByClassName('minion').length; i++) {
        
        document.getElementsByClassName('minion')[i].style.height = jump + 'px';
       
       
    };
   
}

let moveDown = (element) => {
   jump -= 50;
    
    
}

let timer = setInterval(moveUp, milliseconds);