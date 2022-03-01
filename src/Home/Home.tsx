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
               {/* <div className={"home-first-viewed"}>
                    <div className={"box-container generic-padding"}>
                        <div className={"box-1 "}>
                            <div className={"image"}/>
                        </div>
                        <div className={"box-2 felx-center"}>
                            <p className={"fw100"}>
                                Ti aiuto a portare le tue <span className={"enlight"}>competenze</span> al livello
                                sucessivo, per vivere meglio attraverso il <br></br> <span
                                className={"enlight"}>design.</span>
                            </p>
                        </div>
                    </div>
                </div>*/}
                <Presentation/>
                <ThisIsMe/>
                <Block/>
                <Advertisement/>
                <InteriorDesignMasterclass/>

            </>
        )
    }
}

export default Home;
