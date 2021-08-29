/************************
 * Manejo del dom - objetos del documento
 * un documento html tiene objetos dentro del documento que maneja
 * manipular estructura html desde javascript por medio del dom
 * 
 * ****************************
 * Modelo de Objetos del Documento (DOM)
 * Los documentos html son estructuras de arbol implicitas
 * 
 * Etiquetas contenedoras (div, section, etc)
 * Ul es el padre de un li >.>
 */

/******
 * Examinando el dom
 * console.dir(document);
 * document.title = 'Nuevo titulo'; 
 * console.log(document.body); 
 * console.log(document.head); 
 * console.log(document.all[6]);
 * console.log(document.forms[0]);
 * console.log(document.links[0]);
 */

/**************
 * Obtener documentos por id, class o tag
 * getElementById() retorna uno o el primero si hay varios elementos conel mismo id
 * getElementsByClassName() retorna todos los objetos con esa clase
 */
/*
var headerTitle = document.getElementById('header-title');
headerTitle.textContent = "Victor's page";
headerTitle.innerHTML = "Wachuduin in ma swamp";
headerTitle.innerHTML = "<h3>Wachuduin in ma swamp<h3>";
*/

/**
querySelector

var header = document.querySelector('#main-header');
header.style.border = 'solid 4px #000';

var input = document.querySelector('input');
input.style.border = 'solid 4px #000';

//Misma manera de acceder el boton
var button = document.querySelector('input[type="submit"]');
var button2 = document.querySelector('.btn');
button2.value = 'Mandalo';

var liItem = document.querySelectorAll('.list-group-item');
liItem.forEach(element => {
    element.style.color = 'red';
});

var impar =  document.querySelectorAll('li:nth-child(odd)');
impar.forEach(element => {
    element.style.backgroundColor = '#ccc';
});
*/

//var itemList = document.querySelector('#items');

/*
Parent Node
console.log(itemList.parentNode);
var main = itemList.parentNode;
main.style.backgroudcolor = '#f4f4f4';
console.log(main);

Parent Element
console.log(itemList.parentElement);
var main = itemList.parentElement;
main.style.backgroudcolor = '#f4f4f4';
console.log(main);
*/

/*
Child nodes
console.log(itemList.childNodes);
*/

/*
Children
console.log(itemList.children);
*/

/*
firtsChild / firstElementChild
console.log(itemList.firstElementChild);
*/

/*
lastChild / lastElementChild
console.log(itemList.lastElementChild);
*/

/*
Son elementos hermanos los que estan en la misma linea
previousSiblig
previousElementSiblig
nextSiblig
nextElementSiblig
*/

/*
Crear elementos y nodos
createElement
createTextNode

var nuevoDiv = document.createElement('div');
nuevoDiv.className = 'wenas';
nuevoDiv.id = 'id_wenas';
nuevoDiv.setAttribute('title', 'a');

var item = document.createElement('li');
item.className = 'list-group-item';

var nodoTxt = document.createTextNode('nombre');
item.appendChild(nodoTxt);
console.log(item);
*/

/* Eventosssssssssssssssss
document.getElementById('items').addEventListener('click', function(){
    console.log('Lista');
});
*/ 

//document.getElementById('items').addEventListener('click', addItem);

//Agregar un elemento a la lista
var form = document.getElementById('add_form');
var itemList = document.querySelector('#items');

//Evento submit del form
form.addEventListener('submit', addItem);

//Evento click de la lista
itemList.addEventListener('click', deleteItem);

var filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItems);

//Agregar un item a la lista
function addItem(e){
    e.preventDefault();
    var input = document.querySelector('#item').value;
    var item = document.createElement('li');
    item.className = 'list-group-item';
    item.appendChild(document.createTextNode(input));

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    item.appendChild(deleteBtn);

    itemList.appendChild(item);
}

//Eliminar un item de la lista
function deleteItem(e){
    //Saber si en la clase esta el eliminar
    if(e.target.classList.contains('delete')){
        if(confirm('¿Seguro que desea eliminar el elemento?')){
            var liElement = e.target.parentElement;
            itemList.removeChild(liElement);
        }
    }
}

//Funcion para filtrar elementos de la lista
function filterItems(e){
    var txt = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemNombre = item.firstChild.textContent;
        if(itemNombre.toLocaleLowerCase().indexOf(txt) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}