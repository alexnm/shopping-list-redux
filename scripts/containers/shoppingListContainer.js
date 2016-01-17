import React from "react";
import ShoppingList from "../components/shoppingList";
import { addItem, checkItem, removeItem, clearList } from "../actions";

const ShoppingListContainer = React.createClass( {
    componentDidMount( ) {
        console.log( this.context.store );
        this.unsubscribe = this.context.store.subscribe( ( ) => this.forceUpdate( ) );
    },

    componentWillUnmount( ) {
        this.unsubscribe( );
    },

    render( ) {
        const { store } = this.context;
        const state = store.getState( );

        return (
            <ShoppingList shoppingList={ state.shoppingList }
                          onAddItem={ ( name, qty ) => store.dispatch( addItem( name, qty ) ) }
                          onCheckItem={ ( index ) => store.dispatch( checkItem( index ) ) }
                          onRemoveItem={ ( index ) => store.dispatch( removeItem( index ) ) }
                          onClearList={ ( ) => store.dispatch( clearList( ) ) }/>
        );
    }
} );

ShoppingListContainer.contextTypes = {
    store: React.PropTypes.object
};

export default ShoppingListContainer;
