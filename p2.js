
const fecha = document.querySelector('#fecha')
const lista = document.querySelector('#lista')
const input = document.querySelector('#input')
const botonEnter = document.querySelector('#enter')
const check = 'fa-ceck-circle'
const uncheck = 'fa-circle'
let id = 0;
var totaltareas= 0;
// funcion que cambia lafecha con el dia 
const FECHA = new Date ()
fecha.innerHTML = FECHA.toLocaleDateString('es-MX',{weekday: 'long', month: 'short', day:'numeric'})

//funcion de agrgear la tarea
function agregarTarea (tarea,id,realizado,eliminado){

    if (eliminado){return}

    const REALIZADO = realizado ? check : uncheck
    const LINE = realizado ?lineThrough :'';
    const elemento = `
    <li id="elemento">
    <input type='checkbox' class='checks'>
      <p class="text ${LINE}">${tarea}</p>
      <i class="fas fa-trash de fa-trash-${id}" data="eliminado" id="${id}"></i> 
    </li> 
  `;

  lista.insertAdjacentHTML("beforeend", elemento);

  // Agregar evento para eliminar la tarea cuando se hace clic en el ícono de basura
  const eliminarIcono = document.querySelector(`.fa-trash-${id}`);
  eliminarIcono.addEventListener('click', () => {
   eliminarTarea(eliminarIcono);
  });
  //incrementarTarea();

  }
  function eliminarTarea(iconoBasura) {
    if (iconoBasura) {
      const contenedorElemento = iconoBasura.parentNode; // Obtener el contenedor del elemento (li)
      contenedorElemento.remove(); 
      //decrementarTareas (); // Eliminar el contenedor del elemento (li) del DOM
    }
  }


// funcion de agregar con icono de mas
 botonEnter.addEventListener('click',()=> {

    const tarea = input.value;
    console.log (tarea);
  console.log (id);
    
    if(tarea){
      agregarTarea(tarea,id,false,false)
    }
     input.value =''
      id++
 })
// funcion de agregar con tecla
 document.addEventListener('keyup', function(event){
    if(event.key=='Enter'){
        const tarea = input.value
        if (tarea){
            agregarTarea(tarea,id,false,false)
        }
        input.value=''
        id++
       }

 })
function incrementarTarea(){
 const div=document.getElementById('circle')
 totaltareas = totaltareas+1;
 div.textContent=totaltareas
actualizarEnPantalla();
}
 function decrementarTareas (){
 const div=document.getElementById('circle')
  totaltareas = totaltareas-1;
  div.textContent=totaltareas
  actualizarEnPantalla();
}
   function actualizarEnPantalla(){
   console.log('esteeseltotal'+totaltareas);
}
function taskDone(){
document.querySelectorAll('.checks')

}