const qr = document.querySelector(".qr_code");
const block =document.querySelector(".promo_TikTok");
const arrow =  document.querySelector(".tt_arrow");
function togle(){
    qr.classList.toggle("showw");
    qr.classList.toggle("close");
    block.classList.toggle("Tt_close");
    arrow.classList.toggle("arrow_close");
}
block.addEventListener("click", togle);