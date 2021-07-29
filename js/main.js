const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.lgn-btn');
const closeBtn = document.querySelector('.close');

loginBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

function openModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}
function outsideClick(e) {
    if(e.target == modal){
        closeModal();
    }
}