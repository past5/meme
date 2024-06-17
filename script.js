// script.js

const canvas = document.getElementById('memeCanvas');
const context = canvas.getContext('2d');

const image = new Image();
image.src = 'meme_template.png'; // Replace with the correct path to your image
image.onload = () => {
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
};

function generateMeme() {
    const topText = document.getElementById('topText').value;
    const bottomText = document.getElementById('bottomText').value;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    context.font = '30px Arial';
    context.fillStyle = 'white';
    context.strokeStyle = 'black';
    context.textAlign = 'center';
    context.lineWidth = 2;

    context.fillText(topText, canvas.width / 2, 40);
    context.strokeText(topText, canvas.width / 2, 40);

    context.fillText(bottomText, canvas.width / 2, canvas.height - 20);
    context.strokeText(bottomText, canvas.width / 2, canvas.height - 20);
}

