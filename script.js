document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)";
        });

        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });
});
document.addEventListener("DOMContentLoaded", function(){
    const imagen = doacument.getElementById("planta-img");
    const texto = document.getElementById("text-descripcion");
    imagen.addEventListener("click", function() {
        texto.classList.toggle("mostrar");
    });
});
function fijarDescripcion(elemento) {
    const plantas = document.querySelectorAll('.planta');
    plantas.forEach(planta => {
        if (planta !== elemento) {
            planta.classList.remove('fija');
        }
    });
    elemento.classList.toggle('fija');
}
function toggleDetalle(card) {
    const cards = document.querySelectorAll('.cos-card');
    cards.forEach(c => {
        if (c !== card) c.classList.remove('activa');
    });

    card.classList.toggle('activa');
}
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.planta-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
});document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formularioContacto");
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const errorNombre = document.getElementById("errorNombre");
    const errorCorreo = document.getElementById("errorCorreo");

    form.addEventListener("submit", function (e) {
        let valido = true;

        const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
        if (!nombreRegex.test(nombre.value)) {
            errorNombre.textContent = "Solo se permiten letras";
            errorNombre.style.display = "block";
            nombre.classList.add("invalid");
            valido = false;
        } else {
            errorNombre.textContent = "";
            errorNombre.style.display = "none";
            nombre.classList.remove("invalid");
        }

        if (!correo.value.includes("@") || !correo.value.includes(".")) {
            errorCorreo.textContent = "Correo inválido (falta @ o dominio)";
            errorCorreo.style.display = "block";
            correo.classList.add("invalid");
            valido = false;
        } else {
            errorCorreo.textContent = "";
            errorCorreo.style.display = "none";
            correo.classList.remove("invalid");
        }

        if (!valido) {
            e.preventDefault(); 
        } else {
            form.action = "https://formsubmit.co/plantitasbonitasweb@gmail.com";
            form.method = "POST";
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const advertencias = document.querySelectorAll('.advertencia');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.3
    });

    advertencias.forEach(advertencia => {
        observer.observe(advertencia);
    });
});