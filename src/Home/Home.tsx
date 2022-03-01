import React from 'react';
import './Home.css';
import ThisIsMe from "../This-is-me/This-is-me";
import Advertisement from "../Advertisement/Advertisement";
import Block from "../Block/Block";
import InteriorDesignMasterclass from "../Interior-design-masterclass/Interior-design-masterclass";
import AboutMasterclass from "../About-masterclass/About-masterclass";
import Presentation from "../Presentation/Presentation";

interface HomeProps {
    setCurrentRoute: (menu: string) => void;
}

class Home extends React.Component<HomeProps> {
    render() {
        return (<>

                <div className={"home-first-viewed"}>
                    <div className={"inner-box"}>
                        <p>
                            Interior <br/>
                            Design
                        </p>
                        <p>Step by step</p>
                    </div>
                    <div className={"filtro-scurente position-absolute"}/>
                </div>
                <Presentation/>
                <div className={"generic-block-1"}>
                    <div className={"text-container"}>
                        <p>
                            Porto le tue competenze <br/>
                            al livello sucessivo,<br/>
                            per vivere meglio<br/>
                            attraverso il<br/>
                            <span className={"color-red"}>design</span>.
                        </p>
                    </div>
                    <div className={"filtro-scurente position-absolute"}/>
                </div>
                <ThisIsMe/>
                <Block/>
                <Advertisement/>
                <InteriorDesignMasterclass/>

            </>
        )
    }
}

export default Home;
