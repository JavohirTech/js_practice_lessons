let alertDiv = document.querySelector('.alert');
let success = document.querySelector('.success');

let alertText = `
<div>
<i class="fas fa-circle-check"></i><span>Success</span>
</div>
<i class="fas fa-close" onclick="removeAlert(this.parentElement)"></i>
`;

const showAlert = ()=>{
    let li = document.createElement('li');
    li.innerHTML=alertText;
    li.classList.add('alert__success')
    li.classList.add('show_alert')
    alertDiv.appendChild(li);
}

const removeAlert = (toast)=>{
    toast.classList.remove("show_alert")
    toast.classList.add("hide_alert")
    console.log(toast);
}

success.addEventListener('click', showAlert);

// alertText.addEventListener('click', removeAlert);