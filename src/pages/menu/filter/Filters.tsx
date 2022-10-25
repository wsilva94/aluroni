import data from "./data.json";
import style from "./Filter.module.scss";

interface IOption {
    id: number;
    label: string;
}

const Filters = () => {
    const selectFilter = (option: IOption) => {};

    return (
        <div className={style.filters}>
            {data.map((option: IOption) => (
                <button className={style.filters__filter} key={option.id} onClick={() => selectFilter(option)}>
                    {option.label}
                </button>
            ))}
        </div>
    );
};

export default Filters;
