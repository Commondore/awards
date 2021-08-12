
import './_News.sass';
import Rose from './../../assets/img/rose.png';
import Mininav from '../mininav/Mininav';
import React from 'react';
import Road from './road.png';

function News() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="img-box">
                    <img src={Rose} alt="" className="header-banner header-banner-news" />

                </div>
                <div className="banner-content">
                    <h1 className="banner__title banner-title-news">О предприятии</h1>
                    <p className="banner-text banner-text-news">Государственное предприятие Проектно-изыскательский институт
                        "Кыргыздортранспроект" при министерстве транспорта и дорог Кыргызской Республики
                        является органом, ведающим вопросами науки и проектирования, разработки и внедрения
                        в производство проектов автомобильных дорог и сооружений, которые обеспечивают 
                        потребности развития экономики и населения Кыргызской Республики в услугах, определяемых
                        настоящим Уставом и законодательством Кыргызской Республики.
                    </p>
                </div>
                <Mininav className="content-nav"/>
                <h2 className="news-title">Новости</h2>
                <div className="img-box-road">
                <img src={Road} alt="" className="road-img" />

                </div>
                <div className="news-slogan">
                    <p className="news-decor">Минтранс : на трассе </p>
                    <p className="news-decor news-decor-slogan">Бишкек - Ош делают ямочный ремонт</p>
                </div>
                <p className="data-text">11:39  19.06.21</p>
                <div className="news-text">
                    <p>На трассе Бишкек-Ош проводят ямочный ремонт, сообщила пресс-служба Министерства транспорта
                        и коммуникаций КР.
                    </p>
                    <p>По данным ведомства, уже отремонтированы участки с 61-го по 103 километр (от Кара-Балты до 
                    перевала Тоо-Ашуу) и с 152-го по 196-й километр (Суусамырская долина). Сейчас дорогу ремонтируют
                    на 184-209-м килоиетрах.    
                    </p>
                    <p>"На перевале Тоо-Ашуу находится фрезеровочный агрегат. В ближайшие дни начнется снятие 
                    верхнего слоя асфальта, в частности, отфрезируют асфальтобетонное покрытие на 10 
                    сантиметров и проложат двухслойное асфальтобетонное покрытие на 12 сантиметров. Также укрепят 
                    обочину, нанесут дорожную разметку, установят дорожные знаки", - заявляет Минтранс.</p>
                </div>
            </div>
        </div>
    )
}

export default News
