import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>

                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt='Largest Broker'/>
                </div>

                <div className='col-6 p-5 mt-5'>
                    <h1 className='fs-2 mb-4'>Largest Stock Broker in India</h1>
                    <p className='mb-5 fs-6'>1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                             <li><p>Futures and Options</p></li>
                             <li><p>Commodity derivatives</p></li>
                            <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6 mb-3'>
                            <ul>
                            <li><p>Stocks & IPOs</p></li>
                            <li><p>Direct mutual funds</p></li>
                            <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div> 
                    </div>
                <img src='media/images/pressLogos.png' alt='Press Logos' style={{width:"90%"}}/>

                </div>

            </div>
        </div>
     );
}

export default Awards;