import React from 'react'
import './gallery.css'
import img from'../../Assets/B1.png'
import img1 from'../../Assets/BR1.jpg'
import img2 from'../../Assets/D1.jpg'
import img3 from'../../Assets/F2.webp'
import img4 from'../../Assets/BR2.jpg'
import img5 from'../../Assets/B2.webp'
import img6 from'../../Assets/m3.jpg'
import img7 from'../../Assets/D3.jpeg'
import img8 from'../../Assets/F3.jpg'
import img9 from'../../Assets/d3.jpg'
import img10 from'../../Assets/B3.webp'
import img11 from'../../Assets/F5.jpg'
import img12 from'../../Assets/m1.webp'
import img13 from'../../Assets/b8.jpg'
import img14 from'../../Assets/batch1.jpg'
import img15 from'../../Assets/w2.avif'


const Gallery = () =>{
    return(
        <section className='gallery'>
            <div className="secContainer container">
            <div className="gallText">
                <h1 className="title">
                  GALLERY
                </h1></div>
            <div className="gallImage">
                    <div class="row">
                    <div class="column">
                                <img src={img} alt="bday"/> 
                        
                        </div>
                    <div class="column">
                                <img src={img1}alt="batch"/>
                        </div>
                        <div class="column">
                                <img src={img2}alt="batch"/>
                        </div>
                        <div class="column">
                                <img src={img3}alt="batch"/>
                        </div>
                        </div>
                        <div class="row">
                    <div class="column">
                                <img src={img4} alt="bday" /> 
                        
                        </div>
                    <div class="column">
                                <img src={img5}alt="batch"/>
                        </div>
                        <div class="column">
                                <img src={img6}alt="batch"/>
                        </div>
                        <div class="column">
                                <img src={img7}alt="batch"/>
                        </div>
                        </div>
                        <div class="row">
                           
                        <div class="column">
                                <img src={img8} alt="bday"/>
                            </div>
                            <div class="column">
                                <img src={img9} alt="bday"/>
                            </div>
                            <div class="column">
                                <img src={img10}alt="batch" />
                        </div>
                        <div class="column">
                                <img src={img11}alt="batch"/>
                        </div>
                            </div>
                            <div class="row">
                            
                        <div class="column">
                                <img src={img12} alt="bday"/>
                            </div>
                            <div class="column">
                                <img src={img13} alt="bday"/>
                            </div>
                            <div class="column">
                                <img src={img14}alt="batch" />
                        </div>
                        <div class="column">
                                <img src={img15}alt="batch"/>
                        </div>
                            </div>
                    

                    </div>
                    
                    </div>
                    
                    </section>
    )
}

export default Gallery
