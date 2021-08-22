
import './_Banner.sass';
import banner from './Banner.png'

import React from 'react'


function Banner() {
    return (
        <>
        <div className="wrapper">

            <div className="banner">
                <div className="container">
                            <div className="img-box">
                                <img src={banner} alt="" className="header-banner" />
                            </div>
                        <div className="banner-sign">
    
                            <div className="main-text">
                                <p className="banner-text">Государственное предприятие Проектно-изыскательский институт
                                    "Кыргыздортранспроект" при министерстве транспорта и дорог Кыргызской Республики
                                    является ведущей организацией по проектированию автомобильных дорог и инженерных сооружений
                                    на них. Оказанием консультационных услуг и ведение авторского надзора. 
                                
                                </p>

                            </div>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default Banner
