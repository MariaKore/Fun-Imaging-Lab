const slider = document.getElementById("gamma");
const box = document.getElementById("gammabox");
const gammaValue = document.getElementById("gammaValue");

function applyGamma() {
    const gamma = parseFloat(slider.value);

    // update displayed gamma value
    gammaValue.textContent = gamma.toFixed(2);

    // input brightness (0-1)
    const input = 0.5;

    // gamma correction formula
    const output = Math.pow(input, 1 / gamma);

    // convert to 0-255
    const brightness = Math.floor(output * 255);

    box.style.background = `rgb(${brightness}, ${brightness}, ${brightness})`;
}

slider.addEventListener("input", applyGamma);
applyGamma();