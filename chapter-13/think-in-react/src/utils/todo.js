export function addToDo(state, text) {
    return [...state, { id: Date.now(), text: text, completed: false }];
}
