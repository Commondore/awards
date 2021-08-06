
import './_Study.sass';
import Banner from './../../assets/img/Banner.png';
import Submenu from '../submenu/Submenu';
import React from 'react'

function Study() {
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
                <h2 className="study-title">Научная деятельность</h2>
                <div className="study-box">
                    <p className="study-text">-Обеспечение единой научно-технической стратегии в проведении научных
                    измерительныхисследований дорожного строительства; <br></br> - Внедрение новых строительных материалов,
                    изделий и конструкций;<br></br> - Разработка нормативных документов по капитальному строительству;<br></br>
                    - Выполнение научно-технических и опытно конструкторских работ по дорожному строительству, инженерным
                    системам и сооружениям на дорогах, охране окружающей среды; <br></br> -Внедрение в дорожное строительство 
                    через проектирование достижений науки и техники в области дорожного строительства, производство
                    строительных материалов, конструкций, инженерных систем и сооружений; <br></br> - Проведение 
                    арбитражных испытаний строительных конструкций, изделий и материалов.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Study
