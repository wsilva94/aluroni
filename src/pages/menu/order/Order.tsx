import style from "./Order.module.scss";
import options from "./options.json";
import { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface IProps {
    order: string;
    setOrder: React.Dispatch<React.SetStateAction<string>>;
}
const Order = ({ order, setOrder }: IProps) => {
    const [open, setOpen] = useState(false);
    const nameOrder = order && options.find((option) => option.value === order)?.name;

    return (
        <button
            className={`${style.order} ${order !== "" ? style["oreder--active"] : ""}`}
            onClick={() => {
                setOpen(!open);
            }}
            onBlur={() => {
                setOpen(false);
            }}
        >
            <span>{nameOrder || "Ordernar por"}</span>
            {open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
            <div className={`${style.order__options} ${open ? style["order__options--active"] : ""}`}>
                {options.map((option) => (
                    <div
                        className={style.order__option}
                        key={option.value}
                        onClick={() => {
                            setOrder(option.value);
                        }}
                    >
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    );
};

export default Order;
