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
        
                    <h2 className="plane-title">Партнеры</h2>
                    <div className="plane-groupf">
                            <div className="plane-itemd">
                                <img src={dog} alt="" className="plane-img" />
                            </div>
                            <div className="plane-items">
                                <img src={spectr} alt="" className="plane-img" />
                            </div>
                            <div className="plane-itemu">
                                <img src={uneed} alt="" className="plane-img" />
                            </div>
                            <div className="plane-itema">
                                <img src={asian} alt="" className="plane-img" />
                            </div>
                            <div className="plane-itemr">
                                <img src={Road} alt="" className="plane-img" />
                            </div>
                            <div className="plane-itemp">
                                <img src={project} alt="" className="plane-imgj" />
                            </div>
                            <div className="plane-item">
                                <img src={atom} alt="" className="plane-img" />
                            </div>
                            <div className="plane-item">
                                <img src={phone} alt="" className="plane-imgp" />
                            </div>
                            <div className="plane-item">
                                <img src={central} alt="" className="plane-imgc" />
                            </div>
                        </div>

                        <div className="plane-grouph">
                            <div className="plane-item">
                                <img src={long} alt="" className="plane-img" />
                            </div>
                            <div className="plane-item">
                                <img src={credo} alt="" className="plane-img" />
                            </div>
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
    )
}

export default Plane
