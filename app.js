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
