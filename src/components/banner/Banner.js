
import './_Banner.sass';
import banner from './Banner.png'

import React from 'react'
import Secnav from '../secnav/Secnav';

function Banner() {
    return (
        <>
        <div className="wrapper">

            <div className="banner">
                <div className="container">
                    <img src={banner} alt="" className="header-banner" />
                    <div className="banner-content">
                        <h1 className="banner__title">О предприятии</h1>
                        <p className="banner-text">Государственное предприятие Проектно-изыскательский институт
                            "Кыргыздортранспроект" при министерстве транспорта и дорог Кыргызской Республики
                            является органом, ведающим вопросами науки и проектирования, разработки и внедрения
                            в производство проектов автомобильных дорог и сооружений, которые обеспечивают 
                            потребности развития экономики и населения Кыргызской Республики в услугах, определяемых
                            настоящим Уставом и законодательством Кыргызской Республики.
                        </p>
                    </div>
                <Secnav/>
                </div>
            </div>
        </div>
        </>
    )
}


export default Banner
