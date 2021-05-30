let icons = document.querySelectorAll('.fas');
let boxes = document.querySelectorAll('.box');

function handleDragStart(e) {
  this.style.opacity = '0.4';
  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd(e) {
  this.style.opacity = '1';

  icons.forEach(function (icon) {
    icon.classList.remove('over');
  });
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

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

  return false;
}

icons.forEach(function (icon) {
  icon.addEventListener('dragstart', handleDragStart, false);
  icon.addEventListener('dragend', handleDragEnd, false);
  icon.addEventListener('dragenter', handleDragEnter, false);
  icon.addEventListener('dragleave', handleDragLeave, false);
  icon.addEventListener('dragend', handleDragEnd, false);
});
