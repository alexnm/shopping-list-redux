import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ShoppingListContainer from "./containers/shoppingListContainer";
import Footer from "./containers/footer";
import { configureStore } from "./store";
import { fetchList } from "./actions/listActions";

const store = configureStore( window.__INITIAL_STATE__ );

ReactDOM.render(
    <Provider store={ store }>
        <div>
            <ShoppingListContainer />
            <Footer />
        </div>
    </Provider>,
    document.getElementById( "root" )
);
