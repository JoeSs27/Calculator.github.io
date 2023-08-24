document.addEventListener("DOMContentLoaded", function() {
    // Screen and button reference
    const screen = document.querySelector(".screen");
    const buttons = document.querySelectorAll(".btn");

    // Listener event for each button
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonPressed = button.textContent;

            if (buttonPressed === "AC") {   
                screen.textContent = "0";
            } else if (buttonPressed === "DEL") {
                if (screen.textContent.length === 1 || screen.textContent === "Error!") {
                    screen.textContent = "0";
                } else {
                    screen.textContent = screen.textContent.slice(0, -1);
                }
            } else if (buttonPressed === "=") {
                try {
                    screen.textContent = eval(screen.textContent);
                } catch {
                    screen.textContent = "Error!";
                }
            } else if (buttonPressed === "%") {
                const currentText = screen.textContent;
                const currentValue = parseFloat(currentText);
                const percentValue = currentValue / 100;
                screen.textContent = percentValue.toString();
            } else {
                if (screen.textContent === "0" || screen.textContent === "Error!") {
                    screen.textContent = buttonPressed;
                } else {
                    screen.textContent += buttonPressed;
                }
            }
        });
    });
});