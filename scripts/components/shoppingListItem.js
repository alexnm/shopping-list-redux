import React from "react";

export default ( { item, onRemove, onCheck } ) => (
    <div>
        <span className={ `item ${ item.checked ? "checked" : "" }` } onClick={ onCheck }>{ item.name } - { item.qty }</span>
        <button onClick={ onRemove }>Remove Item</button>
    </div>
);
