
import './_Award.sass';
import img from './Diplom IMG.png'
import pen from './pen.png'
import Secnav from '../secnav/Secnav';
import award from './award.png';
import snow from './snow.png';
import pencil from './pencil.png';
import summer from './summer.png';
import ipad from './ipad.png';


import React from 'react'

function Award() {
    return (
        <div className="wrapper">
            <div className="award">
                <div className="container">
                    <Secnav/>
                    <h2 className="award-title">Награды</h2>
                    <div className="award-group">
                        <div className="award-item">
                            <img src={award} alt="" className="award-img" />
                        </div>
                        <div className="award-item">
                            <img src={snow} alt="" className="award-img" />
                        </div>
                        <div className="award-item">
                            <img src={pencil} alt="" className="award-img" />
                        </div>
                        <div className="award-item">
                            <img src={summer} alt="" className="award-img" />
                        </div>
                        <div className="award-item">
                            <img src={ipad} alt="" className="award-img" />
                        </div>

                         <div className="award-item">
                            <img src={pen} alt="" className="award-imgp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Award 