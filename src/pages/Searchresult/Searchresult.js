import React,{useEffect} from 'react';
import styles from './Searchresult.css';
import {useSelector, useDispatch} from "react-redux";
import { requestShowsData } from '../../store/actions/showsActions';
import {Redirect} from 'react-router-dom';

function Searchresult(props) {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const queryLowerCased = query.toLowerCase();

    if (query === ""){
        return <Redirect  to="/"/>
    }
   

    const {showsData} = useSelector((state)=>state.shows);
    const dispatch = useDispatch();
    let count = 0;

    useEffect(() => {
        dispatch(requestShowsData());
      }, []);

    const filteredData = showsData.filter((show)=>show.title.toLowerCase().includes(queryLowerCased));
    if (filteredData.length === 0){
        return(
            <div className={styles.noresult}>
                <p> This title does not exist on Netflix</p>
            </div>
        )   
    }

    return (
        <div className={styles.container}>
            <p>Showing results for: <span>"{query}"</span></p>
            <div className={styles.row}>
            {filteredData.map(show =>{
                count = count + 1;
                return (
                    <div className={styles.slide} key={count}>
                        <img src={show.img}/> 
                    </div>
                )
            })}
        </div>
        </div>
        
    );
}

export default Searchresult;