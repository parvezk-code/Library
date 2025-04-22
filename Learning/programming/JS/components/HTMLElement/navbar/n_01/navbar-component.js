class NavBar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header class="header">
          <div class="container">
  
            <a href="index.html" class="logo">
              <h1 class="sitename">Arsha</h1>
            </a>
  
            <nav class="navmenu">
              <ul class="nav-links">
                <li><a href="#hero" class="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li class="dropdown">
                  <a href="#"><span>Dropdown</span> <span class="arrow">&#9662;</span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">Dropdown 1</a></li>
                    <li class="dropdown">
                      <a href="#"><span>Deep Dropdown</span> <span class="arrow">&#9656;</span></a>
                      <ul class="dropdown-menu">
                        <li><a href="#">Deep Dropdown 1</a></li>
                        <li><a href="#">Deep Dropdown 2</a></li>
                        <li><a href="#">Deep Dropdown 3</a></li>
                        <li><a href="#">Deep Dropdown 4</a></li>
                        <li><a href="#">Deep Dropdown 5</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Dropdown 2</a></li>
                    <li><a href="#">Dropdown 3</a></li>
                    <li><a href="#">Dropdown 4</a></li>
                  </ul>
                </li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <div class="mobile-toggle">&#9776;</div>
            </nav>
  
            <a class="btn-getstarted" href="#about">Get Started</a>
          </div>
        </header>
      `;
    }
  }
  
  customElements.define('nav-bar', NavBar);
  