image_count = 5

r_n = 0

chooseImage = () => {
    r_n = Math.floor(Math.random() * image_count)
    document.getElementById("IMG").setAttribute("src", `images/image_${r_n}.png`)
}

chooseImage();

setInterval(
    () => {
        chooseImage();
    }, 5000 * 2
)