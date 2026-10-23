// ----------------------------------------------------
// SCRIPT PARA WHATSAPP Y PERSONALIZACIÓN DE INVITADO
// ----------------------------------------------------
const hostPhoneNumber = "50377665881";     
const params = new URLSearchParams(window.location.search);
const nameParam = params.get('nombre');
const passesParam = params.get('pases');

const guestName = nameParam ? nameParam.trim() : "Estimado/a invitado/a";
const guestPasses = passesParam ? passesParam.trim() : "1";

// Personalizar elementos en el HTML de forma segura
const greetingEl = document.getElementById('greeting');
if (greetingEl) {
  greetingEl.innerHTML = `¡Hola, <span class="guest-name">${guestName}</span>!`;
}

const guestPassesEl = document.getElementById('guest-passes');
if (guestPassesEl) {
  guestPassesEl.textContent = guestPasses;
}

const message = `¡Hola! Confirmo mi asistencia. Gracias por hacerme parte de este momento tan importante.`;
const whatsappUrl = `https://wa.me/${hostPhoneNumber}?text=${encodeURIComponent(message)}`;
    
const btnConfirm = document.getElementById('btn-confirm');
if (btnConfirm) {
  btnConfirm.setAttribute('href', whatsappUrl);
}


// ----------------------------------------------------
// SCRIPT DE INTRO Y ANIMACIONES
// ----------------------------------------------------
const intro = document.getElementById("intro");
const enterBtn = document.getElementById("enterBtn");
const footer = document.querySelector(".footer-countdown");

enterBtn.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: "instant"});
  intro.classList.add("fade-out");

  footer.style.opacity = "1";
  footer.style.visibility = "visible";
  footer.style.pointerEvents = "auto";
  
  // Eliminar el intro después de la animación
  setTimeout(() => {
    intro.remove();
    const elementos = document.querySelectorAll(".aparecer");

    elementos.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("activo");
      }, index * 300); 
    });

    document.querySelector(".timeline").classList.add("activo");
    timeline.classList.add("activo");
    events.forEach(event => observer.observe(event));
  }, 800); 
});


// ----------------------------------------------------
// SCRIPT DE CUENTA REGRESIVA
// ----------------------------------------------------
const targetDate = new Date("2026-12-08T15:30:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    document.getElementById("countdown").innerHTML = "¡Ya llegó el gran día!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);


// ----------------------------------------------------
// SCRIPT DE INTERSECTION OBSERVER PARA TIMELINE
// ----------------------------------------------------
const events = document.querySelectorAll(".event");
const timeline = document.querySelector(".timeline");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.3
  }
);