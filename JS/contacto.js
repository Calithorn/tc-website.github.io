let content = document.getElementById("content");

var htmlcontenido = `
<header>
<div class="nav-bar">
  <a href="index.html"><img src="images/TC Logo Negro.png" alt="Black logo"></a>
  <nav>
    <ul>
      <li><a href="teams.html">Equipo</a></li>
      <li><a href="academy.html">Academia</a></li>
      <li><a href="store.html"><span class="store">Tienda</span></a></li>
      <li><a href="contact.html">Contacto</a></li>
    </ul>
    <div class="toggle-btn">
      <i class="fa-solid fa-bars"></i>
    </div>
  </nav>
  <div class="dropdown-menu">
    <li><a href="teams.html">Equipo</a></li>
    <li><a href="academy.html">Academia</a></li>
    <li><a href="store.html"><span class="store">Tienda</span></a></li>
    <li><a href="contact.html">Contacto</a></li>
  </div>
</div>
</header>

<main>
  <div class="hero">
    <form action="https://formsubmit.co/teamcloverlatam@gmail.com" method="POST">
      <div class="row">
        <div class="input-group">
          <input type="text" id="name" name="name" required>
        <label for="name"><i class="fa-regular fa-user"></i> Nombre</label>
        </div>
        <div class="input-group">
          <input type="text" id="number" name="number" required>
        <label for="number"><i class="fa-solid fa-phone"></i> Contacto</label>
        </div>
      </div>
      <div class="input-group">
        <input type="email" id="email" name="email" required>
      <label for="email"><i class="fa-regular fa-envelope"></i> Email</label>
      </div>
      <div class="input-group">
        <textarea  id="message" name="message" required rows="8"></textarea>
      <label for="message"><i class="fa-regular fa-message"></i> Mensaje</label>
      </div>
      <button type="submit">ENVIAR <i class="fa-regular fa-paper-plane"></i></button>
    </form>
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
`

content.innerHTML = htmlcontenido;

//toggle
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

//form input code to be sent to email
/*
const btn = document.querySelector("button");
const inputs = document.querySelector("form");

btn.addEventListener("click", () => {
  Email.send({
      Host: "smtp-relay.brevo.com",
      Username: "calibiolley.1@gmail.com",
      Password: "t84vzMWkgHadG0qb",
      To: "xyz@gm.com",
      From: inputs.elements["email"].value,
      subject: "correo de la pagina",
      body:
        inputs.elements["message"].value +
        inputs.elements["name"].value +
        inputs.elements["number"],
    })
    .then((msg) => alert("Te contactaremos pronto. Gracias"));
});
*/