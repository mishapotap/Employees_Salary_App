// Employees list

import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

// const data(massive) comes from app.js
//item is each object inside massive
const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {
    const elements = data.map((item) => {
        // Destructurisation item for {id} and other 3 object property(name salary and increase) for {itemProps}
        const { id, ...itemProps } = item;
        return (
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)}
            />
        );
    });

    return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
