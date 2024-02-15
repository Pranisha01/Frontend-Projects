let inputArr= [];

let i = 0;
let timerId = setInterval(function(){
    i++;
    console.log(i);

    inputArr.unshift(i);
    console.log(inputArr);
    
    document.getElementById("countdowntimer").textContent = i;
    
    if (i >= 10) {
 		clearInterval(timerId);
         	}
},1000);




