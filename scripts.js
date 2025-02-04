const carrusel = document.querySelector('.carruseles');

carrusel.addEventListener('mouseover', () => {
    carrusel.style.animationPlayState = 'paused';
});

carrusel.addEventListener('mouseout', () => {
    carrusel.style.animationPlayState = 'running';
});


document.addEventListener("DOMContentLoaded", function () {
    const proyectosSection = document.querySelector(".proyectos");
    const proyectos = document.querySelectorAll(".card-proyecto");
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;
        const sectionTop = proyectosSection.getBoundingClientRect().top;
        
        if (sectionTop < triggerBottom && sectionTop > -proyectosSection.clientHeight) {
            proyectos.forEach((proyecto, index) => {
                setTimeout(() => {
                    proyecto.classList.add("visible");
                }, index * 200);
            });
        } else {
            proyectos.forEach((proyecto) => {
                proyecto.classList.remove("visible");
            });
        }
    }
    
    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});

document.getElementById('contactLink').addEventListener('click', function(event) {
    event.preventDefault(); // Para evitar que el enlace haga scroll
    var message = document.getElementById('message');
    message.style.display = 'block'; // Mostrar el mensaje
    setTimeout(function() {
      message.style.display = 'none'; // Ocultar el mensaje después de 3 segundos
    }, 3000);
  });


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);

    fetch("send_email.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("response").innerHTML = data;
    })
    .catch(error => console.error("Error:", error));
});

