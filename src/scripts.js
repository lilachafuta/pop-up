window.onload=function(){
    let modal = document.getElementsByClassName("popup")[0];
    let trigger = document.getElementsByClassName("trigger")[0];
    let closeButton = document.getElementsByClassName("close-button")[0];
    let exitButton = document.getElementsByClassName("exit-button")[0];

    function toggleModal() {
        modal.classList.toggle("show-popup");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    exitButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);

    function checkForm(form) {
        if(!form.terms.checked) {
            alert("Please indicate that you accept the Terms and Conditions");
            form.terms.focus();
            return false;
        }
        return true;
    }
};