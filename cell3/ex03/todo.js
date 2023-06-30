var contador = 0;

function anadir () {
    var tarea = prompt ("Introduce nueva tarea");

    if (tarea != null) {
        contador ++;
        var box2 = document.getElementById('tareas');
        box2.insertAdjacentHTML("afterbegin", "<div id=\"" + contador + "\"><li>" + tarea + "</li><button onclick=\"borrar('" + contador + "')\">X</button></li></div>");

    }
}

function borrar(contador){
    if (confirm("¿Quieres borrarlo?"))
    {
      document.getElementById(contador).style.display='none';
    }} 