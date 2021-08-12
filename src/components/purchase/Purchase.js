
import './_Purchase.sass';
import Rose from './../../assets/img/rose.png';
import React from 'react';
import arrow from './arrow.png';

function Purchase() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="img-box">
                    <img src={Rose} alt="" className="header-banner" />

                </div>
                    <div className="banner-content">
                        <h1 className="banner__title banner-title-purchase">О предприятии</h1>
                        <p className="banner-text banner-text-purchase">Государственное предприятие Проектно-изыскательский институт
                            "Кыргыздортранспроект" при министерстве транспорта и дорог Кыргызской Республики
                            является органом, ведающим вопросами науки и проектирования, разработки и внедрения
                            в производство проектов автомобильных дорог и сооружений, которые обеспечивают 
                            потребности развития экономики и населения Кыргызской Республики в услугах, определяемых
                            настоящим Уставом и законодательством Кыргызской Республики.
                        </p>
                    </div>
                    <h2 className="purchase-title ">Госзакупки</h2>
                    <h3 className="purchase-slogan">Параметры тендера</h3>
                    <div className="purchase-group">
                        <div className="purchase-container">
                            <div className="purchase__item"><span className="slogan">Проектный институт "Кыргыздортранспроект" </span></div>
                            <div className="purchase__item"><span className="slogan">Запрещающая организация </span> </div>
                            <div className="purchase__item-decor"> <span className="slogan">Метод закупок</span></div>
                            <div className="purchase__item-decor"><span className="slogan"> Прямого заключения договора</span> </div>
                            <div className="purchase__item"><span className="slogan">Дата публикации</span> </div>
                            <div className="purchase__item"><span className="slogan">11 ноября 12:36</span> </div>
                            <div className="purchase__item-decor "><span className="slogan">Дата завершения</span> </div>
                            <div className="purchase__item-decor "><span className="slogan">16 ноября 2021 09:03</span> </div>
                            <div className="purchase__item"><span className="slogan">Источники финансирования</span> </div>
                            <div className="purchase__item"><span className="slogan">Собственные средства</span> </div>
                            <div className="purchase__item-decor "><span className="slogan">Наименование закупки</span> </div>
                            <div className="purchase__item-decor "><span className="slogan">Услуги обслуживания, ремонт кондиционеров</span> </div>
                            <div className="purchase__item"><span className="slogan">Формат закупок</span> </div>
                            <div className="purchase__item"><span className="slogan">Стандартный</span> </div>
                            <div className="purchase__item-decor "><span className="slogan">Планируемая сумма</span> </div>
                            <div className="purchase__item-decor "><span className="slogan">7 398</span> </div>
                            <div className="purchase__item"><span className="slogan">Валюта</span> </div>
                            <div className="purchase__item"> <span className="slogan">Кыргызский сом</span></div>
                        </div>
                    </div>

                    <h3 className="purchase-slogan">Квалификационные требования</h3>
                    <div className="purchase-box">
                        <div className="purchase-left">
                            <h3 className="slogan-left">Квалификация </h3>
                            <div className="left-group">
                                <span className="left-slogan">1. Сведения о наличии выполнения 
                                аналогичных услуг</span>
                                <span className="left-slogan">2.  Участники конкурса должны 
                                выполнить свои обязательства по уплате страховых взносов</span>
                                <span className="left-slogan">3. Участники конкурса должны
                                выполнить свои обязательства по уплате налогов в Кыргызской Республики </span>
                                <span className="left-slogan">4. Документ определяющий
                                юридический статус и место регистрации </span>
                                <span className="left-slogan">5. Документ определяющий
                                основной вид деятельности </span>
                            </div>
                        </div>




                        <div className="purchase-right">
                            <h3 className="slogan-right">Требование </h3>
                            <div className="right-group">
                                <span className="right-slogan">1. Иметь опыт выполнения не менее
                                    (указать количество) аналогичных договоров/услуг на сумму не менее 8 000 сом
                                </span>
                                <span className="right-slogan">2. Предоставить информацию об отсутствии
                                    задолженности по уплате страховых взносов
                                </span>
                                <span className="right-slogan">3. Предоставить информацию
                                    о задолженности по уплате налоговых взносов
                                </span>
                                <span className="right-slogan">4. Предоставить сканированную копию 
                                    оригинала свидетельства о регистрации
                                </span>
                                <span className="right-slogan">5. Предоставить сканированную
                                    копию оригинала устава
                                </span>
                            </div>
                        </div>

                </div>
                {/* <div className="copy">
                    <a href="#" className="purchase__link"> Скачать документ в электронном виде </a>
                    <img src={arrow} alt="" className="arrow-img" />
                </div> */}
            </div>
        </div>
    )
}

export default Purchase
