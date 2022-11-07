import data from "./data.json";
import style from "./Filter.module.scss";

interface IOption {
    id: number;
    label: string;
}

interface IProps {
    filter: number | null;
    setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

const Filters = ({ filter, setFilter }: IProps) => {
    const selectFilter = (option: IOption) => {
        return setFilter(option.id);
    };

    return (
        <div className={style.filters}>
            {data.map((option: IOption) => (
                <button
                    className={`${style.filters__filter} ${filter === option.id ? style["filters__filter--active"] : ""} `}
                    key={option.id}
                    onClick={() => selectFilter(option)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
};

export default Filters;
