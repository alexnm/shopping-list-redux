import fetch from "isomorphic-fetch";
import { callStarted, callEnded } from "./spinnerActions";

const baseUrl = typeof window === "undefined" ? "http://localhost:1337" : "";

const addItem = ( name, qty, categoryIndex ) => ( {
    type: "ADD_ITEM",
    name,
    qty,
    categoryIndex
} );

const removeItem = ( index, categoryIndex ) => ( {
    type: "REMOVE_ITEM",
    index,
    categoryIndex
} );

const checkItem = ( index, categoryIndex ) => ( {
    type: "CHECK_ITEM",
    index,
    categoryIndex
} );

const addCategory = name => ( {
    type: "ADD_CATEGORY",
    name: name
} );

const clearList = ( ) => ( {
    type: "CLEAR_LIST"
} );

const requestListCompleted = list => ( {
    type: "FETCH_LIST_COMPLETED",
    list
} );

const fetchList = ( ) => ( dispatch ) => {
    dispatch( callStarted( ) );

    return fetch( `${ baseUrl }/api/list` )
        .then( ( response ) => response.json( ) )
        .then( res => {
            dispatch( requestListCompleted( res.shoppingList ) );
            dispatch( callEnded( ) );
        } );
};

const saveList = ( ) => ( dispatch, getState ) => {
    const list = getState( ).shoppingList;
    dispatch( callStarted( ) );

    return fetch( `${ baseUrl }/api/list`, {
          method: "POST",
          body: { shoppingList: list }
        } )
        .then( res => {
            dispatch( requestListCompleted( res.shoppingList ) );
            dispatch( callEnded( ) );
        } );
};

export {
    removeItem,
    checkItem,
    addItem,
    addCategory,
    clearList,
    fetchList,
    saveList
};
