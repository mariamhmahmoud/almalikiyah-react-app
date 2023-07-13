


import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from "../assets/almalikiyah.png"

const Donate = () => {
    const style = {
        width: 'auto',
        height: '300px',
        marginTop: '1%'
    };
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="px-4  my-5 text-center">
                    <h1 className="display-5 fw-bold">Donate</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Donate to AlMalikiyah Charitable Society using the button below. We appreciate any and all donations!</p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <form action="https://www.paypal.com/donate" method="post" target="_blank">
                    <input type="hidden" name="business" value="ZJAXBYD2SJ2QE" />
                    <input type="hidden" name="no_recurring" value="0" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
                <img alt="logo" src={logo} className="img-fluid" style={style} />
            </div>
            <Footer />
        </div>
    );
}

export default Donate;