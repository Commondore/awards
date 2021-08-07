
import './_News.sass';
import Rose from './../../assets/img/rose.png';
import React from 'react'

function News() {
    return (
        <div className="wrapper">
            <div className="container">
                <img src={Rose} alt="" className="header-banner" />
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
                
                <h2 className="news-title">Новости</h2>
            </div>
        </div>
    )
}

export default News
