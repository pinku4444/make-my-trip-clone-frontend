import React, { Component } from 'react'
import Header from './component/Header';
import Carousel from './component/carousel';
import Rents from './component/rents';
import Footer from './component/footer';

class Dashboard extends Component {
    render() {
        return (
            <div>
               <Header /> 
               <h1>Top Hotel</h1>
               <Rents />
               <Footer />

            </div>
        )
    }
}

export default  Dashboard;
