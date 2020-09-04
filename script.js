function calculateTip() {
    var billAmount =
document.getElementById("totalBill").value;
    var serviceQuality =
document.getElementById("satisfaction").value;
    var peopleAmount =
document.getElementById("peopleAmount").value;

    if (billAmount === "" || serviceQuality == 0) {
        alert("Please enter values");
        return;
    }
//check if this input is empty or less than or equal to 1    
if (peopleAmount === "" || peopleAmount <= 1) {
    peopleAmount = 1;
    document.getElementById("each").style.display =
    "none";
} else {
    document.getElementById("each").style.display =
    "block";
}
//Calculate tip
var total = (billAmount * serviceQuality) / peopleAmount;
//round to two decimal places
total = Math.round(total * 100) / 100;
//next line allows us to always have two digits after decimal point
total = total.toFixed(2);
//Display the tip
document.getElementById("totalTip").style.display =
"block";
document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display =
"none";
document.getElementById("each").style.display =
"none";

//Click to call function
document.getElementById("calculate").onclick =
function() {
    calculateTip();
};

//Event Listener 1 - First up, making the character count adjust below form 1
var keyup;                                                    

function characterCount(event) {                                   
  var textEntered, characterDisplay, counter, lastKey;          
  textEntered = document.getElementById('totalBill').value; 
  characterDisplay = document.getElementById('charactersLeft'); 
  counter = (5 - (textEntered.length));                  
  characterDisplay.textContent = counter;                        
}
el = document.getElementById('totalBill');                   
el.addEventListener('keyup', characterCount, false); 

/*Event Listener 2 - making a phrase pop up when the user has focus on the bottom form,
and then a new phrase pop up when they havent entered enough characters */

function checkPeople() {                     
    var people = el.value;                     
    if (people.length < 1) {                                     
      elMsg.textContent = 'please enter at least 1';
    } else {                                       
      elMsg.textContent = 'thank you!';                   
    }
  }
  
  function tipPeople() {                     
    elMsg.className = 'tip';                     
    elMsg.innerHTML = 'please enter at least 1'; 
  }
  
  var el = document.getElementById('peopleAmount');   
  var elMsg = document.getElementById('alertMessage');  
  
  // When the People input gains / loses focus, call functions above:
  el.addEventListener('focus', tipPeople, false);
  el.addEventListener('blur', checkPeople, false);

//Adding in local storage
if (window.localStorage) {

  var totalBill = document.getElementById('totalBill');
  var tipSatisfac = document.getElementById('satisfaction');
  var pplAmount = document.getElementById('peopleAmount');
  var finalTip = document.getElementById('totalTip');

  totalBill.value = localStorage.getItem('totalBill');  
 tipSatisfac.value = localStorage.getItem('satisfaction');      
 pplAmount.value = localStorage.getItem('peopleAmount');
 finalTip = document.getElementById('totalTip');

  totalBill.addEventListener('input', function () {    
    localStorage.setItem('totalBill', totalBill.value);
  }, false);

 tipSatisfac.addEventListener('input', function () {      
    localStorage.setItem('satisfaction', tipSatisfac.value);
  }, false);

  pplAmount.addEventListener('input', function () {    
    localStorage.setItem('peopleAmount', pplAmount.value);
  }, false);
  
  totalTip.addEventListener('tip', function () {    
    localStorage.setItem('totalTip', finalTip.value);
  }, false);

};


  