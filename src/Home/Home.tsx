import React from 'react';
import './Home.css';
import ThisIsMe from "../This-is-me/This-is-me";
import Advertisement from "../Advertisement/Advertisement";
import Resources from "../Resources/Resources";
import Ecommerce from "../E-commerce/E-commerce";

interface HomeProps {
    setCurrentRoute: (menu: string) => void;
}

class Home extends React.Component<HomeProps> {
    render() {
        return (<>
                <div className={"home-first-viewed"}>
                    <div className={"box-container generic-padding"}>
                        <div className={"box-1 felx-center"}>
                            <p className={"fw100"}>
                                Ti aiuto a portare le tue <span className={"enlight"}>competenze</span> al livello
                                sucessivo, per vivere meglio attraverso il <br></br> <span
                                className={"enlight"}>design!</span>
                            </p>
                        </div>
                        <div className={"box-2"}>
                            <div className={"image"}/>
                        </div>
                    </div>
                </div>
                <ThisIsMe/>
                <Advertisement/>
                <Resources/>
                <Ecommerce/>
            </>
        )
    }
}

export default Home;
