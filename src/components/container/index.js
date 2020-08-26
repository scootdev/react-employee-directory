import React, { Component } from 'react';
import './style.css';
import SearchBar from '../searchbar';
import Table from '../table';
import employees from '../../employees.json';

class Container extends Component {

    state = {
        results: employees,
        sortBy: "id",
        sortOrder: "desc"
    };

    queryChanged = query => {
        if (query) {
            this.setState({ results: [] })
            const results = [];
            for (let i = 0; i < employees.length; i++) {
                const employee = employees[i];
                if (
                    employee.first_name.toLowerCase().includes(query) ||
                    employee.last_name.toLowerCase().includes(query) ||
                    employee.department.toLowerCase().includes(query)
                ) {
                    results.push(employee);
                }
                
            }
            this.setState({ results: results });
        } else { this.setState({ results: employees })};
    }

    sortBy = (key, order = 'asc') => {
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }

            const varA = (typeof a[key] === 'string')
                ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string')
                ? b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        };
    }

    changeSort = (key, order) => {
        let list = this.state.results;
        this.setState({ results: [] });
        list.sort(this.sortBy(key, order));
        this.setState({ results: list, sortBy: key, sortOrder: order });
    }

    render() {
        return (
            <div class="container">
                <SearchBar
                    queryChanged={this.queryChanged}
                    changeSort={this.changeSort}
                />
                <h1></h1>
                <Table 
                employees={this.state.results}
                sortBy={this.state.sortBy}
                sortOrder={this.state.sortOrder}
                />
            </div>
        )
    }
}

export default Container;