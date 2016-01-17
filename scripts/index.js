import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ShoppingListContainer from "./containers/shoppingListContainer";
import reducer from "./reducer";

const store = createStore( reducer );

ReactDOM.render(
    <Provider store={ store }>
        <ShoppingListContainer />
    </Provider>,
    document.getElementById( "root" )
);
