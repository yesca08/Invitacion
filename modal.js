

document.querySelector(".confirmaer").addEventListener("click", () => {
  const phone = "50370405514"; // sin + ni espacios
  const message = "Hola, confirmo mi asistencia a la boda";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});