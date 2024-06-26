const NavDropDown = document.querySelector ('.nav-dropdown');
const Boton = document.querySelector ('.boton');

Boton.onclick = function (){
    NavDropDown.classList.toggle('open');
}