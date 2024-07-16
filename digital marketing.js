document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("contactFormModal");
    var btn = document.getElementById("contactButton");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    showSlide(currentSlide);
    
    var projectItems = document.querySelectorAll('.project-item');
    var projectImage = document.querySelector('.project-image img');

    projectItems.forEach(function (item) {
        item.addEventListener('click', function () {
            projectItems.forEach(function (el) {
                el.classList.remove('active');
            });
            item.classList.add('active');
            var imageSrc = item.getAttribute('data-image');
            projectImage.src = imageSrc;
        });
    });
});
