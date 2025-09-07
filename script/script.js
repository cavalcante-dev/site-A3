const cards = [
    {
        img: "./assets/images/integrantes/Leandro.svg",
        name: "LEANDRO CAVALCANTE",
        description: "Estudante",
    },
    {
        img: "",
        name: "MIGUEL ALCHAAR",
        description: "Estudante",
    },
    {
        img: "",
        name: "RICARDO ARAUJO",
        description: "Estudante",
    },
    {
        img: "./assets/images/integrantes/JP.svg",
        name: "JOÃO PEDRO GONÇALVES",
        description: "Estudante",
    },
    {
        img: "./assets/images/integrantes/Pedro.svg",
        name: "PEDRO MOREIRA",
        description: "Estudante",
    },
    {
        img: "./assets/images/integrantes/Vinicius.svg",
        name: "VINICIUS HENRIQUE",
        description: "Estudante",
    },
]

let currentIndex = 0;

const cardImage = document.getElementById("card-img")
const cardName = document.getElementById("card-name")
const cardDesc = document.getElementById("card-desc")
const dotsContainer = document.getElementById("dots")

cards.forEach((_, index) => {
    const dot = document.createElement("span")
    dot.addEventListener("click", () => showCard(index))
    dotsContainer.appendChild(dot)
})

const dots = dotsContainer.querySelectorAll("span")

function showCard(index) {

    currentIndex = index;
    cardImage.src = cards[index].img;
    cardName.textContent = cards[index].name;
    cardDesc.textContent = cards[index].description;

    dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index)
    })

}

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length
    showCard(currentIndex)
})

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length
    showCard(currentIndex)
})

showCard(0)