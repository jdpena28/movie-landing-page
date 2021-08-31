var items = document.getElementsByClassName('nav-link');

function unselectItems() {
  for (var i = 0; i < items.length; i++) {  
    items[i].classList.remove('active-link','text-white');
  }
}

function selectItem(item) {
  unselectItems();
  item.classList.add('active-link','text');
}

function onItemClick(event) {
  selectItem(event.target);
}

for (var i = 0; i < items.length; i++) {  
  items[i].addEventListener('click', onItemClick);g