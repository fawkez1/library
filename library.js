// 1. (13) Eventlistener with input and ouput box
// 2. (28) Age-Checker
// 3. (50) Counting loop, FizzBuzz.
// 4. (58) Removing multiple items from an array and returning the result
// 5. (78) Leap Years









/*
<body>
    <input class="inputBox" type="text" placeholder="Type in your favorite type of animal...">
    <p class="outputBox"></p>
</body>
*/
const inputBoxValue = document.querySelector(".inputBox");
const outputBoxValue = document.querySelector(".outputBox");

inputBoxValue.addEventListener("change", function () {
    const inputAnimal = inputBoxValue.value;
    const result = favoriteAnimal(inputAnimal);
    outputBoxValue.textContent = result;
})

function favoriteAnimal(animal) {
    return animal + " is my favorite animal";
}


// age-checker version 1
function checkAge(age) {
    return (age >= 18) || confirm ("allowance?");
}
// age-checker version 2
function checkAge(age) {
    return (age >= 18) ? confirm("allowance?");
}

// age-checker with prompt output
function checkAge(age) {
    return (age >= 18) ? true : confirm("allowance?");
}
const getAge = prompt("type your age");
let resultAge = checkAge(getAge);
alert(resultAge);

//Counting loop. Displays every number, until i reaches the value of 'number'. parseInt converts strings to numbers. fizzbuzz.
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  console.log(i);
}

// removing multiple items from an array and returning the result

const removeFromArray = function(list, ...number) {
   
    for (const num of number) { //num entspricht dem 
                                //eingabewert der funktion z.B 
                                //3, 5, 9, 22, usw.
    const index = list.indexOf(num); // der eingabewert wird
                                    // in einer neuen variable 
                                    // festgehalten "index"
                                    // dies passiert in jedem schleifen durchlauf erneut.
    if (index >= 0) {               // dann wird der wert verwendet
        list.splice(index, 1);
    }
    }
    return list;
    };


    // Leap Years
    const leapYears = function(year) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return true;
          } else {
            return false;
          }
        
    };
    
    // Do not edit below this line
    module.exports = leapYears;