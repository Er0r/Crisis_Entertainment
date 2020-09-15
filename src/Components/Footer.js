import React from 'react'

import '../Assets/Footer.css'
function Footer() {
    return (
        <div>
            <div class="footer-bottom">
                <div class="container">
                    <p class="pull-left"> Copyright © CRISIS Entertainment. All right reserved. </p>
                    <div class="pull-right">
                        <ul class="nav nav-pills payments">
                                <p className="social_media_text"> Social-Media Links </p>
                                <ul class="social">
                                    <li> <a href="https://www.facebook.com/AnnihilationCrisis"> <i class=" fa fa-facebook">   </i> </a> </li>
                                    <li> <a href="https://twitter.com/AnihilationIn"> <i class="fa fa-twitter">   </i> </a> </li>
                                    <li> <a href="https://www.linkedin.com/company/crisis-entertainment-ltd"> <i class="fa fa-linkedin">   </i> </a> </li>
                                    <li> <a href="https://www.youtube.com/channel/UCfNWSKZoRmjO48CCu7Xx6Yw"> <i class="fa fa-youtube">   </i> </a> </li>
                                </ul>
                        </ul> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
