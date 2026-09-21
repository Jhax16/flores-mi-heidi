window.addEventListener("load", () => {

  document.body.classList.remove("container");

  const audio = document.getElementById("musica");

  audio.play().catch(() => {
    console.log("El navegador bloqueó el autoplay.");
  });

});
