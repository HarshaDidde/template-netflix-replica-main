import React from 'react';
import styles from './Herosection.css';
import PlayIcon from './PlayIcon';
import InfoIcon from './InfoIcon';


import JSONdata from '../../../data/titles.json';
function Herosection(props) {
    const Movie = JSONdata.movies[6];
    const movieImg = Movie.img;
    return (
        
            <div className={styles.herosection}>
                    <img src={movieImg} alt=""></img>
                    <div className={styles.info}>
                        <div className={styles.title}>{Movie.title}</div>
                        <div className={styles.year} >{Movie.year}</div>
                        <div className={styles.description}>
                            {Movie.description}
                        </div>
                        <div className={styles.links}>
                            <a href='/'>
                                <PlayIcon/>
                                <span>Play</span>
                            </a>
                            <button type="button">
                                <InfoIcon/>
                                <span> More Info</span>
                            </button>
                        </div>
                    </div>
                </div>
            
       
    );
}

export default Herosection;