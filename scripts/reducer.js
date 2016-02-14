import { combineReducers } from "redux";

const categoryItem = ( state = { }, action, index ) => {
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

const categoryItems = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "ADD_ITEM":
            return [
                ...state,
                categoryItem( state, action )
            ];
        case "REMOVE_ITEM":
            return state.slice( 0, action.index )
                        .concat( state.slice( action.index + 1 ) );
        case "CHECK_ITEM":
            return state.map( ( item, index ) => categoryItem( item, action, index ) );
    }
};

const shoppingListCategory = ( state = { }, action, categoryIndex ) => {
    if ( action.categoryIndex != categoryIndex ) {
        return state;
    }

    switch ( action.type ) {
        case "ADD_ITEM":
        case "REMOVE_ITEM":
        case "CHECK_ITEM":
            return {
                name: state.name,
                items: categoryItems( state.items, action )
            };
    }
};

const shoppingList = ( state = { }, action ) => {
    switch ( action.type ) {
        case "ADD_ITEM":
        case "REMOVE_ITEM":
        case "CHECK_ITEM":
            return {
                categories: state.categories.map( ( category, index ) =>
                                shoppingListCategory( category, action, index ) )
            };
        case "ADD_CATEGORY":
            return {
                categories: [
                    ...state.categories,
                    { name: action.name, items: [ ] }
                ]
            };
        case "FETCH_LIST_COMPLETED":
            return action.list;
        case "CLEAR_LIST":
            return {
                categories: [ ]
            };
        default:
            return state;
    }
};

const busy = ( state = false, action ) => {
    switch ( action.type ) {
        case "CALL_STARTED":
            return true;
        case "CALL_ENDED":
            return false;
        default:
            return state;
    }
};

export default combineReducers( {
    shoppingList,
    busy
} );
