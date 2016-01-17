const removeItem = index => ( {
    type: "REMOVE_ITEM",
    index: index
} );

const checkItem = index => ( {
    type: "CHECK_ITEM",
    index: index
} );

const addItem = ( name, qty ) => ( {
    type: "ADD_ITEM",
    name: name,
    qty: qty
} );

const clearList = ( ) => ( {
    type: "CLEAR_LIST"
} );

export {
    removeItem,
    checkItem,
    addItem,
    clearList
};
