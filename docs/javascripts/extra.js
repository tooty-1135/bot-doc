function reset() {
    document.getElementsByClassName("md-footer-copyright")[0].innerHTML = `<div class="md-footer-copyright__highlight">Copyright © 2021 - 2022 AD</div>`
}
window.onload = function() { //等待網頁載入完成
    reset()
};