import React, { useEffect, useState } from 'react';

const FilterItem = (props) => {

    const changeFilter = (event) => {

        var key = event.target.getAttribute("field");
        var value = (() => {
            switch(event.target.type){
                case "checkbox":
                    return event.target.checked;
                case "range":
                    return event.target.value
                default:
                    return true 
            }
        })();
        
        props.updateFilter(key, value)
    }
    
    return (
        <>
            <div style={{padding: 5}}>
                <p>
                    {JSON.stringify(props.filter)}
                </p>
                <input 
                    type={props.filterOption.type} 
                    {...props.filterOption.additionalAttr} 
                    onChange={(event) => changeFilter(event)} 
                    field={props.filterOption.fieldName}
                    value={props.filter[props.filterOption.fieldName]}
                    checked={props.filter[props.filterOption.fieldName]}
                /> 
                <span>{props.filterOption.label}</span>
            </div>
        </>
    )
}

export default FilterItem;