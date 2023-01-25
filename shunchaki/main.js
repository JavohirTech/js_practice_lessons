let h1 = document.getElementById('matn');
console.log(h1.innerHTML);

h1.addEventListener('click', ()=>{
    navigator.clipboard.writeText(h1.innerHTML);
    h1.innerHTML = "Copied!"
})


console.log(navigator.clipboard.writeText());