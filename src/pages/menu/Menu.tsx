import style from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/img/logo/logo.svg";
import Search from "./search/Search";

const Menu = () => {
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
                <Search />
            </section>
        </main>
    );
};

export default Menu;
