import React from 'react';

const Table = props => {
    return (
        <div>
            <table class="table" id="employee-table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Dept.</th>
                        <th scope="col">Email</th>
                        <th scope="col">Username</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.map(employee => (
                        <tr>
                            <th scope="row">{employee.id}</th>
                            <td>{employee.first_name}</td>
                            <td>{employee.last_name}</td>
                            <td>{employee.department}</td>
                            <td>{employee.email}</td>
                            <td>{employee.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table