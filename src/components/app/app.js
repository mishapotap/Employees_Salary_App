//Main App
import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "Michael Scott", salary: 3200, increase: false, rise: true, id: 1 },
                { name: "Oliver Smith", salary: 2500, increase: true, rise: false, id: 2 },
                { name: "Samuel Jackson", salary: 1500, increase: false, rise: false, id: 3 },
            ],
            term: "",
        };
        this.maxId = 4;
    }
    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter((item) => item.id !== id),
                // if item.id (item is each [data] element) !== id which comes from employee-list
            };
        });
    };
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++,
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    };

    onToggleProp = (id, prop) => {
        //prop is the element which we toggle (increase, rise)
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            }),
        }));
    };

    searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.name.indexOf(term) > -1;
            //will return only if indexOf find the element in item (because indexOf returns -1 if cant find the element)
        });
    };

    onUpdateSearch = (term) => {
        this.setState({ term: term });
    }; 

    render() {
        const { data, term } = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter((item) => item.increase === true).length;
        const visibleData = this.searchEmployee(data, term);
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased} />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter />
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
