const navegacion = document.getElementById('menu');
console.log(navegacion);

navegacion.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollBy({
        top: 800, // could be negative value
        left: 0,
        behavior: 'smooth'

    });
});