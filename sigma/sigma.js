const sigmaSlider = document.getElementById("sigma");
const sigmabox = document.getElementById("sigmabox");
const sigmaValue = document.getElementById("sigmaValue");

function applySigma() {
    sigmabox.style.filter = `blur(${sigmaSlider.value}px)`;
    sigmaValue.textContent = sigmaSlider.value;
}

sigmaSlider.addEventListener("input", applySigma);
applySigma();