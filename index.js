import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

class ShoppingList extends React.Component {
    render( ) {
        return (
            <div>
                <div>
                    { this.props.items.map( ( item, index ) => ( <div key={ index }>{ item.name } - { item.qty }</div> ) ) }
                </div>
                <input ref={node => {
                    this.name = node;
                }} />
                <input ref={node => {
                    this.qty = node;
                }} />
                <button onClick={ ( ) => {
                    store.dispatch( {
                        type: "ADD_ITEM",
                        name: this.name.value,
                        qty: this.qty.value
                    } );
                    this.name.value = "";
                    this.qty.value = "";
                } }>Add Item</button>
            </div>
        );
    }
};

const reducer = ( state = [ { name: "test", qty: 2 } ], action ) => {
    switch ( action.type ) {
        case "ADD_ITEM":
            return [
                ...state,
                {
                    name: action.name,
                    qty: action.qty
                }
            ];
        default:
            return state;
    }
};

const store = createStore( reducer );

const render = () => {
    const rootElement = document.getElementById( "root" );

    ReactDOM.render(
        <ShoppingList items={ store.getState( ) } />,
        rootElement
    );
};

render();
store.subscribe( render );
