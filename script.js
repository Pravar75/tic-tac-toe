
let button = document.getElementById('start');
let nextStep = button.addEventListener("click" , nextpage);
let count = 0;
function nextpage(){
    let checkSelect = document.getElementById('accept').checked;
    console.log("Hello");
    if(checkSelect){
        location.replace("./htmlfinal.html");
    }
    else{
        let element = document.createElement('h3');
        element.innerHTML = "Checkbox Is Not Checked";
        element.id = 'resp';
        element.style.textAlign = 'center';
        document.body.appendChild(element);
    }
    if(count == 1){
    let ele = document.getElementById('resp');
    document.body.removeChild(ele);
    count = 0;
    }
    count++;
}

