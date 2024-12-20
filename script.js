// Анимация фона
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
for (let i = 0; i < 100; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.5
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
    });
    requestAnimationFrame(draw);
}
draw();

// Добавление котиков
function addCat() {
    const catGallery = document.querySelector(".cat-gallery");
    const newCat = document.createElement("img");
    newCat.src = `https://placekitten.com/${200 + Math.floor(Math.random() * 100)}/${200 + Math.floor(Math.random() * 100)}`;
    newCat.alt = "Котик";
    newCat.classList.add("cat");
    catGallery.appendChild(newCat);
}
