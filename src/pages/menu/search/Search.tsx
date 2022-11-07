import React from "react";
import style from "./Search.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ search, setSearch }: Props) => {
    return (
        <div className={style.search}>
            <input
                value={search}
                onChange={(event) => {
                    setSearch(event.target.value);
                }}
                placeholder="Buscar"
            />
            <CgSearch size={20} color="#4C4D5E" />
        </div>
    );
};

export default Search;
