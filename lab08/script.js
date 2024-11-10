function toggleMenu() {
    const nav = document.querySelector('.side-nav');
    if (nav.style.width === "250px") {
        nav.style.width = "0";
    } else {
        nav.style.width = "250px";
    }
}