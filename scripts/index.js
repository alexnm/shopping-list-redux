import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import ShoppingListContainer from "./containers/shoppingListContainer";
import Footer from "./containers/footer";
import reducer from "./reducer";
import { fetchList } from "./actions";

const loggerMiddleware = createLogger( );

const createStoreWithMiddleware = applyMiddleware(
    loggerMiddleware,
    thunkMiddleware
)( createStore );

const store = createStoreWithMiddleware( reducer );

store.dispatch( fetchList( ) );

ReactDOM.render(
    <Provider store={ store }>
        <div>
            <ShoppingListContainer />
            <Footer />
        </div>
    </Provider>,
    document.getElementById( "root" )
);
