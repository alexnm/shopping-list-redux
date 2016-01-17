import React from "react";
import ShoppingListItem from "./shoppingListItem";

export default ( { shoppingList, onAddItem, onRemoveItem, onCheckItem, onClearList } ) => {

    const items = shoppingList.map( ( item, index ) =>
        <ShoppingListItem key={ index }
                          item={ item }
                          onRemove={ ( ) => onRemoveItem( index ) }
                          onCheck={ ( ) => onCheckItem( index ) } />
    );

    let name, qty;

    return (
        <div>
            <div>
                { items }
            </div>
            <input ref={ node => { name = node; } } />
            <input ref={ node => { qty = node; } } />
            <button onClick={ ( ) => {
                onAddItem( name.value, qty.value );
                name.value = "";
                qty.value = "";
            } }>Add Item</button>
        </div>
    );
};
