
import './_Contact.sass';
import Rose from './../../assets/img/rose.png';
import Mininav from '../mininav/Mininav';
import React from 'react'
import Map from './map.png';

function Contact() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="img-box">
                     <img src={Rose} alt="" className="header-banner header-banner-news" />

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
                <Mininav className="contact-nav"/>
                <h2 className="contact-title">Контакты</h2>
                <div className="contact-info">
                    <p className="info-text"><span className="info-slogan">Адрес:</span> Кыргызская Республика,
                    г.Бишкек, ул.Саманчина 6
                    </p>
                    <p className="info-text"><span className="info-slogan" >Телефон:</span> +996(312) 56 98 76,
                    +996(312) 56 21 77, +996(312) 56 11 22
                    </p>
                    <p className="info-text"><span className="info-slogan" >Факс:</span> +996(312) 54 25 78</p>
                    <p className="info-text"><span className="info-slogan" >Почта:</span> mail@kyrgyzdortrans.kg</p>
                    <p className="info-text"><span className="info-slogan" >Режим работы:</span> Понедельник - Пятница
                    08:30 17:30
                    </p>
                </div>
                <div className="map-banner">
                    <img src={Map} alt="" className="contact-img" />

                </div>
                <form action="" className="form-contact">
                <h2 className="contact-title-decor">Свяжитесь с нами</h2>
                    <div className="form-box">
                        <div className="form-left">
                            <p className="form-slogan">Имя:</p>
                            <input type="text" name="" className="form-input" placeholder="Введите ваше имя"/>
                        </div>
                        <div className="form-right">
                            <p className="form-slogan">Почта:</p>
                            <input type="email" name="" className="form-input" placeholder="Электронный адрес "/>
                        </div>
                    </div>
                    <div className="input-slogan">
                         <p className="form-slogan">Тема сообщения:</p>
                        <input type="text" className="form-input-decor" name="" placeholder="Тема сообщения"/>
                    </div>


                    <div className="input-slogan">
                    <p className="form-slogan">Сообщение:</p>
                    <textarea type="text" name="" id="" 
                     className="form-message" placeholder="Введите текст"></textarea>

                    </div>
                    {/* <div className="btn">
                        <div className="form-btn">ОТПРАВИТЬ</div>

                    </div> */}
                </form>
            </div>
        </div>
    )
}

export default Contact

