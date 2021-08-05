
import './_Award.sass';
import img from './Diplom IMG.png'
import pen from './pen.png'

import React from 'react'

function Award() {
    return (
        <div className="wrapper">
            <div className="award">
                <div className="container">
                    <h2 className="award-title">Награды</h2>
                    <div className="award-group">
                        <div className="award-item">
                            <img src={img} alt="" className="award-img" />
                        </div>
                        <div className="award-item">
                            <img src={pen} alt="" className="award-img" />
                        </div>
                        <div className="award-item">
                            <img src={pen} alt="" className="award-img" />
                        </div>
                        <div className="award-item">
                            <img src={pen} alt="" className="award-img" />
                        </div>
                        <div className="award-item">
                            <img src={pen} alt="" className="award-img" />
                        </div>
                        <div className="award-item">
                            <img src={pen} alt="" className="award-img" />
                        </div>
                        <div className="award-item">
                            <img src={pen} alt="" className="award-img" />
                        </div>
                        <div className="award-item">
                            <img src={pen} alt="" className="award-img" />
                        </div>
                        <div className="award-item">
                            <img src={pen} alt="" className="award-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Award 