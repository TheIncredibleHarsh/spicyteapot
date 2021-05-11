import React from 'react';

const FilterItem = (props) => {
    return (
        <>
            <div style={{padding: 5}}>
                <input type={props.filterOption.type} /> <span>{props.filterOption.label}</span>
            </div>
        </>
    )
}

export default FilterItem;