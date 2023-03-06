const qr = document.querySelector(".qr_code");
const block =document.querySelector(".promo_TikTok");
const arrow =  document.querySelector(".tt_arrow")
function togle(){
    qr.classList.toggle("hidden");
    block.classList.toggle("Tt_close");
}
block.addEventListener("click", togle);