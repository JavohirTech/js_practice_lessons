let container = document.querySelector('.container');
let colorPalette = document.querySelector('.colorPalette');
let refresh_btn = document.querySelector('.refresh_btn');

const maxBoxCount = 32;
const randomColor = ()=>{
    container.innerHTML = ""
    for(let i = 0; i<maxBoxCount; i++){
        let randomColor = Math.floor(Math.random()*0xffffff).toString(16);
        randomColor = `#${randomColor.padStart(6, 0)}`; 
        // console.log(randomColor)
        
        const colorBox = document.createElement('div');
        colorBox.classList.add('colorBox');
        colorBox.innerHTML = `
        <div class="colorPalette" style="background: ${randomColor}"></div>
        <span class="hexColor">${randomColor}</span>
        `
        container.appendChild(colorBox);
        
        colorBox.addEventListener('click', ()=>copyColor(colorBox, randomColor));
    }
}
randomColor();

const copyColor = (elem, hexVal)=>{
    let hexColor = elem.querySelector('.hexColor');

    navigator.clipboard.writeText(hexVal).then(()=>{
        hexColor.innerText = "Copied!"
    });
    
}

refresh_btn.addEventListener('click', randomColor)