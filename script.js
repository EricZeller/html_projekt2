let lightMode = localStorage.getItem("lightMode");

const lightModeToggle = document.querySelector("#icon");

const enablelightMode = () => {
    document.body.classList.add("lightMode");
    icon.src = "darkmode.png"
    localStorage.setItem("lightMode", "enabled");
}

const disablelightMode = () => {
    document.body.classList.remove("lightMode");
    icon.src = "lightmode.png"
    localStorage.setItem("lightMode", null);
}

if (lightMode === "enabled") {
    enablelightMode();
}

lightModeToggle.addEventListener("click", () => {
    lightMode = localStorage.getItem("lightMode");

    if (lightMode !== "enabled") {
        enablelightMode(); 
    } else {
        disablelightMode();
    }
});
