
import './_License.sass'
import love  from './love.png'
import river from './river.png'
import lamp from './lamp.png'

import React from 'react'

function License() {
    return (
        <div className="wrapper">
            <div className="container">
                <h2 className="license-title">Лицензии</h2>
                <div className="license-group">
                    <div className="license-item">
                        <img src={love} alt="" className="license-img" />
                    </div>
                    <div className="license-item">
                        <img src={river} alt="" className="license-img" />
                    </div>
                    <div className="license-item">
                        <img src={lamp} alt="" className="license-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default License