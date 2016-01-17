import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ShoppingListContainer from "./containers/shoppingListContainer";
import Footer from "./containers/footer";
import reducer from "./reducer";

const store = createStore( reducer );

ReactDOM.render(
    <Provider store={ store }>
        <div>
            <ShoppingListContainer />
            <Footer />
        </div>
    </Provider>,
    document.getElementById( "root" )
);
