// Each employee
import { Component } from "react";
import "./employees-list-item.css";

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            rise: false,
        };
    }
    onIncrease = () => {
        this.setState(({ increase }) => ({
            increase: !increase,
        }));
    };
    onRise = () => {
        this.setState(({ rise }) => ({
            rise: !rise,
        }));
    };

    render() {
        // If increase is true - change css styles
        const { name, salary, onDelete } = this.props,
            { increase, rise } = this.state; //comes form state

        let ClassNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            ClassNames += " increase";
        }
        if (rise) {
            ClassNames += " like";
        }

        return (
            <li className={ClassNames}>
                <span className="list-group-item-label" onClick={this.onRise}>
                    {name}
                </span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-cookie btn-sm " onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}
export default EmployeesListItem;
