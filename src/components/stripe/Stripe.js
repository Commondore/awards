
import './_Stripe.sass';
import Navdecor from '../navdecor/Navdecor';
import React from 'react'
import Mininav from '../mininav/Mininav';

function Stripe() {
    return (
        <div className="wrapper">
            <div className="container">
                    <Navdecor/>
                    <Mininav/>
                    
                <h2 className="study-title">Проектируемые</h2>
            </div>
        </div>
    )
}

export default Stripe
