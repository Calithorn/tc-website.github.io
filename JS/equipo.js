let content = document.getElementById ("content")

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
    <div class="team-title">
      <h1>valorant</h1>
    </div>
    <div class="teams-main-cont">
      <div class="card-team">
        <img src="teamsstyles/6.jpg" alt="jugador">
        <div class="hidden-text">
          <h2>Radiant</h2>
          <p>Ranked Rating: 1,240</p>
          <p>Wins: 90</p>
        </div>
        <h3>Zacarias Piedras</h3>

      </div>
      <div class="card-team">
        <img src="teamsstyles/1.jpg" alt="jugador">
        <div class="hidden-text">
          <h2>Radiant</h2>
          <p>Ranked Rating: 1,240</p>
          <p>Wins: 90</p>
        </div>
        <h3>Zacarias Piedras</h3>

      </div>
      <div class="card-team">
        <img src="teamsstyles/2.jpg" alt="jugador">
        <div class="hidden-text">
          <h2>Radiant</h2>
          <p>Ranked Rating: 1,240</p>
          <p>Wins: 90</p>
        </div>
        <h3>Zacarias Piedras</h3>

      </div>
      <div class="card-team">
        <img src="teamsstyles/3.jpg" alt="jugador">
        <div class="hidden-text">
          <h2>Radiant</h2>
          <p>Ranked Rating: 1,240</p>
          <p>Wins: 90</p>
        </div>
        <h3>Zacarias Piedras</h3>
      </div>
      <div class="card-team">
        <img src="teamsstyles/4.jpg" alt="jugador">
        <div class="hidden-text">
          <h2>Radiant</h2>
          <p>Ranked Rating: 1,240</p>
          <p>Wins: 90</p>
        </div>
        <h3>Zacarias Piedras</h3>

      </div>
      <div class="card-team">
        <img src="teamsstyles/5.jpg" alt="jugador">
        <div class="hidden-text">
          <h2>Radiant</h2>
          <p>Ranked Rating: 1,240</p>
          <p>Wins: 90</p>
        </div>
        <h3>Zacarias Piedras</h3>

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
  





`
content.innerHTML = htmlcontenido

//toggle btn script
const toggleBtn = document.querySelector('.toggle-btn')
    const toggleBtnIcon = document.querySelector('.toggle-btn i')
    const dropDownMenu = document.querySelector('.dropdown-menu')

    toggleBtn.onclick = function () {
      dropDownMenu.classList.toggle('open')
      const isOpen = dropDownMenu.classList.contains('open')

      toggleBtnIcon.classList = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars'
    }