import './_Plane.sass';
import banner from './../../assets/img/Banner.png';
import dog from './logo-1.png';
import spectr from './Spectrum.png';
import uneed from './Uneed.png';
import asian from './Asian.png';
import Road from './Road.png';
import project from './project.png';
import atom from './atom.png';
import phone from './phone.png';
import central from './central.png';
import long from './Long.png';
import credo from './credo.png';
import tech from './tech.png';
import window from './window.png';
import stamp from './stamp.png';

import React from 'react'

function Plane() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="banner-sign">
                    <div className="img-box">
                        <img src={banner} alt="" className="header-banner" />
                    </div>
                    <div className="banner-title-decor">
                        <p className="banner__title">О Предприятии</p>
                    </div>
                    <p className="banner-text">Государственное предприятие Проектно-изыскательский институт
                        "Кыргыздортранспроект" при министерстве транспорта и дорог Кыргызской Республики
                        является органом, ведающим вопросами науки и проектирования, разработки и внедрения
                        в производство проектов автомобильных дорог и сооружений, которые обеспечивают 
                        потребности развития экономики и населения Кыргызской Республики в услугах, определяемых
                        настоящим Уставом и законодательством Кыргызской Республики.
                    </p>
                    <h2 className="plane-title">Партнеры</h2>
                    <div className="plane-group">
                        <div className="plane-item__box">
                            <div className="plane-item">
                                <img src={dog} alt="" className="plane-img" />
                            </div>
                            <div className="plane-item">
                                <img src={spectr} alt="" className="plane-img" />
                            </div>
                        </div>
                        <div className="plane-item__box">
                            <div className="plane-item">
                                <img src={uneed} alt="" className="plane-img" />
                            </div>
                            <div className="plane-item">
                                <img src={asian} alt="" className="plane-img" />
                            </div>
                        </div>
                        <div className="plane-item__box">
                            <div className="plane-item">
                                <img src={Road} alt="" className="plane-img" />
                            </div>
                            <div className="plane-item">
                                <img src={project} alt="" className="plane-img" />
                            </div>
                        </div>
                        <div className="plane-item__box">
                            <div className="plane-item">
                                <img src={atom} alt="" className="plane-img" />
                            </div>
                            <div className="plane-item">
                                <img src={phone} alt="" className="plane-img" />
                            </div>
                        </div>
                        <div className="plane-item__box">
                            <div className="plane-item">
                                <img src={central} alt="" className="plane-img" />
                            </div>
                            <div className="plane-item">
                                <img src={credo} alt="" className="plane-img" />
                            </div>
                            <div className="plane-item">
                                <img src={long} alt="" className="plane-img" />
                            </div>
                        </div>
                        <div className="plane-item__box">
                            <div className="plane-item">
                                <img src={tech} alt="" className="plane-img" />
                            </div>
                            <div className="plane-item">
                                <img src={window} alt="" className="plane-img" />
                            </div>
                            <div className="plane-item">
                                <img src={stamp} alt="" className="plane-img" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plane
