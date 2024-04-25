document.addEventListener("DOMContentLoaded", ()=>{
    let footerText = document.getElementById("footer-text");
    if(footerText){
        const date= new Date().getFullYear();
        footerText.innerHTML = date.toString();
    }
})