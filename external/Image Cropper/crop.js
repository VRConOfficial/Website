var imageHolder = document.getElementById('random');
imageHolder.style.display = "none";
var c = new Croppie(imageHolder, {
    viewport: { height: 300, width: 300, type: 'circle' },
    boundary: { height: 400, width: 400 },
    showZoomer: false
})

const doneButton = document.getElementById('btnDone')
const fileSelector = document.getElementById('upload')
let fileList;
let index = 0

fileSelector.addEventListener('change', (event) => {
    fileList = event.target.files;
    process(fileList[index]);

    if (doneButton.classList.contains('actionDone')) {
        doneButton.classList.remove('actionDone');
    }
})

doneButton.addEventListener('click', () => {
    console.log('done clicked');
    nextImage();
})

//setCroppie("../../src/assets/images/placeholder.webp")


async function process(file) {
    if (!file) {
        console.log("No files")
        return;
    }
    var imgURL = URL.createObjectURL(file);
    setCroppie(imgURL);
}


function setCroppie(url) {
    if (imageHolder.style.display == "none")
        imageHolder.style.display = "block";
    c.bind({
        url: url
    })
}

function nextImage() {
    if (fileList[index + 1]) {
        saveCrop(index);
        index++;


        var imgURL = URL.createObjectURL(fileList[index])
        setCroppie(imgURL)
    }
    else {
        saveCrop(index);
        imageHolder.style.display = "none";
        index = 0
    }
}

function saveCrop(index) {
    console.log("Saving")
    img = c.result({
        type: 'blob',
        size: 'viewport',
        format: 'jpeg',
        circle: true
    })
    
    var reader = new FileReader();
    reader.onloadend = function () {
        console.log(reader.result)
        var base64 = reader.result;
        var link = document.createElement("a");

        document.body.appendChild(link)

        link.setAttribute("href", base64)
        link.setAttribute("download", "Cropped_" + fileList[index].name)
        link.click();
    }

    console.log(img);
    reader.readAsDataURL(new Blob(img));
}