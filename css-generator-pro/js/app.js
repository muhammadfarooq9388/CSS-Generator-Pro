const previewBox =
document.getElementById("previewBox");

const cssOutput =
document.getElementById("cssOutput");

const shadowX =
document.getElementById("shadowX");

const shadowY =
document.getElementById("shadowY");

const blur =
document.getElementById("blur");

const spread =
document.getElementById("spread");

const radius =
document.getElementById("radius");

const color1 =
document.getElementById("color1");

const color2 =
document.getElementById("color2");

const angle =
document.getElementById("angle");

const opacity =
document.getElementById("opacity");

const glassBlur =
document.getElementById("glassBlur");

const themeBtn =
document.getElementById("themeBtn");

// Update Generator

function updateCSS() {

    const shadow =
        `${shadowX.value}px ${shadowY.value}px ${blur.value}px ${spread.value}px rgba(0,0,0,0.3)`;

    const gradient =
        `linear-gradient(${angle.value}deg, ${color1.value}, ${color2.value})`;

    const glassOpacity =
        opacity.value / 100;

    previewBox.style.boxShadow =
        shadow;

    previewBox.style.borderRadius =
        radius.value + "px";

    previewBox.style.background =
        gradient;

    previewBox.style.backdropFilter =
        `blur(${glassBlur.value}px)`;

    previewBox.style.opacity =
        1;

    cssOutput.value =
`/* CSS Generator Pro */

background: ${gradient};

border-radius: ${radius.value}px;

box-shadow: ${shadow};

backdrop-filter: blur(${glassBlur.value}px);

opacity: ${glassOpacity};
`;
}

// Copy CSS

function copyCSS() {

    navigator.clipboard.writeText(
        cssOutput.value
    );

    showToast(
        "CSS Copied"
    );
}

// Reset Controls

function resetControls() {

    shadowX.value = 10;
    shadowY.value = 10;
    blur.value = 20;
    spread.value = 0;

    radius.value = 20;

    color1.value = "#3b82f6";
    color2.value = "#22c55e";

    angle.value = 90;

    opacity.value = 20;
    glassBlur.value = 10;

    updateCSS();

    showToast(
        "Reset Complete"
    );
}

// Dark / Light Mode

themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light-mode"
        );

        if (
            document.body.classList.contains(
                "light-mode"
            )
        ) {

            themeBtn.textContent =
                "🌙 Dark Mode";

        } else {

            themeBtn.textContent =
                "☀ Light Mode";
        }
    }
);

// Toast

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );

    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    }, 2000);
}

// Event Listeners

[
shadowX,
shadowY,
blur,
spread,
radius,
color1,
color2,
angle,
opacity,
glassBlur
].forEach(input => {

    input.addEventListener(
        "input",
        updateCSS
    );
});

// Initial Load

updateCSS();