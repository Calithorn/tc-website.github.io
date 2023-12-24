let content = document.getElementById("content");

var htmlcontenido = `

<header>
<div class="nav-bar">
  <a href="index.html"><img src="images/TC Logo Negro.png" alt="Black logo" /></a>
  <nav>
    <ul>
      <li><a href="teams.html">Equipo</a></li>
      <li><a href="academy.html">Academia</a></li>
      <li><a href="store.html"><span class="store">Tienda</span></a></li>
      <li><a href="contact.html">Contacto</a></li>
    </ul>
    <<div class="toggle-btn">
    <i class="fa-solid fa-bars"></i></div>
  </nav>
  <div class="dropdown-menu">
    <li><a href="teams.html">Equipo</a></li>
    <li><a href="academy.html">Academia</a></li>
    <li><a href="store.html"><span class="store">Tienda</span></a></li>
    <li><a href="contact.html">Contacto</a></li>
  </div>
</div>
</header>

<main class="underconstruction-cont">
<!--
<div class="underconstruction-cont">
  <div class="undercons-tex">
    <h2>En construcción. Pronto disponible.</h2>
  </div>
</div>
  -->
<div class="container row">
  <div class="mt-5 col-lg-4">
    <div class="jumbotron background">
      <h1 class="display-4">Aim</h1>
      <p class="lead">Funcionan los Aim Trainers?</p>
      <hr class="my-2" />
      <p>Mas Informacion:</p>
      <p class="lead">
        <a class="btn btn-outline-success btn-lg" href="Jumbo action link" role="button">Suscribete</a>
      </p>
    </div>
  </div>
  <div class="mt-5 col-lg-4">
    <div class="jumbotron background">
      <h1 class="display-4">Movement</h1>
      <p class="lead">Movimiento o ubicacion?</p>
      <hr class="my-2" />
      <p>Mas Informacion:</p>
      <p class="lead">
        <a class="btn btn-outline-success btn-lg" href="Jumbo action link" role="button">Suscribete</a>
      </p>
    </div>
  </div>
  <div class="mt-5 col-lg-4">
    <div class="jumbotron background">
      <h1 class="display-4">Team work</h1>
      <p class="lead">sabes trabajar en equipo?</p>
      <hr class="my-2" />
      <p>Mas Informacion:</p>
      <p class="lead">
        <a class="btn btn-outline-success btn-lg" href="Jumbo action link" role="button">Suscribete</a>
      </p>
    </div>
  </div>
</div>



</main>
<footer>
<div class="redes-sociales">
  <h3>Siguenos</h3>
  <div class="red-enlaces">
    <a href="https://www.facebook.com/teamcloverlatam/" target="_blank">
      <i class="fa-brands fa-facebook"></i>
    </a>
    <a href="https://twitter.com/TeamCloverLatam" target="_blank">
      <i class="fa-brands fa-twitter"></i>
    </a>
    <a href="https://www.instagram.com/teamcloverlatam/" target="_blank">
      <i class="fa-brands fa-instagram"></i>
    </a>
    <a href="https://www.youtube.com/@teamcloverlatam" target="_blank">
      <i class="fa-brands fa-youtube"></i>
    </a>
    <a href="https://www.tiktok.com/@teamcloverlatam" target="_blank">
      <i class="fa-brands fa-tiktok"></i>
    </a>
  </div>
</div>
</footer>


`;
content.innerHTML = htmlcontenido;

//toggle btn script
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
