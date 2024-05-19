import React from 'react'
import Home from '../Components/Home/Home'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const HomePage = () =>{
    return(
        <div>
        <Navbar/>
        <Home/> 
        <Footer/>
        </div>
    )
}

export default HomePage