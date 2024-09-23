import React from 'react';
import './Mbc.css';
import videoMbc from '../Img/MicrosoftBusinessCentral.mp4'
import col1 from '../Img/mbc_col1.png'
import col2 from '../Img/mbc_col2.png'
import mbc3_1 from '../Img/mbc3_1.png'
import mbc3_2 from '../Img/mbc3_2.png'
import mbc3_3 from '../Img/mbc3_3.png'
import mbc3_4 from '../Img/mbc3_4.png'

function Mbc() {
    return (
        <div className="Mbc">
            <br/> <br/> <br/> <br/>
            <div className="Mbc1">
                <br/>

            <div className="video-container-mbc">
                <div className="content-wrapper">
                    <div className="rectangle-gauche">
                        <span className="mbc-title">Microsoft Business Central</span>
                        <br/>
                        <span className="mbc-intro">"Business central" typically refers to a central hub or software solution for managing various aspects of a business, often associated with Microsoft Dynamics 365 Business Central in the context of enterprise resource planning (ERP)</span>
                    </div>

                    <video className="videoMBC" controls>
                        <source src={videoMbc} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            </div>
            <br/><br/><br/><br/><br/>
            <div className="Mbc1">
                <div className="content-wrapper2">
                    <div className="part2-gauche">
                        <div className="part2-title">
                            Why choose business central for your teams ?
                        </div>
                        <div className="part2-texte">
                            Implementing Business Central, such as Microsoft Dynamics 365 Business Central, can greatly benefit a company
                            by providing an integrated and centralized platform for managing key business functions. This all-in-one solution
                            streamlines processes across finance, operations, sales, and customer service. It enhances efficiency, enables real-time
                            insights through robust reporting and analytics, and supports better decision-making.
                        </div>
                    </div>
                    <div className="part2-droite">
                        <div className="colonne_1">
                            <img src={col1} alt={"mbc colonne 1"}/>
                        </div>
                        <div className="colonne_2">
                            <img src={col2} alt={"mbc colonne 2"}/>
                        </div>
                    </div>
                </div>
            </div>

            <br/><br/><br/> <br/><br/><br/> <br/><br/><br/> <br/><br/><br/> <br/>
            <div>
                <span className="mbc_title3">What can we do with business central ?</span>
                <br/> <br/> <br/> <br/> <br/>
                <div className="mbc_texte3_div">
                    <span className="mbc_texte3">Decentralization is complicated stuff, we make it simple while offering a
                    new standard in security, performance, and pricing.</span>
                </div>

            </div>
            <br/><br/><br/> <br/><br/>
            <div className="mbc_part3">
                <img src={mbc3_1} alt={"mbc part 3"}/>
                <br/> <br/> <br/>
                <img src={mbc3_2} alt={"mbc part 3"}/>
                <br/> <br/> <br/>
                <img src={mbc3_3} alt={"mbc part 3"}/>
                <br/> <br/> <br/>
                <img src={mbc3_4} alt={"mbc part 3"}/>
            </div>
            <br/><br/><br/> <br/><br/><br/> <br/><br/><br/>
        </div>
    );
}

export default Mbc;
