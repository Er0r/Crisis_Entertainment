import React from 'react'
import '../Assets/About.css';
import annihilation2 from '../Assets/beautiful.png';

function About() {
    return (
        <div>
            <div class="aboutus-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6 col-xs-12">
                            <div class="aboutus">
                                <h2 class="aboutus-title">About Us</h2>
                                <h3 class="aboutus-text">Crisis Entertainment is a video game startup currently operating in Australia, Bangladesh and India.</h3>
                                <h3 class="aboutus-text">Ptesently it is trying to takeover gaming industry through disruptive innovation</h3>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 col-xs-12">
                            <div class="aboutus-banner">
                                <img src={annihilation2} alt="Annihilation" style={{width:"390px", height:"500px", zIndex: "1"}}/>
                            </div>
                        </div>
                        <div class="col-md-5 col-sm-6 col-xs-12">
                            <div class="feature">
                                <div class="feature-box">
                                    <div class="clearfix">
                                        <div class="iconset">
                                            <span class="glyphicon glyphicon-cog icon"></span>
                                        </div>
                                        <div class="feature-content">
                                            <h3>Gamer's Choice</h3>
                                            <p>Our first priority is Gamer's choice. We have been researching this methodology and recent situation to make a pipline and set up a universe for our games which is really missing in recents game's genre.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="feature-box">
                                    <div class="clearfix">
                                        <div class="iconset">
                                            <span class="glyphicon glyphicon-cog icon"></span>
                                        </div>
                                        <div class="feature-content">
                                            <h3>Reliable services</h3>
                                            <p>The background powers of Crisis Entertainment Ltd. are only the people who are very passionate about this Industry . They have come with a long times of experince in Game Engineering and also marketing. So , this is our definitely a strong side.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="feature-box">
                                    <div class="clearfix">
                                        <div class="iconset">
                                            <span class="glyphicon glyphicon-cog icon"></span>
                                        </div>
                                        <div class="feature-content">
                                            <h3>Support For Streamers</h3>
                                            <p>Streamers Will get amazing prizes and Many Tournament will organize. Participate and win aristocratic prizes. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
