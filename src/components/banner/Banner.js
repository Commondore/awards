
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
                            {/* <div className="banner-title-decor">
                                <p className="banner__title">О Предприятии</p>
                            </div>
                            <div className="main-text">
                                <p className="banner-text">Государственное предприятие Проектно-изыскательский институт
                                    "Кыргыздортранспроект" при министерстве транспорта и дорог Кыргызской Республики
                                    является органом, ведающим вопросами науки и проектирования, разработки и внедрения
                                    в производство проектов автомобильных дорог и сооружений, которые обеспечивают 
                                    потребности развития экономики и населения Кыргызской Республики в услугах, определяемых
                                    настоящим Уставом и законодательством Кыргызской Республики.
                                </p>

                            </div> */}
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default Banner
