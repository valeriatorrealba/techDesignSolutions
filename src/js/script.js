const btnSubir = document.getElementById('btnSubir');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
    btnSubir.style.display = 'flex';
    } else {
    btnSubir.style.display = 'none';
    }
});

btnSubir.addEventListener('click', () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
});
