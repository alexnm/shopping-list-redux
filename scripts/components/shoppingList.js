import React from "react";
import ShoppingListItem from "./shoppingListItem";

export default ( { shoppingList, onAddItem, onRemoveItem, onCheckItem } ) => {
    if ( !shoppingList.categories ) {
        return <noscript/>;
    }

    const categories = shoppingList.categories.map( ( category, categoryIndex ) => {
        const items = category.items.map( ( item, index ) =>
            <ShoppingListItem key={ index }
                              item={ item }
                              onRemove={ ( ) => onRemoveItem( index, categoryIndex ) }
                              onCheck={ ( ) => onCheckItem( index, categoryIndex ) } />
        );

        let name, qty;

        return (
            <div key={ categoryIndex }>
                <h2>{ category.name }</h2>
                <div>
                    { items }
                </div>
                <input ref={ node => { name = node; } } />
                <input ref={ node => { qty = node; } } />
                <button onClick={ ( ) => {
                    onAddItem( name.value, qty.value, categoryIndex );
                    name.value = "";
                    qty.value = "";
                } }>Add Item</button>
            </div>
        );
    } );

    return (
        <div>
            { categories }
        </div>
    );
};
