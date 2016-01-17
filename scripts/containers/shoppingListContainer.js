import React from "react";
import ShoppingList from "../components/shoppingList";
import { addItem, checkItem, removeItem } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = ( state ) => ( {
    shoppingList: state.shoppingList
} );

const mapDispatchToProps = ( dispatch ) => ( {
    onAddItem: ( name, qty ) => dispatch( addItem( name, qty ) ),
    onCheckItem: ( index ) => dispatch( checkItem( index ) ),
    onRemoveItem: ( index ) => dispatch( removeItem( index ) )
} );

const ShoppingListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( ShoppingList );

export default ShoppingListContainer;
