let content = document.getElementById("content")

let htmlcontenido = `

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
    <div class="main-cont">
      <div class="card-2">
        <h2 data-text="Equipo" class="card-text-style letterspacing ani-2 textbackground">Equipo</h2>
        <p class="card-text-style letterspacing textbackground">Conoce nuestro Equipo. Unete.</p>
        <a href="teams.html" class="btn card-text-style letterspacing textbackground">Mas <i
            class="fa-solid fa-angles-right"></i></a>
      </div>
      <div class="card-1">
        <h2 data-text="Academia" class="card-text-style letterspacing ani-1 textbackground">Academia</h2>
        <p class="card-text-style letterspacing textbackground">Conoce nuestra academia. Inica tu carera.</p>
        <a href="academy.html" class="btn card-text-style letterspacing textbackground">Mas <i
            class="fa-solid fa-angles-right"></i></a>
      </div>
      <aside>
        <div class="asidebar">
          <h3 class="letterspacing card-text-style textbackground">Merch:</h3>
          
          <div class="cursos">
            <div class="imgs">
              <a href="#"><img src="images/Team-Clover-Hoodie.png" alt="hoodie"></a>
            </div>
            <div class="imgs">
              <a href="#"><img src="images/Team-Clover-Cap.png" alt="hoodie"></a>
            </div>
            <div class="imgs">
              <a href="#"><img src="images/Team-Clover-Jacket.png" alt="hoodie"></a>
            </div>
          </div>
          <div class="cursos">
            <div class="imgs">
              <a href="#"><img src="images/Team-Clover-Hoodie.png" alt="hoodie"></a>
            </div>
            <div class="imgs">
              <a href="#"><img src="images/Team-Clover-Mask.png" alt="hoodie"></a>
            </div>
            <div class="imgs">
              <a href="#"><img src="images/Team-Clover-Mousepad.png" alt="hoodie"></a>
            </div>
          </div>
        </div>
        <div class="asidebar">
          <h3 class="letterspacing card-text-style textbackground">Cursos:</h3>
          
          <div class="cursos">
            <div class="imgs">
              <a href="#"><img src="images/Strategy2-in-esports-gaming.png" alt="hoodie"></a>
            </div>
            <div class="imgs">
              <a href="#"><img src="images/aim-in-esports-gaming.png" alt="hoodie"></a>
            </div>
            <div class="imgs">
              <a href="#"><img src="images/Strategy-in-esports-gaming.png" alt="hoodie"></a>
            </div>
          </div>
          <div class="cursos">
            <div class="imgs">
              <a href="#"><img src="images/Strategy2-in-esports-gaming.png" alt="hoodie"></a>
            </div>
            <div class="imgs">
              <a href="#"><img src="images/aim-in-esports-gaming.png" alt="hoodie"></a>
            </div>
            <div class="imgs">
              <a href="#"><img src="images/Strategy-in-esports-gaming.png" alt="hoodie"></a>
            </div>
          </div>
        </div>
    </aside>
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
          <a href="https://www.tiktok.com/@teamcloverlatam" target="_blank">
            <i class="fa-brands fa-tiktok"></i>
          </a>
      </div>
    </div>

  </footer>
    

`
content.innerHTML = htmlcontenido;

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
