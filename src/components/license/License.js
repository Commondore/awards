
import './_License.sass'
import love  from './love.png'
import river from './river.png'
import lamp from './lamp.png'
import Secnav from '../secnav/Secnav';
import Banner from './../../assets/img/Banner.png'

import React from 'react'

function License() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="img-box">
                     <img src={Banner} alt="" className="header-banner" />

                </div>
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
                <h2 className="license-title">Лицензии</h2>
                <div className="license-group">
                    <div className="license-item">
                        <img src={love} alt="" className="license-img" />
                    </div>
                    <div className="license-item">
                        <img src={river} alt="" className="license-img" />
                    </div>
                    <div className="license-item">
                        <img src={lamp} alt="" className="license-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default License