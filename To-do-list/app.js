let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

let inputArr=[];
inputArr.unshift(inputs.value);

function Add() {
    if(inputs.value == ""){
        alert("please enter a task");
    }
    else {
        let newTask = document.createElement("ul");
        newTask.innerHTML = `${inputs.value} <img src="cross.png" alt="">`;
        text.appendChild(newTask);
        inputArr.unshift(inputs.value);
        console.log(inputArr);
        // to clear search
        inputs.value=""; 
        // to remove task
        newTask.querySelector("img").addEventListener("click", remove);
        function remove (){
            newTask.remove();
            console.log(inputArr);

        }
        // to toggle task
        newTask.addEventListener(
            "click",
            function() {
                this.classList.toggle("done");
                console.log(inputArr);

            }
        )
    
    
    }
}












    // const allTask = document.querySelectorAll(".text");
    // const searchInputField = document.querySelector("input");
    // searchInputField.addEventListener('input', function(e){
    //     const searchStr = e.target.value;
    //     allTask.forEach(text=>{
    //         const eachElem = text.querySelectorAll('text');
    //         if(eachElemb )
    //         // console.log(text);
    //     })
    //     // console.log(e.target.value);
    // })

    //select all tr of table
// const allTr = document.querySelectorAll('#records tr');

// //get text as query from search text field
// const searchInputField = document.querySelector('#search');
// searchInputField.addEventListener('input', function (e) {
//    const searchStr = e.target.value.toLowerCase();
//    recordsDisplay.innerHTML = '';
//    allTr.forEach(tr => {
//       const td_in_tr = tr.querySelectorAll('td');
//       if (td_in_tr[0].innerText.toLowerCase().indexOf(searchStr) > -1) {
//          recordsDisplay.appendChild(tr);
//       }
//    });

//    if (recordsDisplay.innerHTML == '') {
//       recordsDisplay.innerHTML = ' No Records Found';
//    }
// });






