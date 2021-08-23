
import './_Service.sass';
import Submenu from '../submenu/Submenu';

import React from 'react'

function Service() {
    return (
        <div className="wrapper">
            <div className="container">
            <Submenu/>
            <div className="service-box">

            <h2 className="control-title">Оказание консультационных услуг</h2>
            <p className="control-text">- Контроль и надзор за качеством выполнения проектов
            строительных материалов и ремонтных работ;
            </p>
            <p className="control-text ">- Контроль и надзор за выполнением и разработкой проектов.</p>
            </div>
            </div>
        </div>
    )
}

export default Service
