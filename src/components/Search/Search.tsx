import * as React from 'react';
import ISearchState from './ISearchState';
import ICustomer from 'src/interfaces/ICustomer';
import Criteria from '../Criteria/Criteria';
import ResultsList from '../ResultList/ResultsList';

class Search extends React.Component<{}, ISearchState> {
    constructor(props: any) {
        super(props);
        const allCustomers: ICustomer[] = [{
            id: 1,
            name: 'Alfreds Futterkiste'
            }, 
            {
                id: 2,
                name: 'Berglunds snabbköp'
            }, 
            {
                id: 3,
                name: 'Cactus Comidas para llevar'
            }, 
            {
                id: 4,
                name: 'Chop-suey Chinese'
            }, 
            {
                id: 5,
                name: 'Du monde entier'
            }, 
            {
                id: 6,
                name: 'Ernst Handel'
            }, 
            {
                id: 7,
                name: 'France restauration'
            }, 
            {
                id: 8,
                name: 'Island Trading'
            }, 
            {
                id: 9,
                name: 'Let\'s Stop N Shop'
            }, 
            {
                id: 10,
                name: 'Maison Dewey'
            }, 
            {
                id: 11,
                name: 'Paris spécialités'
            }, 
            {
                id: 12,
                name: 'Que Delícia'
            }, 
            {
                id: 13,
                name: 'Rancho grande'
        }];

        this.state = {
            allCustomers,
            filteredCustomers: allCustomers,
            criteria: ''
        };
    }

   public handleCriteriaChange = (criteria: string) => {
        this.setState({
            criteria
        });
    };

    public doSearch = () => {
        this.setState({
            filteredCustomers: this.state.allCustomers.filter(
                customer => customer.name.toLowerCase().indexOf(this.state.criteria) === 0
            )
        });
    }

    public render() {
        return(
            <div>
                <Criteria
                    criteria={ this.state.criteria }
                    onCriteriaChange={ this.handleCriteriaChange }
                    onSubmit={ this.doSearch }
                 />
                 <ResultsList customers={ this.state.filteredCustomers } />
            </div>
        );
    }
}

export default Search;