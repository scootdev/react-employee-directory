import React, { Component } from 'react';
import './style.css'

class SearchBar extends Component {

    getValue = e => {
        this.props.queryChanged(e.target.value.trim().toLowerCase())
    }

    sort = e => {
        this.props.changeSort(e.target.value);
    }

    render() {
        return (
            <div class="row" id="search-bar">
                <input 
                type="text" 
                class="form-control my-3"  
                onChange={this.getValue}
                placeholder="Search for a name or department.." />
                <h6>Sort by:</h6>
                <select class="ml-2" onChange={this.sort}>
                    <option value="id">ID</option>
                    <option value="first_name">First Name</option>
                    <option value="last_name">Last Name</option>
                    <option value="department">Department</option>
                    <option value="email">Email</option>
                    <option value="username">Username</option>
                </select>
            </div>
        )
    }
}

export default SearchBar;