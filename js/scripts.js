/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// directivos Aparecen 3 y asi concecutivamente 

document.addEventListener("DOMContentLoaded", function () {
    const teamMembers = [
        {
            name: "Bruno Mantilla Pinto",
            role: "Fundador",
            imgSrc: "assets/img/team/1.jpg",
            instagram: "https://www.instagram.com/uniautonomadelcauca/",
            linkedin: "https://www.linkedin.com/school/corporaci%C3%B3n-universitaria-aut%C3%B3noma-del-cauca/"
        },
        {
            name: "Daniel Augusto Mantilla",
            role: "Rector",
            imgSrc: "assets/img/team/rector_5.png",
            instagram: "https://www.instagram.com/danielmantillas/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
            linkedin: "https://www.linkedin.com/in/daniel-augusto-mantilla-sandoval-39a03028/"
        },
        {
            name: "Isabel Ramírez Mejía",
            role: "Vicerrectora Académica",
            imgSrc: "assets/img/team/isabel_vice.png",
            instagram: "https://www.instagram.com/isabelramirezmejia/",
            linkedin: "https://www.linkedin.com/in/isabel-ramirez-mejia-a1b94229/?originalSubdomain=co"
        },
        {
            name: "Isabel Tobar Estrada",
            role: "Directora de Posicionamiento",
            imgSrc: "assets/img/team/isabel_5.png",
            instagram: "https://www.instagram.com/isabeltobar/",
            linkedin: "https://www.linkedin.com/in/daniel-augusto-mantilla-sandoval-39a03028/"
        },
        {
            name: "Julián Andrés Caicedo",
            role: "Vicerrector Investigación",
            imgSrc: "assets/img/team/julian_caisedo.png",
            instagram: "https://www.instagram.com/jac_tremere/?hl=es",
            linkedin: "https://www.linkedin.com/in/juli%C3%A1n-andr%C3%A9s-caicedo-mu%C3%B1oz-39b83839/?originalSubdomain=co"
        },
        {
            name: "Matilde Andrea López",
            role: "Jefe Comunidad Universitaria",
            imgSrc: "assets/img/team/2.jpg",
            instagram: "https://www.instagram.com/matildeandrealopezguerrero/?hl=es",
            linkedin: ""
        },
        {
            name: "Manuel Andrés Belalcázar",
            role: "Vicerrector Administrativo",
            imgSrc: "assets/img/team/1.jpg",
            instagram: "",
            linkedin: "https://www.linkedin.com/in/manuel-andres-belalcazar-579a5028/?originalSubdomain=co"
        },
        {
            name: "Óscar Alvarado Muñoz",
            role: "Director de Planeación y Evaluación",
            imgSrc: "assets/img/team/3.jpg",
            instagram: "",
            linkedin: ""
        },
        {
            name: "Santiago Muñoz de la Rosa",
            role: "Vicerrector de Relacionamiento con el Entorno",
            imgSrc: "assets/img/team/1.jpg",
            instagram: "",
            linkedin: ""
        },
        {
            name: "Juan Pablo Prado",
            role: "Decano Facultad Ciencias Ambientales y Desarrollo Sostenible",
            imgSrc: "assets/img/team/3.jpg",
            instagram: "",
            linkedin: "https://www.linkedin.com/in/juan-pablo-prado-medina-0a625969/"
        },
        {
            name: "Juan Pablo Sterling",
            role: "Decano Facultad Ciencias Sociales y Humanidades",
            imgSrc: "assets/img/team/1.jpg",
            instagram: "",
            linkedin: ""
        },
        {
            name: "Juan Pablo Diago",
            role: "Decano Facultad de Ingeniería y ciencias Naturales",
            imgSrc: "assets/img/team/3.jpg",
            instagram: "",
            linkedin: ""
        },
        
    ];

    const teamCarousel = document.getElementById("teamCarousel");

    teamMembers.forEach((member, index) => {
        const slide = document.createElement("div");
        slide.classList.add("col-lg-4", "team-member");

        slide.innerHTML = `
            <img class="mx-auto rounded-circle" src="${member.imgSrc}" alt="${member.name}" />
            <h4>${member.name}</h4>
            <p class="text-muted">${member.role}</p>
            <a class="btn btn-dark btn-social mx-2" href="${member.instagram}" aria-label="${member.name} Instagram Profile"><i class="fa-brands fa-instagram"></i></a>
            <a class="btn btn-dark btn-social mx-2" href="${member.linkedin}" aria-label="${member.name} LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
        `;

        teamCarousel.appendChild(slide);
    });

    let currentIndex = 0;
    showSlides();

    function showSlides() {
        const slides = document.getElementsByClassName("team-member");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (let i = currentIndex; i < currentIndex + 3; i++) {
            if (slides[i]) {
                slides[i].style.display = "block";
            }
        }

        currentIndex += 3;

        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }

        setTimeout(showSlides, 3000); // Cambia la diapositiva cada 5 segundos (ajusta según sea necesario)
    }
});


// Validar formulario 

function validarIdentidad() {
    // Obtener el valor del número de identidad ingresado
    var numeroIdentidad = document.getElementById('numeroIdentidad').value;

    // Verificar si el número de identidad es igual al esperado
    if (numeroIdentidad === '111111') {
        // Mostrar el formulario si el número de identidad es correcto
        document.getElementById('formulario').style.display = 'block';
    } else {
        // Mostrar una alerta si el número de identidad no es correcto
        alert('Debe inscribirse primero. El número de identidad no es válido.');
    }
}