document.addEventListener("DOMContentLoaded", function() {
    var footerDate = document.getElementById("footer-date");
    var now = new Date();
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    footerDate.textContent = now.toLocaleDateString('es-ES', options);
});