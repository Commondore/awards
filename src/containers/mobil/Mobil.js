import './_Mobil.sass';
import {Link} from 'react-router-dom'
import React from 'react'
import { useState } from 'react'
import pluse from './plus.png'
import {NavLink} from 'react-router-dom';
// import {FaPlus} from 'react-icons/fa'

function Mobil() {
    const [isLoadingFirst, setisLoadingFirst] = useState(false)
    const [isLoadingSecond, setisLoadingSecond] = useState(false)
    const [isLoadingThird, setisLoadingThird] = useState(false)
    return (
        <div className="mobil">
            <div className="mobil-mail">
                {/* <div className="header-moon">

                <img src={moon} alt="" className="mobil-moon" />
                </div> */}
                <div className="header-news--right">
                    <a href="#" className="news-kg">Кыр</a>
                    <span className="news-kg--decor">/</span>
                    <a href="#" className="news-kg"> Рус</a>
                    <span className="news-kg--decor">/</span>
                    <a href="#" className="news-kg">Eng</a>
                </div>
                <div className="close">
                     <img src=" http://isfana.kg/static/img/svg/close.svg?8568ab22d923" alt="" className="close-head" />

                </div>
            </div>


            {/* <form className="form__search-mobil">
                <input className="input__header-mobil" type="search" placeholder="Сайттан издөө  "/>
                <FaSearch className="btn-mobil" type="submit"/>
            </form> */}

            <nav className="mobil-menu">
                <div className="mobil-drop">
                <NavLink to="/" exact onClick={() => setisLoadingFirst(!isLoadingFirst)}  className="mobil-link">Главная
                    <ul className={`menu__list ${isLoadingFirst ? 'menu__list-none' : ''}`} >
                        <li className="menu__item" >
                            <Link to="/managment" className="drop__link">Руководство</Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/ceiling" className="drop__link">Структура
                             </Link>
                        </li>
                        <li className="menu__item">
                            <Link to ="/history" className="drop__link">История </Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/award" className="drop__link">Награды</Link>
                        </li>
                        <li className="menu__item" >
                            <Link to="/table" className="drop__link">Сертификаты</Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/license" className="drop__link">Лицензии
                             </Link>
                        </li>
                        <li className="menu__item">
                            <Link to ="/balcon" className="drop__link">Реквизиты </Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/job" className="drop__link">Вакансии</Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/contact" className="drop__link">Контакты</Link>
                        </li>
                    </ul>
                </NavLink>
                </div>
                <img src={pluse} alt="" className="img-plusf"/>
                <div className="mobil-drop" >
                <NavLink to="/effort" onClick={() => setisLoadingSecond(!isLoadingSecond)}  className="mobil-link">Деятельность
                    <ul className={`menu__list ${isLoadingSecond ? 'menu__list-none' : ''}`} >
                        <li className="menu__item" >
                            <Link to="/effort" className="drop__link">Изыскание и проектирование</Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/control" className="drop__link">Контроль и надзор за выполнением и
                            разработкой проектов
                             </Link>
                        </li>
                        <li className="menu__item">
                            <Link to ="/service" className="drop__link">Оказание консультационных услуг </Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/study" className="drop__link">Научная деятельность </Link>
                        </li>
                    </ul>
                </NavLink>
                </div>
                <img src={pluse} alt="" className="img-pluss"/>
            <div className="mobil-drop">

                <NavLink to="/pen" onClick={() => setisLoadingThird(!isLoadingThird)} className="mobil-link">Все обьекты
                    <ul className={`menu__list ${isLoadingThird ? 'menu__list-none' : ''}`} >
                        <li className="menu__item">
                            <Link to="/pen" className="drop__link">Объекты заданные в эксплуатацию</Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/stripe" className="drop__link">Проектируемые </Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/zone" className="drop__link"> Реконструируемые</Link>
                        </li>
                    </ul>
                </NavLink>
            </div>
            <img src={pluse} alt="" className="img-plust"/>
                <Link to="/plane" className="mobil-link">Партнеры </Link>
                <Link to="/purchase" className="mobil-link">Госзакупки</Link>
                <Link to="/news" className="mobil-link">Новoсти</Link>
                <Link to="/contact" className="mobil-link">Контакты</Link>
            </nav>
        </div>
    )
}

export default Mobil
