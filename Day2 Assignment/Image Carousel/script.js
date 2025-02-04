let images = []; 
let index = 0; 
const imgElement = document.getElementById("carousel-image");
function addImage() {
    const imageUrl = document.getElementById("image-url").value;
    if (imageUrl.trim() !== "") {
        images.push(imageUrl);
        document.getElementById("image-url").value = "";
        if (images.length === 1) {
            displayImage(0);
        }
    }
}
function displayImage(idx) {
    if (images.length > 0) {
        imgElement.src = images[idx];
        imgElement.style.display = "block";
    }
}
function nextImage() {
    if (images.length > 0) {
        index = (index + 1) % images.length;
        displayImage(index);
    }
}
function prevImage() {
    if (images.length > 0) {
        index = (index - 1 + images.length) % images.length;
        displayImage(index);
    }
}
