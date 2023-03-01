const qr = document.querySelector(".qr_code");
const block =document.querySelector(".promo_TikTok");
function togle(){
    qr.classList.toggle("hidden");
}
block.addEventListener("click", togle);