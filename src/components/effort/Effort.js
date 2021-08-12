
import './_Effort.sass';

import Banner from './../../assets/img/Banner.png';
import robot from './robot.png';
import React from 'react'
import Submenu from '../submenu/Submenu';

function Effort() {
    return (
        <div className="wrapper">
            <div className="effort">

                <div className="container">
                    <div className="img-box">
                     <img src={Banner} alt="" className="header-banner" />

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
                        <Submenu className="submenu-effort"/>
                        <h2 className="effort-title">Изыскание и проектирование</h2>
                    </div>
                    <div className="img-robot">
                        <img src={robot} alt="" className="effort-img" />

                    </div>
                    <div className="effort-group">
                        <div className="effort-box">
                            <p className="effort-text">1. Инженерно-геодезические изыскания I уровня ответственности</p>
                            <p className="effort-text">- топографическая съемка на площади до 1000 га; <br></br>
                            - линейные изыскания; <br></br>
                            - создание геодезической разбивочной основы;
                            </p>
                            <p className="effort-text">2. Инженерно-геодезические изыскания I уровня ответственности</p>
                            <p className="effort-text">- инженерно-геологические работы под объекты строительства;<br></br>
                            - лабораторные исследования грунтов и воды;
                            </p>
                            <p className="effort-text">3. Работы по обследованию и оценке физико-геологических процессов
                            и явлений I уровня ответственности
                            </p>
                            <p className="effort-text">3.1 Разработка градостроительной документации объектов I 
                            ! уровня ответственности
                            </p>
                            <p className="effort-text">- территориальное планирование (транспртная инфраструктура);<br></br>
                            - генеральные планы городов и сельских населенных мест (транспртная инфраструктура, 
                            благоустройство);<br></br> - инженерная инфраструктура и защита территорий;
                            </p>
                            <p className="effort-text">3.2 Архитектурное проектирование объекто III уровня ответственности</p>
                            <p className="effort-text">- жилые дома, общественные здания и сооружения, объекты
                            производственного назначения
                            </p>
                            <p className="effort-text">3.3 Строительное проектирование и конструирование;</p>
                            <p className="effort-text">- жилые дома, общественные здания и сооружения, объекты
                            производственного назначения III уровня ответственности;<br></br>
                            - инженерные сооружения (галереи, эстакады, подпорные стенки) II уровня ответственности; <br></br>
                            - мосты, дороги и транспортные сооружения I уровня ответственности; <br></br>
                            - гидротехнические и мелиоративные сооружения (плотины, дамбы, каналы и др.) II уровня 
                            ответственности;  <br></br>
                            - обследование II уровня ответственности технического состояния конструкций, зданий и 
                            сооружений (предварительное обследование транспортных сооружений с оценкой их фактического 
                            состояния и выдачей заключения и рекомендаций по реконструкции и усилению) ;
                            </p>
                            <p className="effort-text">4. Проектирование инженерных систем, сетей и сооружений;</p>
                            <p className="effort-text">5. Проектирование внутренних и наружных систем, сетей и сооружений 
                            II уровня ответственности:
                            </p>
                            <p className="effort-text">- распределительные устройства и трансформаторные подстанции,
                            линии электропередачи, электроснабжение (10кв); <br></br>
                            - водоснабжение и канализация; <br></br>
                            - тепловые сети; <br></br>
                            - автоматизация контрольно-измерительные приборы, слаботочные устройства;
                            </p>
                            <p className="effort-text">6. Разработка специальных разделов проектов;</p>
                            <p className="effort-text">- охрана окружающей среды; <br></br>
                            - организация строительства; <br></br>
                            - смета и технико-экономическое обоснование.
                            </p>
                        </div>
                    </div>
                <div className="text-group-effort">
                    <h2 className="mini-effort-title">Контроль и надзор за выполнением и разработкой проектов</h2>
                    <p className="text-box-effort">-Контроль и надзор за качеством выполнения проектов строительных
                    материалов и ремонтных работ;<br/>
                    -Контроль и надзор за выполнением и разработкой проектов.
                     </p>
                    <h2 className="mini-effort-title">Оказание консультационных услуг</h2>
                    <p className="text-box-effort">-Контроль и надзор за выполнением и разработкой проектов<br/> 
                    --Контроль и надзор за качеством выполнения проектов строительных
                    материалов и ремонтных работ;
                    </p>
                    <h2 className="mini-effort-title"> Научная деятельность</h2>
                    <p className="text-box-effort">-Обеспечение единой научно-технической стратегии в проведении
                    научных экспериментальных исследований дорожного строительства;<br/>
                    -Внедрение новых строительных материалов, изделий и конструкций;<br/>
                    -Разработка нормативны документов по капитальному строительству;<br/>
                    -Выполнение научно-технических и опытно-конструкторских работ по дорожному строительству,
                    инженерным системам и сооружениям на дорогах, охране окружающей среды,<br/>
                    -Внедрение в дорожное строительство через проектирование достижений науки и техники в области
                    дорожного строительства, производство строительных материалов, конструкций, инженерных систем
                    и сооружений;<br/>
                    -Проведение арбитражных испытаний строительных конструкций, изделий и материалов.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Effort