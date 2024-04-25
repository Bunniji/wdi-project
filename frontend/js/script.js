document.addEventListener("DOMContentLoaded", ()=>{
    let footerText = document.getElementById("footer-text");
    if(footerText){
        const date= new Date().getFullYear();
        footerText.innerHTML = date.toString();
    }

    let formDate = document.getElementById("date");
    const date = new Date();
    const jsIsRetardedInDateStrings = date.toISOString().substring(0,10);
    if(formDate){
        formDate.value = jsIsRetardedInDateStrings;
        formDate.min = jsIsRetardedInDateStrings;
    }
})