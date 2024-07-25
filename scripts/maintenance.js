
const elements = [
    { bg: '../assets/images/space-death-star.jpeg', object: '../assets/images/tie-fighter.png'},
    { bg: '../assets/images/cenimatic-fivem-bg.jpeg', object: '../assets/images/pdcarv3.png' },
    { bg: '../assets/images/ground-arm3v2.jpg', object: '../assets/images/tank-hdv2.png'  }
];

let currentIndex = 0;
let currentBgLayer = 1;

const title = document.getElementById('title');
const typewriter = new Typewriter(title, { loop: true, delay: 100, deleteSpeed: 25 });

typewriter
    .pauseFor(2500)
    .typeString('Construction')
    .pauseFor(2500)
    .deleteChars(20)
    .typeString('Maintenance')
    .pauseFor(3000)
    .start();


function changeBackground() {
    const object = document.getElementById('object');
    const bg1 = document.getElementById('bg1');
    const bg2 = document.getElementById('bg2');
    
    const newBg = elements[currentIndex].bg;

    // Slide out the current object
    object.classList.remove('slide-in');
    object.classList.add('slide-out');

    // Determine which background layer is currently visible and which to update
    const visibleLayer = currentBgLayer === 1 ? bg1 : bg2;
    const hiddenLayer = currentBgLayer === 1 ? bg2 : bg1;

    // Update the hidden layer's background image
    hiddenLayer.style.backgroundImage = `url(${newBg})`;

    // Fade out the visible layer and fade in the hidden layer
    visibleLayer.classList.add('fade-out');
    hiddenLayer.classList.remove('fade-out');

    // Update the object after the background transition
    setTimeout(() => {
        object.src = elements[currentIndex].object;
        object.classList.remove('slide-out');
        object.classList.add('slide-in');

        // Swap the current background layer
        currentBgLayer = currentBgLayer === 1 ? 2 : 1;

        currentIndex = (currentIndex + 1) % elements.length;
    }, 1000); // Match the transition duration
}

setInterval(changeBackground, 10000); // Change every 10 seconds

window.onload = changeBackground;