import React from 'react';
import './Home.css';
import ThisIsMe from "../This-is-me/This-is-me";
import Advertisement from "../Advertisement/Advertisement";
import Block from "../Block/Block";
import InteriorDesignMasterclass from "../Interior-design-masterclass/Interior-design-masterclass";
import AboutMasterclass from "../About-masterclass/About-masterclass";

interface HomeProps {
    setCurrentRoute: (menu: string) => void;
}

class Home extends React.Component<HomeProps> {
    render() {
        return (<>
                <div className={"home-first-viewed"}>
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
