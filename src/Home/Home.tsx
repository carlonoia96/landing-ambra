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
                <div className={"generic-block-2"}>
                    <div className={"col1"}>
                        <p>
                            <span className={"color-red"}>Insegno</span> a home lovers, architetti, interior designer o
                            aspiranti tali il potere di un buon
                            progetto d'interni.
                        </p>
                        <p className={"mt50"}>
                            Con una laurea in economia aiuto anche questa figura professionale ad <span
                            className={"color-red"}>emergere nel mercato</span>,
                            insegnando la giusta strategia.
                        </p>
                    </div>
                    <div className={"col2"}>
                        <div className={"image"}/>
                    </div>
                </div>
                <div className={"generic-block-3"}>
                    <p>
                        La <span className={"color-red"}>chiave</span> del tuo <span className={"color-black"}>successo</span> <br/>
                        dipende da te!
                    </p>
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
