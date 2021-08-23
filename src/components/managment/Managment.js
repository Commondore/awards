
import './_Managment.sass';
import man from './man.png';
import tala from './tala.png';
import ulan from './ulan.png';
import ege from './ege.png';
import john from './john.png';
import natali from './natali.png';
import gold from './gold.png';


import React from 'react'
import Secnav from '../secnav/Secnav';


function Managment() {
    return (
        // <div className="wrapper">


        //     <div className="managment">

                <div className="container">
                    <Secnav/>
                     <h2 className="manag-title">Руководство</h2>
                     <div className="card__group">

                        <div className="card__item">
                            <div className="img-card">
                                <img src={man} alt="" className="person-img" />

                            </div>
                            <div className="family-title">
                                <p className="name-title">Нурманбетов Кадырбек Ракымбекович</p>
                                <hr className="line-decor"/>
                                <p className="post-title">Генеральный директор</p>
                            </div>
                        </div>
                        <div className="card__item">
                            <div className="img-card">
                                <img src={tala} alt="" className="person-img" />

                            </div>
                            <div className="family-title">
                                <p className="name-title">Ашымбеков Талайбек Нурланович</p>
                                <hr className="line-decor"/>
                                <p className="post-title">Заместитель Генерального Директора</p>
                            </div>
                        </div>
                        <div className="card__item">
                            <div className="img-card">
                                <img src={man} alt="" className="person-img" />

                            </div>
                            <div className="family-title">
                                <p className="name-title">Ормонов Кубанычбек Калыевич</p>
                                <hr className="line-decor"/>
                                <p className="post-title">Заместитель Генерального Директора"</p>
                            </div>
                        </div>
                        <h2 className="manag-title">Начальники отделов</h2>
                        {/* <div className="card__group"> */}
                        <div className="card__item">
                            <div className="img-card">
                                <img src={ulan} alt="" className="person-img" />

                            </div>
                            <div className="family-title">
                                <p className="name-title">Исаев Уланбек Жусупалиевич</p>
                                <hr className="line-decor"/>
                                <p className="post-title">Начальник Дорожного Отдела Управления по Проектированию</p>
                            </div>
                        </div>
                        <div className="card__item">
                            <div className="img-card">
                                <img src={ege} alt="" className="person-img" />
                            </div>
                            <div className="family-title">
                                <p className="name-title">Кабулова Жанылбубу Адыгинеевна</p>
                                <hr className="line-decor"/>
                                <p className="post-title">Начальник Отдела Инженерных Изысканий Управления по Проектированию </p>
                            </div>
                        </div>

                        <div className="card__item">
                            <div className="img-card">
                                <img src={john} alt="" className="person-img" />

                            </div>
                            <div className="family-title">
                            <p className="name-title">Мельник Евгений Владимирович</p>
                                <hr className="line-decor"/>
                                <p className="post-title">Начальник Отдела Искусственных Сооружений и Инженерных
                                расчетов Управления по Проектированию
                                </p>
                            </div>
                        </div>
                        <div className="card__item">
                            <div className="img-card">
                                <img src={natali} alt="" className="person-img" />
                            </div>
                            <div className="family-title">
                                <p className="name-title">Рокина Наталья Алексеевна</p>
                                <hr className="line-decor"/>
                                <p className="post-title">Начальник Отдела Смет Управления по Проектированию</p>
                            </div>

                        </div>
                        <div className="card__item">
                            <div className="img-card">
                                <img src={gold} alt="" className="person-img" />
                            </div>
                            <div className="family-title">
                                <p className="name-title">Карагулов Алтынбек Адылбекович</p>
                                <hr className="line-decor"/>
                                <p className="post-title">Начальник Управления по Проектированию</p>
                            </div>

                        </div>

                        {/* </div> */}
                    </div>
                </div>
        //     </div>

        // </div>

    )
}

export default Managment
