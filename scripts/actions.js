import request from "superagent";

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

const requestList = ( ) => ( {
    type: "FETCH_LIST"
} );

const requestListCompleted = list => ( {
    type: "FETCH_LIST_COMPLETED",
    list
} );

const fetchList = ( ) => ( dispatch ) => {
    dispatch( requestList( ) );

    request
        .get( "/api/list" )
        .end( ( err, res ) => dispatch( requestListCompleted( res.body.shoppingList ) ) );
};

const saveList = ( ) => ( dispatch, getState ) => {
    const list = getState( ).shoppingList;

    request
        .post( "/api/save" )
        .send( { shoppingList: list } )
        .end( ( err, res ) => console.log( "list saved" ) );
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
