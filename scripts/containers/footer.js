import React from "react";
import { connect } from "react-redux";
import { addCategory, clearList, saveList } from "../actions/listActions";

const Footer = ( { dispatch } ) => {
    let categoryName;
    const onAddCategory = ( ) => {
        dispatch( addCategory( categoryName.value ) );
        dispatch( saveList( ) );
        categoryName.value = "";
    };

    const onClearList = ( ) => dispatch( clearList( ) );

    return (
        <p>
            <input type="text" ref={ node => categoryName = node }/>
            <a href="javascript:void(0);" onClick={ onAddCategory }>
                Add New Category
            </a><br/>
            <a href="javascript:void(0);" onClick={ onClearList }>
                Clear Shopping List
            </a>
        </p>
    );
};

export default connect( )( Footer );
