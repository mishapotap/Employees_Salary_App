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
                { name: "Michael Scott", salary: 3200, increase: false, id: 1 },
                { name: "Oliver Smith", salary: 2500, increase: false, id: 2 },
                { name: "Samuel Jackson", salary: 1500, increase: true, id: 3 },
            ],
        };
    }
    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter((item) => item.id !== id),
                // if item.id (item is each [data] element) !== id which comes from employee-list
            };
        });
    };

    render() {
        return (
            <div className="app">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
                <EmployeesAddForm />
            </div>
        );
    }
}

export default App;
