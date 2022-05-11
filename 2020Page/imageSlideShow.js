let currentImage = 1

const handleNextButtonClick = () => {
    
    if(currentImage === 3){
        currentImage = currentImage
    } else {currentImage ++}
    
    console.log(currentImage)
}

const handlePreviousButtonClick = () => {
   
    if(currentImage === 0){
        currentImage = currentImage
    } else {currentImage --}
    
    console.log(currentImage)
}

let images = [
    'magenta2.webp',
    'magenta1.webp',
    'magenta3.webp',
    'magenta4.webp'
];
let imageTag = document.querySelector('.imageTag');
let i = 0;

function next() {
    if (i >= images.length - 1) {
        return false;
    }
    i++;
    imageTag.setAttribute('src', images[i]);
}
function previous() {
    if (i <= 0) {
        return false;
    }
    i--;
    imageTag.setAttribute('src', images[i]);
}