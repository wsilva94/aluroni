import style from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/img/logo/logo.svg";
import Search from "./search/Search";
import { useState } from "react";
import Filters from "./filter/Filters";
import Order from "./order/Order";
import Itens from "./itens/Itens";

const Menu = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<number | null>(null);
    const [order, setOrder] = useState("");

    return (
        <main>
            <nav className={style.menu}>
                <Logo />
            </nav>
            <header className={style.header}>
                <div className={style.header__text}>A casa do código e da massa</div>
            </header>
            <section className={style.menu}>
                <h3 className={style.menu__title}>Cardápio</h3>
                <Search search={search} setSearch={setSearch} />
                <div className={style.menu__searches}>
                    <Filters filter={filter} setFilter={setFilter} />
                    <Order order={order} setOrder={setOrder}></Order>
                </div>
                <Itens search={search} filter={filter} order={order}></Itens>
            </section>
        </main>
    );
};

export default Menu;
