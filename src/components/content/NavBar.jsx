import Carrito from "./Carrito";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div id="nav" class="container-fluid">
        <a class="nav-link active">
            Mundo Mascotas
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Productos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contactos
              </a>
            </li>
            <Carrito/>
          </ul>
        </div>
      </div>
    </nav>
  );
}
//<button class="navbar-toggler"type="button"data-bs-toggle="collapse"data-bs-target="#navbarNav"aria-controls="navbarNav"aria-expanded="false"aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
export default NavBar;