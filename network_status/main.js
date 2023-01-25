let inOnline = true;
let netStatus = document.getElementById('netStatus');

const checkConnection = async ()=>{
    try{
        const response = await fetch("https://jsonplaceholder.com/posts");
        inOnline = response.status >= 200 && response.status < 300
        console.log(inOnline, 200);
    }catch(error){
        inOnline = false;
        console.log(inOnline, 404);
    }

    if(inOnline == true){
        netStatus.innerHTML = "Online"
    }else{
        netStatus.innerHTML = "Offline"
    }
}

setInterval(checkConnection, 1000)