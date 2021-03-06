
import './_Footer.sass';
import flag from './flags.png';
import call from './call.png';
import fax from './fax.png';
import mail from './mail.png';
import facebook from './face.png'
import linkedin from './linkedin.png'
import youtube from './youtube.png'
import calendar from './calendar.png'
import foreign from './foreign.png'

import React from 'react'
import Basement from './basement/Basement';

function Footer() {
    return (
        <>
            <div className="wrapper">

                <div className="footer">
                    <div className="container">
                        <div className="footer-menu">

                            <div className="footer-group">


                      
                                <div className="footer-grid__item">
                                    <div className="footer-box">
                                        <p className="footer-text">ГП ПИИ Кыргыздортранспроект при Министерстве
                                        Транспорта и Коммуникаций Кыргызской Республики 
                                        </p>
                                    </div>

                                    <div className="foot-adress foot-adress-flag">
                                        <img src={flag} alt="" className="img-flag" />
                                        <a href="#" className="adress adress-flag">г.Бишкек, ул.Саманчина 6, Кыргызская Республика</a>
                                    </div>
                                    <div className="foot-adress foot-addres-tel">
                                        <img src={call} alt="" className="img-flag" />
                                        <a href="#" className="adress">+996(312) 56 98 76</a>
                                    </div>
                                    <div className="foot-adress foot-adress-fax">
                                        <img src={fax} alt="" className="img-flag" />
                                        <a href="#" className="adress">+996(312) 56 21 77</a>
                                    </div>
                                    <div className="foot-adress foot-adress-mail">
                                        <img src={mail} alt="" className="img-flag" />
                                        <a href="#" className="adress">kyrgyzdortras@yandex.ru</a>
                                    </div>
                                </div>

                                <div className="footer-grid__item footer-grid__item-social">
                                    <h3 className="social-title">Социальные сети</h3>
                                    <div className="social__group">
                                        <img src={facebook} className="social-img"></img>
                                        <img src={linkedin} className="social-img social-img-center"></img>
                                        <img src={youtube} className="social-img"></img>
                                    </div>
                                </div>

                                    <div className="footer-grid__item footer-grid__item-call">
                                        <h3 className="social-title social-right">Режим работы</h3>
                                        <div className="working">
                                        <img src={calendar} className="call-img"></img>
                                        <a href="" className="adress">Понедельник - Пятница</a>
                                        </div>
                                        <span className="hours">08:00 - 17:00</span>
                                    </div>
                                
                        
                            <div className="footer-grid__item footer-grid__item-right">

                                <div className="foot-decor">
                                    {/* <a href="#" className="footer-text--decor__call">МТиК
                                    
                                    </a> */}
                                    <a href="#" className="footer-text--decor">
                                    Министерство Транспорта и Коммуникаций
                                    Кыргызской Республики
                                    </a>
                                    <img src={foreign} alt="" className="social-decor" />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            <Basement/>
        </>
    )
}

export default Footer 
