(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btc-clear');
    let equal = document.querySelector('.btr-equals');

    buttons.forEach(function (element){
        element.addEventListener('click', () => {
            let value = element.value;
            screen.value += value;
        })
    })

    equal.addEventListener('click', () => {
        if(screen.value != ""){
           let result = eval(screen.value);
           screen.value = result;
        } 

    })

    clear.addEventListener('click', () => {
        //let disp = 0
        if(screen.value != ""){
            screen.value = "";
        }
    })
})();
console.log(typeOf(0));




//button.addEventListener('click', function(e){
    //let value = e.target.dataset.num;
   // screen.value += value