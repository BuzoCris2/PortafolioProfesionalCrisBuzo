
console.log("El archivo formato.js se ha cargado correctamente.");

window.addEventListener('scroll', function () {
    var scrollY = window.scrollY; // Obtén el desplazamiento vertical
    var ave = document.querySelector('.imagenAve');
    var ave2 = document.querySelector('.imagenAve2');

    // Ajusta estos valores para cambiar la escala y la velocidad del movimiento en X y Y
    var scale = 0.2 - scrollY * 0.0005; // Cambia la escala conforme al scrollY
    scale = Math.max(scale, 0.09); // Limita la escala mínima a 0.09

    var nuevaPosicionX1 = scrollY * 35;
    var nuevaPosicionY1 = scrollY * 15;

    var nuevaPosicionX2 = scrollY * 30;
    var nuevaPosicionY2 = scrollY * 9;

    ave.style.transform = 'scale(' + scale + ') translate(' + nuevaPosicionX1 + 'px, -' + nuevaPosicionY1 + 'px)';
    ave2.style.transform = 'scale(' + scale + ') translate(' + nuevaPosicionX2 + 'px, -' + nuevaPosicionY2 + 'px)';

    // Si scrollY es 0, vuelve a la escala inicial
    if (scrollY === 0) {
        ave.style.transform = 'scale(0.09) translate(0, 0)';
        ave2.style.transform = 'scale(0.06) translate(0, 0)';
    }
});

document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    const circGrande = document.getElementById('circGrande');
    const circPequeno = document.getElementById('circPequeno');

    // Mantener circGrande en el centro y rotar positivamente
    circGrande.style.transform = `rotate(${scrollPosition/15}deg)`;

    // Mantener circPequeno en el centro, escalar y rotar negativamente
    circPequeno.style.transform = `scale(0.65) rotate(${-scrollPosition/15}deg)`;
});

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btnCV');
    const btnText = btn.querySelector('.btnText');
    const btnSVG = btn.querySelector('.btnSVG');
    let animationRunning = false;

    btnSVG.style.opacity = 0; // Ocultar la imagen al principio

    btn.addEventListener('click', () => {
        if (animationRunning) {
            return;
        }

        btn.classList.add('clicked');
        animationRunning = true;

        setTimeout(() => {
            btnText.style.opacity = 0; // Ocultar el texto
            setTimeout(() => {
                btnSVG.style.opacity = 1; // Mostrar la imagen para la animación
                btnSVG.style.fill = 'var(--color-claro)'
            }, 1000); // Retraso de un segundo antes de mostrar la imagen
        }, 300); // Retraso para permitir una transición más suave

        setTimeout(() => {
            // Agrega una clase para los pequeños movimientos
            btnSVG.classList.add('small-movements');
            btnSVG.style.fill = 'var(--color-claro)';
        }, 2000);

        setTimeout(() => {
            // Elimina la clase de los pequeños movimientos
            btnSVG.classList.remove('small-movements');
            btnSVG.style.fill = 'var(--color-claro)';
        }, 2300); // Retraso después de los pequeños movimientos

        setTimeout(() => {
            // Vuelve a añadir la clase para mover el SVG hacia arriba y cambiar su color
            btnSVG.classList.add('move-up');
            btnSVG.style.fill = 'var(--color-claro)';
        }, 2400); // Retraso antes de elevar hacia arriba

        setTimeout(() => {
            btn.classList.remove('clicked');
            btnText.style.opacity = 1; // Mostrar el texto nuevamente
            btnSVG.classList.remove('move-up');
            btnSVG.style.opacity = 0; // Ocultar la imagen al finalizar la animación
            btnSVG.classList.add('exit'); // Añadir clase para mover la imagen fuera del botón
            btnSVG.style.zIndex = '999'; // Asegurar que la imagen esté sobre otros elementos
            btnSVG.style.position = 'absolute'; // Cambiar posición a absoluta para moverla fuera del botón
            btnSVG.style.top = '-50px'; // Mover la imagen hacia arriba
            btnSVG.style.transition = 'top 0.5s, color 0.5s'; // Añadir transición para suavizar el movimiento y cambio de color
            btnSVG.style.color = 'var(--color-azul)'; // Cambiar color de la imagen a var(--color-azul)
            setTimeout(() => {
                btnSVG.classList.remove('exit'); // Eliminar clase después de un retraso
                btnSVG.style.zIndex = ''; // Restaurar el valor predeterminado de zIndex
                btnSVG.style.position = ''; // Restaurar el valor predeterminado de position
                btnSVG.style.top = ''; // Restaurar el valor predeterminado de top
                btnSVG.style.transition = ''; // Restaurar el valor predeterminado de transition
                btnSVG.style.color = ''; // Restaurar el valor predeterminado de color
            }, 500); // Retraso antes de eliminar la clase
            animationRunning = false;
        }, 3000);
    });
});

const skillsData = {
    frontend: {
        images: [
            'img/html.png',
            'img/css.png',
            'img/javascript.png',
            'img/bootstrap.png',
            'img/figma.png'
        ],
        text: 'Lo que m\u00E1s me apasiona como desarrollador es ofrecer la interfaz m\u00E1s atractiva para la eficacia de una mejor experiencia de usuario.'
    },
    backend: {
        images: [
            'img/python.png',
            'img/c-sharp.png',
            'img/java.png',
            'img/sql.png',
            'img/c.png'
        ],
        text: 'D\u00EDa a d\u00EDa me capacito en herramientas que me permitan mejorar en la implementaci\u00F3n y construcci\u00F3n de servidores y su l\u00F3gica de negocios.'
    },
    design: {
        images: [
            'img/ilustrador.png',
            'img/photoshop.png',
            'img/blender.png'
        ],
        text: 'Todo profesional debe ser un artista de su \u00E1mbito, y el dise\u00F1o me permite darle vida a la creatividad y el deseo de cada cliente.'
    },
    cooking: {
        images: [
            'img/errorCocina.png'
        ],
        text: 'El cereal me queda rico, lo prometo.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const barras = document.querySelectorAll('.barra');
    const skillImages = document.querySelectorAll('.cuadroAppsHabilidades img');
    const skillText = document.querySelector('.cuadroTextoHabilidades p');
    const titles = document.querySelectorAll('.contHabilidades h2');
    let currentTitle = null;

    barras.forEach((barra, index) => {
        const fillPercentage = parseFloat(barra.getAttribute('data-fill'));
        const barraFill = barra.querySelector('.barra-fill');
        const fillText = barra.querySelector('.fill-text');

        // Crear una animación de keyframes única para cada barra
        const styleSheet = document.styleSheets[0];
        const keyframesName = `bounce-${index}`;
        const keyframes = `
            @keyframes ${keyframesName} {
                0% { height: 0; }
                20% { height: ${fillPercentage + 10}%; }
                40% { height: ${fillPercentage - 10}%; }
                60% { height: ${fillPercentage + 5}%; }
                80% { height: ${fillPercentage - 5}%; }
                100% { height: ${fillPercentage}%; }
            }
        `;

        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

        barra.addEventListener('mouseover', () => {
            barraFill.style.animation = `${keyframesName} 1s ease-in-out forwards`;
            fillText.textContent = `${fillPercentage}%`;
            fillText.style.opacity = '1';

            let skillType;
            switch (index) {
                case 0:
                    skillType = 'frontend';
                    break;
                case 1:
                    skillType = 'backend';
                    break;
                case 2:
                    skillType = 'design';
                    break;
                case 3:
                    skillType = 'cooking';
                    break;
                default:
                    skillType = 'frontend';
                    break;
            }

            const skillData = skillsData[skillType];

            skillImages.forEach((img, i) => {
                if (i < skillData.images.length) {
                    img.src = skillData.images[i];
                    img.style.display = 'block'; // Asegurarse de que la imagen se muestre
                } else {
                    img.style.display = 'none'; // Ocultar las imágenes sobrantes
                }
            });

            skillText.textContent = skillData.text;

            if (currentTitle) {
                currentTitle.style.color = 'var(--color-oscuro)';
            }
            currentTitle = titles[index];
            currentTitle.style.color = 'var(--color-rojo)';
        });

        barra.addEventListener('mouseleave', () => {
            barraFill.style.height = '0';
            fillText.style.opacity = '0';
            barraFill.style.animation = '';

            if (currentTitle) {
                currentTitle.style.color = 'var(--color-oscuro)';
                currentTitle = null;
            }

            let currentTitle;
            switch (index) {
                case 0:
                    currentTitle = titles[0];
                    break;
                case 1:
                    currentTitle = titles[1];
                    break;
                case 2:
                    currentTitle = titles[2];
                    break;
                case 3:
                    currentTitle = titles[3];
                    break;
                default:
                    currentTitle = titles[0];
                    break;
            }
            //currentTitle.style.color = 'var(--color-oscuro)';
        });
    });

    // Ocultar imágenes y texto inicialmente
    skillImages.forEach(img => {
        img.style.display = 'none';
    });
    skillText.textContent = '';
});

document.addEventListener('scroll', function () {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    var container2 = document.querySelector('.container2');
    var container3 = document.querySelector('.container3');
    var imagenEscalada = document.querySelector('#imagenEscalada'); // Asegúrate de seleccionar correctamente

    console.log('Scroll Top:', scrollTop);

    if (scrollTop >= 0 && scrollTop < 1000) {
        container2.classList.remove('visible');
        imagenEscalada.classList.remove('visible');
        container3.classList.remove('visible');
        container1.classList.add('visible');
        console.log('State 1');
    } else if (scrollTop >= 1000 && scrollTop < 2000) {
        container2.classList.add('visible');
        imagenEscalada.classList.add('visible');
        container3.classList.add('visible');
        container1.classList.remove('visible');
        console.log('State 2');
    } else if (scrollTop >= 2000 && scrollTop < 3000) {
        container2.classList.remove('visible');
        imagenEscalada.classList.remove('visible');
        container3.classList.add('visible');
        console.log('State 3');
    } else {
        container2.classList.remove('visible');
        imagenEscalada.classList.remove('visible');
        container3.classList.remove('visible');
        console.log('State 4');
    }
});

const modalProyectos = document.querySelector('.modalProyectos');
const modalProyectosCenfomon = document.querySelector('.modalProyectosCenfomon');
const modalProyectosSimepsi = document.querySelector('.modalProyectosSimepsi');
const modalProyectosArtem = document.querySelector('.modalProyectosArtem');

const opendModalSica = document.querySelector('.btnSica');
const opendModalCenfomon = document.querySelector('.btnCenfomon');
const opendModalSimepsi = document.querySelector('.btnSimepsi');
const opendModalArtem = document.querySelector('.btnArtem');

const modalSica = document.querySelector('.modalSica');
const modalCenfomon = document.querySelector('.modalCenfomon');
const modalSimepsi = document.querySelector('.modalSimepsi');
const modalArtem = document.querySelector('.modalArtem');

const closeModal = document.querySelector('.modalProyectos_close');
const closeModalCenfomon = document.querySelector('.modalProyectos_closeCenfomon');
const closeModalSimepsi = document.querySelector('.modalProyectos_closeSimepsi');
const closeModalArtem = document.querySelector('.modalProyectos_closeArtem');

const overlay = document.querySelector('.modal-overlay');

opendModalSica.addEventListener('click', (e) => {
    e.preventDefault();
    modalSica.classList.add('modalSica--show');
    overlay.classList.add('modal-overlay--show');
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modalProyectos.classList.remove('modalSica--show');
    overlay.classList.remove('modal-overlay--show');
});

opendModalCenfomon.addEventListener('click', (e) => {
    e.preventDefault();
    modalCenfomon.classList.add('modalCenfomon--show');
    overlay.classList.add('modal-overlay--show');
});

closeModalCenfomon.addEventListener('click', (e) => {
    e.preventDefault();
    modalProyectosCenfomon.classList.remove('modalCenfomon--show');
    overlay.classList.remove('modal-overlay--show');
});

opendModalSimepsi.addEventListener('click', (e) => {
    e.preventDefault();
    modalSimepsi.classList.add('modalSimepsi--show');
    overlay.classList.add('modal-overlay--show');
});

closeModalSimepsi.addEventListener('click', (e) => {
    e.preventDefault();
    modalProyectosSimepsi.classList.remove('modalSimepsi--show');
    overlay.classList.remove('modal-overlay--show');
});

opendModalArtem.addEventListener('click', (e) => {
    e.preventDefault();
    modalArtem.classList.add('modalArtem--show');
    overlay.classList.add('modal-overlay--show');
});

closeModalArtem.addEventListener('click', (e) => {
    e.preventDefault();
    modalProyectosArtem.classList.remove('modalArtem--show');
    overlay.classList.remove('modal-overlay--show');
});

const btnForm = document.getElementById('buttonFormConozc');

document.getElementById('formConozc')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btnForm.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_2ce489z';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btnForm.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                btnForm.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });


document.addEventListener('mousemove', function (e) {
    // Calcula el centro de la ventana
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Calcula el movimiento relativo del mouse desde el centro
    const deltaX = (e.clientX - centerX) / centerX;
    const deltaY = (e.clientY - centerY) / centerY;

    // Ajusta las imágenes según el movimiento del mouse
    document.querySelector('.image-cristopher').style.transform = `translateX(${-deltaX * 10}px)`;
    document.querySelector('.image-silueta').style.transform = `translateX(${deltaX * 15}px)`;
});
