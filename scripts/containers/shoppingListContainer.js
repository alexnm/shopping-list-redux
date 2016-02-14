import React from "react";
import ShoppingList from "../components/shoppingList";
import { addItem, checkItem, removeItem, saveList } from "../actions/listActions";
import { connect } from "react-redux";

const mapStateToProps = ( state ) => ( {
    shoppingList: state.shoppingList,
    busy: state.busy
} );

const mapDispatchToProps = ( dispatch ) => ( {
    onAddItem: ( name, qty, categoryIndex ) => {
        dispatch( addItem( name, qty, categoryIndex ) );
        dispatch( saveList( ) );
    },
    onCheckItem: ( index, categoryIndex ) => {
        dispatch( checkItem( index, categoryIndex ) );
        dispatch( saveList( ) );
    },
    onRemoveItem: ( index, categoryIndex ) => {
        dispatch( removeItem( index, categoryIndex ) );
        dispatch( saveList( ) );
    }
} );

const ShoppingListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( ShoppingList );

export default ShoppingListContainer;
