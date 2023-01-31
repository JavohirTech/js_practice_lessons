let colorPickerBtn = document.getElementById("color-picker");
let colorList = document.querySelector('.all-colors');
const pickedColors = JSON.parse(localStorage.getItem("picked-colors") || "[]");
const allClear = document.querySelector('.clear-all');

const copyColor = (elem) => {
    console.log(elem);
    navigator.clipboard.writeText(elem.dataset.color);
    elem.textContent = "Copied!";
    setTimeout(() => elem.innerHTML = elem.dataset.color, 1000);
}

const showColors = () => {
    if (!pickedColors.length) return;
    colorList.innerHTML = pickedColors.map(color =>
        `
        <li class="color">
            <span class="rect" style="background: ${color}; border: 1px solid ${color == "#ffffff" ? "#ccc" : color}"></span>
            <span data-color="${color}" class="value">${color}</span>
        </li>
    `
    ).join('');

    document.querySelector(".picked-colors").classList.remove("hide");

    document.querySelectorAll(".color").forEach(li => {
        li.addEventListener('click', e => copyColor(e.currentTarget.lastElementChild));
    })
    console.log(colorList);
}
showColors();

const activeEyeDropper = () => {
    document.body.style.display = "none";
    setTimeout(async () => {
        try {
            const eyeDropper = new EyeDropper();
            const { sRGBHex } = await eyeDropper.open()
            navigator.clipboard.writeText(sRGBHex);

            if (!pickedColors.includes(sRGBHex)) {
                pickedColors.push(sRGBHex)
                localStorage.setItem("picked-colors", JSON.stringify(pickedColors));
                showColors();

            }

            console.log(pickedColors);
        } catch (e) {
            console.log("Failed to copy the color code!");
        }
        document.body.style.display = "block";
    }, 10)

}

const clearAllColors = () => {
    pickedColors.length = 0;
    localStorage.setItem("picked-colors", JSON.stringify(pickedColors));
    document.querySelector(".picked-colors").classList.remove("hide");
}

allClear.addEventListener('click', clearAllColors)
colorPickerBtn.addEventListener('click', activeEyeDropper)
