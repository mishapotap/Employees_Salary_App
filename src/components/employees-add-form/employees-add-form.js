// Add form

import { Component } from "react";
import "./employees-add-form.css";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: "", //not 0 because anyway in state in will be string
        };
    }
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) {
            alert("Введите корректные данные сотрудника");
        }
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: "",
            salary: "",
        });
    };

    render() {
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        onChange={this.onValueChange}
                        name="name" //onValueChange will get value from both input
                        value={name}
                    />
                    <input
                        type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        onChange={this.onValueChange}
                        name="salary"
                        value={salary}
                    />

                    <button type="submit" className="btn btn-outline-light">
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;
