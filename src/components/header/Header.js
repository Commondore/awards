
import React from 'react'
import './_Header.sass';
import moon from './../../assets/img/moon.png';
import bars from './bars.png';
import Logo from './logo/Logo';
import Navigation from './navigation/Navigation';
import Banner from '../banner/Banner';
import Secnav from '../secnav/Secnav';




function Header() {
    return (
        <>
        <div className="wrapper">
            <div className="header">
                <div className="header-news">
                    <div className="container">
                       
                        <div className="header-box">
                            <div className="header-news--left">
                                <img src={bars} alt="" className="header-clock" />
                                <span className="news-clock">07:00</span>
                            </div>
                            <div className="news-info">
                                <a href="" className="header-news__link news__link">Важные новости</a>
                                <a href="" className="header-news__link news__link">Возобновились строительные работы на большом участке трассы Бишкек-Ош</a>
                            </div>
                    
                            <div className="header-news--right">
                                <a href="#" className="news-kg">Кыр</a>
                                <span className="news-kg--decor">/</span>
                                <a href="#" className="news-kg"> Рус</a>
                                <span className="news-kg--decor">/</span>
                                <a href="#" className="news-kg">Eng</a>
                                <img src={moon} alt="" className="header-moon" />
                            </div>
                        </div>
                    </div>
                </div>
                <Logo/>
                <Navigation/>
                <Banner/>
            </div>

        </div>
      
        </>
    )
}

export default Header

