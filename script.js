// Do your magic here!

// 1

function changeBackgroundColor() {

        let userColor = document.getElementById("container");
        userColor.style.background= 'blue'
      
    // document.getElementById("container").style.backgroundColor = "lightblue";
}


// 2

// function validate() {
//     if (document.getElementById("numb").value < 1 || document.getElementById("numb").value > 10) {
//         document.getElementById('demo').innerHTML = "invalid input";
//     } else {
//         document.getElementById('demo').innerHTML = "valid input";
//     }
// }
function validate() {
    let x = document.getElementById("numb").value;
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}

document.getElementById("myBtn").addEventListener("click", myFunction);

// 3


function myFunction() {

    alert("date and time: " + Date());
}



