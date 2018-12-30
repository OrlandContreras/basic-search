import * as React from 'react';
import ICriteriaProps from "./ICriteriaProps";

// this is a functional component with no state.
const Criteria = (props: ICriteriaProps) => {
    const handleCriteriaChange = (e: React.FormEvent<HTMLInputElement>) => {
        props.onCriteriaChange(e.currentTarget.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit();
    };

    return(
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                placeholder="Enter search criteria..."
                value={ props.criteria }
                onChange={ handleCriteriaChange } 
            />
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default Criteria;