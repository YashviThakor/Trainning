document.addEventListener("DOMContentLoaded", () => {
    const draggables = document.querySelectorAll('.draggable');
    const container = document.getElementById('container');
    draggables.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.id);
            e.target.classList.add('dragging');
        });
        item.addEventListener('dragend', (e) => {
            e.target.classList.remove('dragging');
        });
    });
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggingItem = document.querySelector('.dragging');
        const afterElement = getDragAfterElement(container, e.clientY);
        if (afterElement) {
            container.insertBefore(draggingItem, afterElement);
        } else {
            container.appendChild(draggingItem);
        }
    });
    container.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggingItem = document.querySelector('.dragging');
        if (draggingItem && draggingItem.parentNode !== container) {
            container.appendChild(draggingItem);
        }
    });
    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            return offset < 0 && offset > closest.offset ? { offset, element: child } : closest;
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
});
