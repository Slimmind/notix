export default function noteCounter() {
    const colors = [];
    vars.DOM.noteFilters.innerHTML = "";

    for (const item of vars.tempStore) {
        if (item.itemType === "note") {
            colors.push(item.itemColor);
        }
    }

    const colorCount = colors.reduce((total, color) => {
        total[color] = (total[color] || 0) + 1;
        return total;
    }, {});

    for(const item in colorCount) {
        vars.DOM.noteFilters.insertAdjacentHTML("beforeend", `<strong class="filter" data-color="${item}" data-amount="${colorCount[item]}" style="background-color: ${item}"></strong>`
        );
    }
}