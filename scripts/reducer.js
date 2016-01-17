import { combineReducers } from "redux";

const initialList = [
    { name: "eggs", qty: "20" },
    { name: "butter", qty: "200g" },
    { name: "milk", qty: "2L" }
];

const shoppingListItem = ( state = { }, action, index ) => {
    switch ( action.type ) {
        case "ADD_ITEM":
            return {
                name: action.name,
                qty: action.qty
            };
        case "CHECK_ITEM":
            if ( action.index != index ) {
                return state;
            }

            return Object.assign( { }, state, { checked: !state.checked } );
        default:
            return state;
    }
};

const shoppingList = ( state = initialList, action ) => {
    switch ( action.type ) {
        case "ADD_ITEM":
            return [
                ...state,
                shoppingListItem( state, action )
            ];
        case "REMOVE_ITEM":
            return state.slice( 0, action.index )
                        .concat( state.slice( action.index + 1 ) );
        case "CHECK_ITEM":
            return state.map( ( item, index ) => shoppingListItem( item, action, index ) );
        case "CLEAR_LIST":
            return [ ];
        default:
            return state;
    }
};

export default combineReducers( {
    shoppingList
} );
