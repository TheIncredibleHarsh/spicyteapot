import React from 'react';

const FilterItem = (props) => {

    const changeFilter = (event) => {
        // props.updateFilter(key, value)
    }

    return (
        <>
            <div style={{padding: 5}}>
                <input type={props.filterOption.type} {...props.filterOption.additionalAttr} onChange={(event) => changeFilter(event)} fieldName={props.filterOption.fieldName}/> 
                <span>{props.filterOption.label}</span>
            </div>
        </>
    )
}

export default FilterItem;