function toggleSubmenu(id) {
  const submenu = document.getElementById(id);
  const isVisible = submenu.style.display === 'block';

  // Ocultar todos los submenús
  const allSubmenus = document.querySelectorAll('.submenu');
  allSubmenus.forEach((menu) => {
    menu.style.display = 'none';
  });

  // Mostrar el seleccionado si estaba oculto
  if (!isVisible) {
    submenu.style.display = 'block';
  }
}

function irInicio() {
  // Opcional: podrías hacer scroll al inicio o cambiar contenido
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const main = document.querySelector('.main-content');
  main.innerHTML = `
    <h2>Bienvenido a FIZZIX FUN</h2>
    <p>Tu espacio para aprender Matemática, Física y más, desde secundaria hasta universidad.</p>
  `;
}

