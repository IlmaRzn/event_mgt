import React,{useEffect} from 'react'
import './home.css'
import  Aos from 'aos' 
import 'aos/dist/aos.css'


const Home = () =>{

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
      <section id="Home" className="home">
        <div className="secContainer container">
          <div className="homeText">
            <h1 data-aos="fade-up" className="title">
              Plan Your Events With Us!
            </h1>
            <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
              Build Your Dreams With Us!
            </p>
            <button data-aos="fade-up" data-aos-duration="3000" className="btn">
              <a href="/wedding">Wedding</a>
            </button>
            <button data-aos="fade-up" data-aos-duration="3000" className="btn">
              <a href="/mehandhi"> Mehandhi</a>
            </button>
            <button data-aos="fade-up" data-aos-duration="3000" className="btn">
              <a href="/birthday"> Birthday</a>
            </button>
            <button data-aos="fade-up" data-aos-duration="3000" className="btn">
              <a href="/reunion"> Reunion</a>
            </button>
          </div>
        </div>
      </section>
    );
}

export default Home