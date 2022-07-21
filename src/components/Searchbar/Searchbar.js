import React from 'react';
import styles from "./Searchbar.css";
import SearchIcon from './SearchIcon';

function Searchbar(props) {
    return (
        <div>
            <form className={styles.container} action="/Searchresult" >
                <button type="submit"><SearchIcon/></button>
                <input type="text" placeholder='Titles, People, Genres' name="s"></input>
            </form>
        </div>
    );
}

export default Searchbar;