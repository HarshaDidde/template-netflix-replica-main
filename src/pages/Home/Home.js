import React, { Component } from 'react';

import styles from './Home.css';

import Icon from './../../assets/images/logo.png';
// import Header from '../../components/Header';
import Herosection from '../../components/Herosection';
import Titles from '../../components/Titles';
/* 
    This is just a sample introduction file.
    You can clear the code written in this file and start writing your own code.
*/

export class Home extends Component {
    render() {
        return (
            <div>
                <Herosection/>
                <Titles heading="Popular on Netflix"/>
            </div>
        )
    }
}

export default Home;

