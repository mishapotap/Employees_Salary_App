// Employees list

import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

// const data(massive) comes from app.js
//item is each object inside massive
const EmployeesList = ({ data, onDelete, onToggleProp }) => {
    const elements = data.map((item) => {
        // Destructurisation item for {id} and other 3 object property(name salary and increase) for {itemProps}
        const { id, ...itemProps } = item;
        return (
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(event) => onToggleProp(id, event.currentTarget.getAttribute("data-toggle"))}
            /> // Got the key of data attribute to show which prop we clicked: rise or increase (id, prop)
        );
    });

    return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
