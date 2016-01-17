import React from "react";
import { connect } from "react-redux";
import { addCategory, clearList } from "../actions";

const Footer = ( { dispatch } ) => {
    let categoryName;
    const dispatchAddCategory = ( ) => dispatch( addCategory( categoryName ) );
    const dispatchClearList = ( ) => dispatch( clearList( ) );

    return (
        <div>
            <input type="text" ref={ node => categoryName = node }/>
            <a href="javascript:void(0);" onClick={ dispatchAddCategory }>
                Add New Category
            </a>
            <a href="javascript:void(0);" onClick={ dispatchClearList }>
                Clear Shopping List
            </a>
        </div>
    );
};

export default connect( )( Footer );
