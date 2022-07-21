import React from 'react';
import styles from './Header.css'
import NetflixIcon from './../../assets/images/logo.png';
import Traingle from './../../assets/images/transparent-down-icon-triangle-icon-5db295ae317fb8.0311501515719848142028.png';
import Searchbar from '../Searchbar';
function Header(props) {
    return (
        <div className={styles.container}>
            <img src={NetflixIcon}>
            </img>
            <div className={styles.subcontainer}>
                <Searchbar></Searchbar>
                <div className={styles.thumbnailcontainer}>
                    <div className={styles.thumbnail}>
                    </div>
                    <img className={styles.dropdownIcon} src={Traingle}>
                    </img>
                </div>

            </div>

                        
        </div>
    );
}

export default Header;