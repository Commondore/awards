
import './_Newcontact.sass'
import Mininav from '../../mininav/Mininav';
import React from 'react'
import map from './../../contact/map.png';
import Header from '../../header/Header';

function Newcontact() {
    return (
        <>
        555
           <div className="wrapper">
            <Header/>
            <div className="newcontact">

           
            <div className="container">
                
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
                    <img src={map} alt="" className="contact-img" />

                </div>
                <div className="form-group">
                    <form action="" className="form-contact">
                        <h2 className="contact-title-decor">Свяжитесь с нами</h2>
                        <div className="input-boxb">

                            <div className="input-boxs">
                                <label htmlFor="fname" className="input-title">Имя</label>
                                <div className="input">
                                    <input type="text" className="finput" id="fname" placeholder="Введите ваше имя" />
                                </div>
                            </div>

                            <div className="input-boxs">
                                <label htmlFor="sname" className="input-title">Почта</label>
                                <div className="input">
                                    <input type="text" className="finput" id="sname" placeholder="Введите электронный адрес" />
                                </div>
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

                    </form>
                </div>
                {/* <form action="" className="form-contact">
                <h2 className="contact-title-decor">Свяжитесь с нами</h2>
                    <div className="form-box">
                        <div className="form-left">
                            <p className="form-slogan">Имя:</p>
                            <input type="text" name="" className="form-input" placeholder="Введите ваше имя"/>
                        </div> */}

                        {/* <div className="form-right">
                            <p className="form-slogan">Почта:</p>
                            <input type="email" name="" className="form-input" placeholder="Электронный адрес " width="100%"/>
                        </div>
                    </div>
                    <div className="input-slogan">
                         <p className="form-slogan">Тема сообщения:</p>
                        <input type="text" className="form-input-decor" name="" placeholder="Тема сообщения" width="100%"/>
                    </div> */}


                    {/* <div className="input-slogan">
                    <p className="form-slogan">Сообщение:</p>
                    <textarea type="text" name="" id="" 
                     className="form-message" placeholder="Введите текст"></textarea>

                    </div> */}
             {/* <div className="btn">
                        <div className="form-btn">ОТПРАВИТЬ</div>

                  </div> 
                 </form> */}
            </div>
           </div>
    </div> 
        </>
    )
}

export default Newcontact
