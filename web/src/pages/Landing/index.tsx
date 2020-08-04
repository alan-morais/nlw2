import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/lading.svg';
function Landing() {
    return (
        <div id="page-lading">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="logo proffy" />
                    <h2>Sua plataforma de estudos on-line</h2>
                    <img
                        src={landingImg} alt="Plataforme de Estudos"
                        className="hero-image" />
                    <div className="buttons-container">
                        <a href="" className="study">

                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;