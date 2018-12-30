import * as React from 'react';
import IResultListProps from './IResultListProps';

const ResultsList = (props: IResultListProps) => {
    const listStyle = {
        listStyleType: 'none'
    };
    const listItems = props.customers.map((customer) => 
        <li key={ customer.id }>{ customer.name }</li>
    );

    return(
        <ul style={ listStyle }>{ listItems }</ul>
    );
}

export default ResultsList;