let btn = document.querySelector('.burger');
let body = document.body;


btn.addEventListener('click', function(event) {
    event.stopPropagation();
    body.classList.toggle('open');
    document.addEventListener('click', function() {
        body.classList.remove('open');
    })
    document.querySelector('.header__mobile-nav').addEventListener('click', function(event) {
        event.stopPropagation();
    })

    document.querySelectorAll('.has-child__arrow').forEach((element, index) => {
        element.addEventListener('click', function() {
            element.classList.toggle('active')
            document.querySelectorAll('.sublist')[index].classList.toggle('active')
        })
    });
})