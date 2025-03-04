# logica-programacion-1: Ordenar 3 números.

Proyecto realizado sin dependencias externas, puro vanilla html, css y javascript.

Se exploró las maneras de realizar un navbar responsivo. (Para esto se estudia como lo hace bootstrap y el siguiente video: https://www.youtube.com/watch?v=VRrEquQfh88&ab_channel=TahmidAhmed) También se diagrama con css grid para desktop, ya que me fue imposible "centrar un logo" en el navbar con flexbox. No se si realmente es muy complicado realizarlo con flexbox o si es un caso perfecto para css grid.

Se explora el uso de SVG. No logré animar el icono del menú con la X: Debo encontrar herramienta correcta y/o aprender a dibujar en SVG.
Como referencia: https://css-tricks.com/animate-svg-path-changes-in-css/

Para la lógica de progrmación y la interactividad, limita al usuario a colocar solo números, exigiendo que ingrese los 3 números. Esto se realiza con javascript a través de la API del DOM y con verificación de los valores que se reciben desde los inputs y desplegando un error en el placeholder, en caso de que se envíe un input vacio.

Cosas por mejorar: 
* En vista mobile, click fuera del menú debería cerrarlo.
* Terminar boton que permite cambio de tema claro a oscuro.
* Lograr animar los iconos SVG para mostrar y ocultar el menú.
* Mejorar UX en celular (talvez que el header no sea sticky, o eliminar el título h1 para dejar más espacio.)
