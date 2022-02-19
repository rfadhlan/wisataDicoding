function Menu() {
    document.getElementById("menuDrop").classList.toggle("tampil");
}

window.onclick = function (menuGallery) {
    if (!menuGallery.target.matches('.btnMenu')) {
        var menuDrop = document.getElementById("menuDrop");
        if (menuDrop.classList.contains('tampil')) {
            menuDrop.classList.remove('tampil');
        }
    }
}