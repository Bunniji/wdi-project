document.addEventListener("DOMContentLoaded", ()=>{
    let footerText = document.getElementById("footer-text");
    if(footerText){
        const date= new Date().getFullYear();
        footerText.innerHTML = date.toString();
    }

    let bunForm = {
        "formName": document.getElementById("name"),
        "formSurname": document.getElementById("surname"),
        "formEmail": document.getElementById("email"),
        "formNumber": document.getElementById("telephone"),
        "formAdditionalInfo": document.getElementById("additionalInfo"),
        "formDate": document.getElementById("date"),
        "formConsent": document.getElementById("consent"),
    }

    const date = new Date();
    const jsIsRetardedInDateStrings = date.toISOString().substring(0,10);
    if(bunForm.formDate){
        bunForm.formDate.value = jsIsRetardedInDateStrings;
        bunForm.formDate.min = jsIsRetardedInDateStrings;
    }

    let clearButton = document.getElementById("bun-form-clear");
    if(clearButton){
        clearButton.addEventListener("click",()=>{
            for(let formItem of Object.entries(bunForm)){
                if(formItem[1]){
                    formItem[1].innerHTML = "";
                    formItem[1].checked = false;
                    if(formItem[0]==="formDate"){
                        formItem[1].value = jsIsRetardedInDateStrings;
                    }else{
                        formItem[1].value = "";
                    }
                }
            }
        })
    }

    const bunModal = new bootstrap.Modal(document.getElementById('formSubmitModal'), {});
    let formSubmitButton = document.getElementById("bun-form-submit");
    if(formSubmitButton){
        formSubmitButton.addEventListener("click",()=>{
            let isValid = true;
            for(let formItem of Object.entries(bunForm)){
                if(!formItem[1].validity.valid){
                    isValid = false;
                }
            }
            if(isValid) {
                bunModal.show();
            }
        })
    }

})