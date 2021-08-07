
import './_Newsday.sass';
import Rose from './../../assets/img/rose.png';
import Mininav from '../mininav/Mininav';
import React from 'react'
import Sign from './sign.png';
import Car from './car.png';
import Snow from './snow.png';
import Stone from './stone.png';

function Newsday() {
    return (
        <div className="wrapper">
            <div className="container">
                <img src={Rose} alt="" className="header-banner header-banner-news" />
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
                <Mininav className="content-nav"/>
                <h2 className="news-title">Новости дня</h2>
                <div className="newsday img__group">
                    <div className="newsday-box">
                        <div className="sign-img">
                            <img src={Sign} alt="" className="newsday-img" />
                        </div>
                        <div className="newsday-block">
                            <p className="newsday-slogan">11:39 19.06.2021</p>
                            <p className="newsday-text-decor">Миртранс: на трассе Бишкек-Ош делают ямочный ремонт</p>
                            <p className="newsday-text">На трассе Бишкек-Ош проводят ямочный ремонт, сообщила 
                            пресс-служба Министерства транспорта и коммуникаций КР.
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="newsday-line"/>
                <div className="newsday img__group">
                    <div className="newsday-box">
                        <div className="sign-img">
                            <img src={Car} alt="" className="newsday-img" />
                        </div>
                        <div className="newsday-block">
                            <p className="newsday-slogan">12:49 12.04.2021</p>
                            <p className="newsday-text-decor">Возобновились строительные работы на большом 
                            участке трассы Бишкек-Ош.
                            </p>
                            <p className="newsday-text">Контракт с подрядчиком включает в себя улучшение этого  
                            учаска дороги, в том числе строительство мостов.
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="newsday-line"/>
                <div className="newsday img__group">
                    <div className="newsday-box">
                        <div className="sign-img">
                            <img src={Snow} alt="" className="newsday-img" />
                        </div>
                        <div className="newsday-block">
                            <p className="newsday-slogan">17:24 01.04.2021</p>
                            <p className="newsday-text-decor">Перевал Тоо-Ашуу на автодороге Бишкек-Ош. Архивное 
                            фото. Трассу Бишкек-Ош временно закрыли из-за непогоды.
                            </p>
                            <p className="newsday-text">Из-за пурги на перевале Ала-Бел видимость стала 
                            минимальной и движение машин замедлилось.
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="newsday-line"/>
                <div className="newsday img__group">
                    <div className="newsday-box">
                        <div className="sign-img">
                            <img src={Stone} alt="" className="newsday-img" />
                        </div>
                        <div className="newsday-block">
                            <p className="newsday-slogan">10:00 17.11.2020</p>
                            <p className="newsday-text-decor">Онлайн-брифинг "О ремонте и строительстве
                            
                            главных дорог Кыргызстана"</p>
                            <p className="newsday-text">Мероприятие состоится во вторник, 17 ноября, в 10:00
                            в прямом эфире на странице Sputnik Кыргызстан в Facebook.
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="newsday-line"/>
                <div className="button">ЗАГРУЗИТЬ ЕЩЕ</div>
            </div>
        </div>
    )
}

export default Newsday
