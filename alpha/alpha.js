const alphaSlider = document.getElementById("alpha");
const alphaBox = document.getElementById("alphabox");
const alphaValue = document.getElementById("alphaValue");

function applyAlpha() {
    const a = parseFloat(alphaSlider.value);

    // update displayed alpha value
    alphaValue.textContent = a.toFixed(2);

    // foreground = white
    const F = 255;

    // background = mint (let's say 180)
    const B = 180;

    const blended = Math.floor(a * F + (1 - a) * B);

    alphaBox.style.background = `rgb(${blended}, ${blended}, ${blended})`;
}

alphaSlider.addEventListener("input", applyAlpha);
applyAlpha();


// ideas for next time:
// use the Real Gaussian Kernel 
// maybe-- allow user to upload an image and apply the filter to that image