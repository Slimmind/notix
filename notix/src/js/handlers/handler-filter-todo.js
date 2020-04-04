import renderItems from "../modules/render-items";

export default function filterTodoHandler(target) {
    let filteredItems = [];

    if(target.classList.contains("urgent")) {
        filteredItems = vars.tempStore.filter(item => item.todoStatus === "urgent");
    } else if(target.classList.contains("warning")) {
        filteredItems = vars.tempStore.filter(item => item.todoStatus === "warning");
    } else {
        filteredItems = vars.tempStore.filter(item => item.todoStatus === "normal");
    }

    renderItems(filteredItems);
}