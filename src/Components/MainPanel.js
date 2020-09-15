import React from 'react'
import '../Assets/MainPanel.css'
import logo1 from '../Assets/logo_annihilation.png';
import logo2 from '../Assets/dd.png';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";



function MainPanel() {
    return (
        <div>
            <h1>[̲̅C][̲̅R][̲̅Y][̲̅S][̲̅I][̲̅S]   [̲̅E][̲̅N][̲̅T][̲̅E][̲̅R][̲̅T][̲̅A][̲̅I][̲̅N][̲̅M][̲̅E][̲̅N][̲̅T]</h1>
            <p>(Imagination Inside)</p>
            <AliceCarousel autoPlay autoPlayInterval="3000" buttonsDisabled={true}>
                <img src={logo1} className="sliderimg" alt="Annihilation_pic1"/>
                <img src={logo2}  className="sliderimg" alt="Annihilation_pic2"/>
            </AliceCarousel>
            
            <div className="sub_section">
                <div className="sub_banner">
                    <img className="sub__banner_img"src={require('../Assets/vlsnap.png')}  alt="annihilation" /> 
                    <h1>"𝙂𝘼𝙈𝙀𝙍'𝙎 𝘼𝙍𝙀 𝙊𝙐𝙍 𝙃𝙄𝙂𝙃𝙀𝙎𝙏 𝙋𝙍𝙄𝙔𝙊𝙍𝙄𝙏𝙔"</h1>
                    <h1>- 𝐒𝐈𝐀𝐌 𝐇𝐀𝐒𝐀𝐍 𝐔𝐃𝐎𝐘</h1>
                    <p>(LEAD GAME DEVELOPER)</p>
                </div>

                <div className="sub_banner2">
                    <img className="sub__banner2_img"src={require('../Assets/vlsnap.png')} alt="annihilation" /> 
                    <h1>"𝙀𝙎𝙋𝙊𝙍𝙏𝙎 𝙒𝙄𝙇𝙇 𝙏𝘼𝙆𝙀 𝙊𝙑𝙀𝙍</h1>
                    <h1>𝙏𝙍𝘼𝘿𝙄𝙏𝙄𝙊𝙉𝘼𝙇 𝙎𝙋𝙊𝙍𝙏𝙎"</h1>
                    <h1>- 𝐒𝐇𝐀𝐃𝐌𝐀𝐍 𝐒𝐈𝐀𝐍 </h1>
                    <p>(C.E.O. OF CRISIS ENTERTAINMENT) </p>
                </div>
            </div>
        </div>
    )
}

export default MainPanel
