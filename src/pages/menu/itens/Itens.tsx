import { useEffect, useState } from "react";
import menu from "./data.json";
import Item from "./item/Item";
import style from "./Itens.module.scss";

interface Props {
    search: string;
    filter: number | null;
    order: string;
}

const Itens = (props: Props) => {
    const [list, setList] = useState(menu);
    const { search, filter, order } = props;

    function testSearch(title: string) {
        const regex = new RegExp(search, "i");
        return regex.test(title);
    }

    function testFilter(id: number) {
        if (filter !== null) return filter === id;
        return true;
    }

    function ordenar(newList: typeof menu) {
        switch (order) {
            case "portion":
                return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
            case "number_people":
                return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
            case "value":
                return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
            default:
                return newList;
        }
    }

    useEffect(() => {
        const newList = menu.filter((item) => testSearch(item.title) && testFilter(item.category.id));
        setList(ordenar(newList));
    }, [search, filter, order]);

    return (
        <div className={style.itens}>
            {list.map((item) => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    );
};

export default Itens;
