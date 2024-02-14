// Array de cores da paleta pré-definida
var colorPalette = ['#3e3e8a', '#4d8cad', '#4e9178', '#74ad61', '#b1aa6d', '#b3ac73', '#a7896b', '#bd706a', '#ab6bb6', '#655fa7']; // Adicione as cores que desejar

function buttonClicked(value) {
    // Create a new button element
    var button = document.createElement("button");
    button.innerText = value;
    button.className = "rain-drop";
    
    // Seleciona uma cor aleatória da paleta
    var randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    button.style.backgroundColor = randomColor;
    
    // Randomize the position of the button on the screen
    var xPosition = Math.random() * window.innerWidth;
    var yPosition = -50; // Start from the top of the screen
    
    button.style.left = xPosition + "px";
    button.style.top = yPosition + "px";
    
    // Append the button to the rain container
    document.getElementById("rainContainer").appendChild(button);
    
    // Set a timeout to remove the button after it falls off the screen
    setTimeout(function() {
        button.remove();
    }, 2000); // Adjust the duration as needed
}
