
import './_Service.sass';
import Banner from './../../assets/img/Banner.png';
import Submenu from '../submenu/Submenu';

import React from 'react'

function Service() {
    return (
        <div className="wrapper">
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
            <Submenu/>
            <h2 className="control-title">Оказание консультационных услуг</h2>
            <p className="control-text">- Контроль и надзор за качеством выполнения проектов 
            строительных материалов и ремонтных работ;
            </p>
            <p className="control-text ">- Контроль и надзор за выполнением и разработкой проектов.</p>
            </div>
        </div>
    )
}

export default Service
