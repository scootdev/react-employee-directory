import React, { Component } from 'react';

class Table extends Component {

    state = {
        headers: Object.keys(this.props.employees[1])
    }

    capFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        return (
            <div>
                <table class="table" id="employee-table">
                    <thead>
                        <tr>
                        {this.state.headers.map(header => (
                            <th scope="col">{this.capFirst(header)}</th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.employees.map(employee => (
                            <tr>
                            {this.state.headers.map(header => (
                                <td>{employee[header]}</td>
                            ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    } 
}

export default Table