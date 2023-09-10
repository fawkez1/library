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

