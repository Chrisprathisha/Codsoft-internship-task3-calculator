document.addEventListener("DOMContentLoaded", function() {
    // Get necessary elements
    const inputBox = document.getElementById("inputBox");
    const buttons = document.querySelectorAll("button");

    // Add click event listener to each button
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonText = button.innerText;

            switch (buttonText) {
                case "AC":
                    inputBox.value = "0";
                    break;
                case "DEL":
                    inputBox.value = inputBox.value.slice(0, -1);
                    break;
                case "=":
                    try {
                        inputBox.value = eval(inputBox.value);
                    } catch (error) {
                        inputBox.value = "Error";
                    }
                    break;
                default:
                    inputBox.value = (inputBox.value === "0") ? buttonText : inputBox.value + buttonText;
                    break;
            }
        });
    });
});

