# React Employee Directory

Application Link: 

## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Table Generation](#table-generation)

![Overview](./readme_img/overview.gif)

## Description
The employee directory is an application that displays employee information from a json file and displays it in an easy to read table. The application generates the table based on the information within the json, so the json does not have to be formatted in a specific way for the application to work.

## Usage
The info generated is based on employees.json. The user can either direct the application to a different json by changing the import directory on line 5 of the container component or by changing the info within the supplied employees.json file. 

```
import employees from '../../employees.json';
```

## Table Generation
To generate the table and display employee information, the application first grabs the keys from the employee objects to create the headers for the table. 
```
state = {
        headers: Object.keys(this.props.employees[1])
    }
```
The headers are mapped into the header of the table using a function to capitalize the first letter for formatting purposes.
```
{this.state.headers.map(header => (
    <th scope="col">{this.capFirst(header)}</th>
))}
```
Lastly, the employees json is mapped to create a table row for each employee.
```
{this.props.employees.map(employee => (
    <tr>
    {this.state.headers.map(header => (
        <td>{employee[header]}</td>
    ))}
    </tr>
))}
```