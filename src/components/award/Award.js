
import './_Award.sass';
import img from './Diplom IMG.png'
import pen from './pen.png'
import Secnav from '../secnav/Secnav';
import Banner from './../../assets/img/Banner.png'

import React from 'react'

function Award() {
    return (
        <div className="wrapper">
            <div className="award">
                <div className="container">
                <img src={Banner} alt="" className="header-banner" />
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
                    <h2 className="award-title">Награды</h2>
                    <div className="award-group">
                        <div className="award-item">
                            <img src={img} alt="" className="award-img" />
                        </div>
                        <div className="award-item">
                            <img src={pen} alt="" className="award-img" />
                        </div>
                        <div className="award-item">
                            <img src={pen} alt="" className="award-img" />
                        </div>
                        <div className="award-item">
                            <img src={pen} alt="" className="award-img" />
                        </div>
                        <div className="award-item">
                            <img src={pen} alt="" className="award-img" />
                        </div>
                        <div className="award-item">
                            <img src={pen} alt="" className="award-img" />
                        </div>
                        <div className="award-item">
                            <img src={pen} alt="" className="award-img" />
                        </div>
                        <div className="award-item">
                            <img src={pen} alt="" className="award-img" />
                        </div>
                        <div className="award-item">
                            <img src={pen} alt="" className="award-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Award 