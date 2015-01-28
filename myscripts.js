var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");
var clearButton = document.querySelector(".clear");



var value1 = "";
var operators = ["*", "/", "+", "-"];
var store = "";
var value2 = "";





// Function for displaying / calculating
function Display() {
    displaytext.innerText += this.innerText;

    var value = this.innerText;

         if (value == "=")
             {
             var result;

                 switch (store) // States what operator is used and calculates the sum
                 {
                     case "+":
                         result = parseInt(value1) + parseInt(value2);
                         break;
                     case "-":
                         result = parseInt(value1) - parseInt(value2);
                         break;
                     case "*":
                         result = parseInt(value1) * parseInt(value2);
                         break;
                     case "/":
                         result = parseInt(value1) / parseInt(value2);
                         break;
                     default:
                         clear();
                 }
                 clear();
                 display.innerText = result;
                 displaytext.innerText = result;
                 value1 = result;


             }

         else // If there is no operator -> number will be put into value1
         {
             if (store == "")
             {
                 value1 += this.innerText;
             }

             else // If there is an operator -> number will be put into value2
             {
                 value2 += this.innerText;
             }
         }


        // Checking if there is an operator it will be checked and put into the switch
        if (operators.indexOf(this.innerText) != -1)
        {
            store = this.innerText;
        }
}


// When clicking on a button this for loop will run and use the function Display
for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", Display);

}






// Function to Clear Display when clicking on C button
function clear() {
  display.innerText = "";
  displaytext.innerText = " ";
  value1 = "";
  value2 = "";
  store = "";
}

// Clear Display on Button Click
clearButton.addEventListener('click', clear);



// Liam Boer    2014-2015    Media Development

