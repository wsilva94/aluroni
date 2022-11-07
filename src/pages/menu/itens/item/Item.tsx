import style from "./Item.module.scss";
import classNames from "classnames";

interface IProps {
    id: number;
    title: string;
    description: string;
    photo: string;
    size: number;
    serving: number;
    price: number;
    category: {
        id: number;
        label: string;
    };
}

const Item = ({ title, description, photo, size, serving, price, category }: IProps) => {
    return (
        <div>
            <div className={style.item}>
                <div className={style.item__image}>
                    <img src={photo} alt={title} />
                </div>
            </div>
            <div className={style.item__description}>
                <div className={style.item__title}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={style.item__tags}>
                    <div
                        className={classNames({
                            [style.item__type]: true,
                            [style[`item__type_${category.label.toLowerCase()}`]]: true,
                        })}
                    >
                        {category.label}
                    </div>
                    <div className={style.item__portion}>{size}g</div>
                    <div className={style.item__number_people}>
                        {serving} 2 pessoa{serving === 1 ? "" : "s"}
                    </div>
                    <div className={style.item__value}>R$ {price.toFixed(2)}</div>
                </div>
            </div>
        </div>
    );
};

export default Item;
