let input = document.querySelector('input');
let addBtn = document.querySelector('.fa-plus');
let root = document.querySelector('.root');
let dragSrcEl = null;

function addItem(itemVal) {
    let li = document.createElement('li');
    li.innerText = itemVal;
    li.setAttribute('draggable', true);
    li.addEventListener('dragstart', handleDragStart, false);
    li.addEventListener('dragover', handleDragOver, false);
    li.addEventListener('dragenter', handleDragEnter, false);
    li.addEventListener('dragleave', handleDragLeave, false);
    li.addEventListener('dragend', handleDragEnd, false);
    li.addEventListener('drop', handleDrop, false);
    root.append(li);
}

addBtn.addEventListener('click', (event) => {
    let itemVal = event.srcElement.previousElementSibling.value;
    addItem(itemVal);
    event.srcElement.previousElementSibling.value = '';
});

function handleDragStart(e) {
    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

function handleDragEnd(e) {
    this.style.opacity = '1';
    this.classList.remove('over');
}

function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragEnter(e) {
    this.classList.add('over');
}

function handleDragLeave(e) {
    this.classList.remove('over');
}

function handleDrop(e) {
    e.stopPropagation(); 
    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    this.classList.remove('over');
    return false;
}