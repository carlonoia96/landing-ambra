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
                <div className={"generic-block-4"}>
                    <div className={"text-container"}>
                        <p>
                            Sono specializzata <br/>
                            nello studio di<br/>
                            <span className={"color-red grassetto"}>MATERIALI & TRENDS</span>
                        </p>
                    </div>
                </div>
                <div className={"generic-block-5"}>
                    <div className={"col1"}>
                        <div className={"text-container"}>
                            <p style={{marginBottom: "60px"}}>
                                <span className={"color-red"}>Aiuto</span> le persone a vivere in <br/> <span
                                className={"color-red"}>armonia</span> nella propria <span
                                className={"color-red"}>casa</span>.
                            </p>
                            <p>
                                La mia <span className={"color-red"}>mission</span> è coniugare <br/> funzionalità e
                                confort abitativo<br/> con il gusto estetico.
                            </p>
                        </div>
                    </div>
                    <div className={"col2"}>
                        <div className={"image"}/>
                    </div>

                </div>
                <div className={"risorse"}>
                    <p style={{fontSize: "38px"}}>LE MIE <span className={"grassetto"}>RISORSE</span> PER TE</p>
                    <div className={"text-container"}>
                        <p>
                            TIPS DI DESIGN
                        </p>
                        <div className={"btn"}>
                            <p>
                                Scopri i corsi
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"blog"}>
                    <div className={"text-container"}>
                        <div className={"col1"}>
                            <div className={"image"}/>
                        </div>
                        <div className={"col2"}>
                            <div className={"text-container"}>
                                <p style={{marginBottom: "60px"}}>
                                    All'interno del mio <span className={"color-red"}>blog</span> potrai trovare davvero
                                    l'idea giusta che fa per te e la tua casa, potrai scoprire molte più cose sul design
                                    d'interni.
                                </p>
                                <p>
                                    Non serve che perdi tante ore del tuo tempo prezioso a fare ricerche sull'idea di
                                    arredamento giusta perché l'ho già fatto io per te. <br/>
                                    Infatti, durante tutte le mie ore dedicate allo studio di vari progetti ho tratto io
                                    stessa ispirazione da alcune foto, che oggi voglio condividere qua con te.
                                </p>
                                <p style={{marginTop: "60px"}}>
                                    Partire già con l'idea giusta ti consentirà di ridurre tempi di ricerca e costi di
                                    progettazione.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"btn"}>
                        <div className={"image"}>
                            <p style={{marginTop: "-1.3em"}}>Visita il blog</p>
                        </div>
                    </div>
                </div>
                <div className={"consulenze"}>
                    <p style={{fontSize: "38px"}}>LE MIE <span className={"grassetto"}>CONSULENZE</span> PER TE</p>

                    <div className={"box-container"}>
                        <div className={"text-container"}>
                            <p>
                                CONSULENZA D'ARREDO
                            </p>
                            <div className={"btn"}>
                                <p>
                                    Scopri
                                </p>
                            </div>
                        </div>

                        <div className={"text-container"}>
                            <p>
                                STYLING CALL
                            </p>
                            <div className={"btn"}>
                                <p>
                                    Scopri
                                </p>
                            </div>
                        </div>
                    </div>

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
                {/*<div className={"generic-block-3"}>
                    <p>
                        La <span className={"color-red"}>chiave</span> del tuo <span
                        className={"color-black"}>successo</span> <br/>
                        dipende da te!
                    </p>
                </div>
                <ThisIsMe/>
                <Block/>
                <Advertisement/>
                <InteriorDesignMasterclass/>*/}
            </>
        )
    }
}

export default Home;


