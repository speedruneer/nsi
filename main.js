const button = document.getElementById("leftmenubutton");
const layout = document.getElementById("layout");

button.addEventListener("click", () => {
    layout.classList.toggle("open");
});
