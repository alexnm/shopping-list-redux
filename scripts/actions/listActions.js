import request from "superagent";
import { callStarted, callEnded } from "./spinnerActions";

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

    request
        .get( "/api/list" )
        .end( ( err, res ) => {
            dispatch( requestListCompleted( res.body.shoppingList ) );
            dispatch( callEnded( ) );
        } );
};

const saveList = ( ) => ( dispatch, getState ) => {
    const list = getState( ).shoppingList;
    dispatch( callStarted( ) );

    request
        .post( "/api/save" )
        .send( { shoppingList: list } )
        .end( ( err, res ) => dispatch( callEnded( ) ) );
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
