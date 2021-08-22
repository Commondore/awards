
import './_Contact.sass';
import Mininav from '../mininav/Mininav';
import React from 'react'
import Map from './map.png';

function Contact() {
    return (
        <div className="wrapper">
            <div className="container">
                
                <Mininav className="contact-nav"/>
                <div className="contact-info">
                <h2 className="contact-title-decor">Контакты</h2>
                    <p className="info-text">
                        <span className="select">Адрес:</span><span className="itext">Кыргызская Республика, г.Бишкек, ул.Саманчина 6 </span> 
                    </p>
                    <p className="info-text"><span className="select" >Телефон:</span> <span className="itext"> +996(312) 56 98 76,
                    +996(312) 56 21 77, +996(312) 56 11 22 </span> 
                    </p>
                    <p className="info-text"><span className="select" >Факс:</span> <span className="itext">+996(312) 54 25 78 </span></p>
                    <p className="info-text"><span className="select" >Почта:</span> <span className="itext"> mail@kyrgyzdortrans.kg </span></p>
                    <p className="info-text"><span className="select" >Режим работы:</span> <span className="itext">Понедельник - Пятница  08:30 17:30</span>

                    </p>
                </div>
                <div className="map-banner">
                    <img src={Map} alt="" className="contact-img" />

                </div>
                <div className="form-group">
                <form action="" className="form-contact">
                               
                <h2 className="contact-title-decor">Свяжитесь с нами</h2>
                
                
                        <div className="input-box">
                            <label htmlFor="fname" className="input-title">Имя</label>
                            <div className="input">
                                <input type="text" className="finput" id="fname" placeholder="Введите ваше имя" />
                            </div>
                        </div>
                        <div className="input-box">
                            <label htmlFor="sname" className="input-title">Почта</label>
                            <div className="input">
                                <input type="text" className="finput" id="sname" placeholder="Введите электронный адрес" />
                            </div>
                        </div>

                        <div className="input-box">
                            <label htmlFor="tname" className="input-title">Тема сообщения </label>
                            <div className="input">
                                <input type="text" className="finput" id="tname" placeholder="Введите тему " />
                            </div>
                        </div>

                        <div className="input-box">
                            <label htmlFor="aname" className="input-title">Сообщение</label>
                            <div className="input-area">
                                <textarea type="text" className="ainput" id="aname" placeholder="Введите текст" />
                            </div>
                        </div>
                        
                
                    

                  
                    {/* <div className="btn">
                        <div className="form-btn">ОТПРАВИТЬ</div>

                    </div> */}
                </form>
               </div>
            </div>
        </div>
    )
}

export default Contact

