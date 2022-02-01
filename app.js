const container = document.querySelector(".container");
const URL = "https://picsum.photos/";

function getRandNum() {
    return Math.floor(Math.random() * 1000);
}
function loadImages(numImages = 25) {
    let i = 0;
    while (i < numImages) {
        const img = document.createElement('img');
        img.style.width = '300px'
        img.src = `${URL}${getRandNum()}`;
        container.appendChild(img);
        i++;
    }
}

loadImages();

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        loadImages();
    }
})