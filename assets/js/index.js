$ (document).ready(function() {
    $("#info_personal").text("Hola! Mi nombre es Lissette Beatriz Lillo Bucarey, soy de la comuna de Maipu, Chile, tengo 38 años. Soy estudiante en un Bootcamp de desarrollo Front-End. Mi meta es terminar este curso, encontrar un trabajo relacionado a mis estudios y volver a estudiar en otro bootcamp, para lograr la carrera de diseñadora UX/UI, comencé realizando cursos de desarrollo de videojuegos, avanzando en esos cursos es que llegue al área de programación, la cual me gustó mucho, al averiguar sobre el tema conocí el diseño UX/UI y fue algo que me encantó, así que voy por ese camino.");
})

// document.getElementById('boton_enviar').onclick = function(){
//     alert('Gracias por contactarme');
// }
document.getElementById("contact_form").addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Gracias por contactarme')
    // document.getElementById("contact_form").style.display = "none"
   }
)