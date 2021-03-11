
const toggleNav = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const narutoRun = () => {
    document.querySelector('.naruto__event').addEventListener("click", () => {
        const naruto = document.createElement("img");
        naruto.classList.add("naruto", "run");
        naruto.src="images/naruto.gif";
        document.body.appendChild(naruto);
        const narutos = document.querySelectorAll(".naruto")
        narutos.forEach(oneNaruto => oneNaruto.addEventListener("animationend", () => oneNaruto.remove()))
    })
}
const sasukeRun = () => {
    document.querySelector('.hidden-leaf').addEventListener("click", () => {
        const sasuke = document.createElement("img");
        sasuke.classList.add("sasuke", "run");
        sasuke.src="images/sasuke.gif";
        document.body.appendChild(sasuke);
        const sasukes = document.querySelectorAll(".sasuke")
        sasukes.forEach(oneSasuke => oneSasuke.addEventListener("animationend", () => oneSasuke.remove()))
    })
}
window.onload=narutoRun();
window.onload=sasukeRun();

toggleNav.addEventListener('click', () => {
    document.body.classList.toggle("nav-open")
})

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove('nav-open')
    })
})

