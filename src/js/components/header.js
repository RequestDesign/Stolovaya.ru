const searchSelect = document.querySelector('.search-select');

searchSelect.addEventListener('input', resizeInput);
resizeInput.call(searchSelect)

function resizeInput() {
    this.style.width = this.value.length + 'em'
}
