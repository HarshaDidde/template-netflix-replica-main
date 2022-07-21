import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { requestShowsData } from '../../store/actions/showsActions'; 
import Slider from "react-slick";
import styles from './Titles.css';

import "!style-loader!css-loader!slick-carousel/slick/slick.css";
import "!style-loader!css-loader!slick-carousel/slick/slick-theme.css";

import ChevronRightIcon from './chevroletRightIcon';
import ChevronLeftIcon from './ChevroletLeftIcon';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={styles.right}
      onClick={onClick}
    >
      <ChevronRightIcon/>
    </div>  
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={styles.left}
      onClick={onClick} >
        <ChevronLeftIcon/>
    </div>
  );
}

function Titles(props) {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      vertical: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />

    };
    const {heading} = props; 
    const { showsData, isLoading } = useSelector((state) => state.shows);
    const dispatch = useDispatch();
   
    useEffect(() => {
      dispatch(requestShowsData());
    }, []);


    return ( 

      <>
      {isLoading && <div className="loading">Data loading...</div>}

      <div className={styles.container}>
        <h3 className={styles.heading}> {heading}</h3>
        <Slider {...settings} >
          {showsData && showsData.map((show)=>{
            return(
              <div className={styles.slide} key={show.title}>
                <img src={show.img} alt={show.title} />
              </div>
            ) 
          })}

        </Slider>
      </div>
      </>
      


      
         );
}

export default Titles;