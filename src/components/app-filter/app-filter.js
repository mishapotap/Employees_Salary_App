// Filters
import "./app-filter.css";

const AppFilter = (props) => {
    // in props: "all", onFilterSelect
    const buttonsData = [
        { name: "all", label: "Все сотрудники" },
        { name: "rise", label: "На повышение" },
        { name: "moreThen1000", label: "З/п больше 1000$" },
    ]; // не то место

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name; //if props.filter === name return true
        const clazz = active ? "btn-light" : "btn-outline-light"; //if active true add class "btn-light"
        return (
            <button className={`btn ${clazz}`} type="button" key={name} onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        );
    });
    return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
