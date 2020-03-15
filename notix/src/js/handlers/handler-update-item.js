export default function updateItem(itemIndex, itemData) {
    const type = itemData.itemType;
    const item = (type === 'todo') ? DOM.todoList.querySelectorAll('.item')[itemIndex] : DOM.noteList.querySelectorAll('.item')[itemIndex];
    item.querySelector('.item-title').textContent = itemData.itemTitle;
    item.querySelector('.item-text').textContent = itemData.itemText;
    if (type === 'todo') {
        item.querySelector('.todo-date').textContent = itemData.todoExpDate;
        item.setAttribute('class', `item todo ${itemData.todoStatus} ${checkOverDue(itemData)}`);
        item.setAttribute('data-todo-symbol', itemData.itemTitle.charAt(0));
    }
}