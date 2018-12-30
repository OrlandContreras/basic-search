import ICustomer from "src/interfaces/ICustomer";

interface ISearchState {
    allCustomers: ICustomer[];
    filteredCustomers: ICustomer[];
    criteria: string;
}

export default ISearchState;