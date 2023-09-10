// Eventlistener with input and output box
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
