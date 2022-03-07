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
                <div className={"laurea"}>
                    <div className={"container"}>
                        <div className={"col1"}>
                            <div className={"image"}/>
                        </div>
                        <div className={"col2"}>
                            <div className={"text-container"}>
                                <p className={"title"}>
                                    Qualche curiosità su di me..
                                </p>
                                <p style={{marginBottom: "30px"}}>
                                    Sai che <span className={"grassetto"}>non sono un architetto?</span> Ebbene sì <span
                                    className={"grassetto"}>ho scelto di non esserlo!</span>
                                </p>
                                <p>
                                    Mi sono <span
                                    className={"color-red"}>laureata in Economia e gestione delle imprese</span> in
                                    pieno Covid-19 sviluppando la tesi sulle strategie per l'acquisizione e il
                                    mantenimento del potere di mercato. <br/>
                                    Ho maturato una spiccata propensione per l'<span
                                    className={"grassetto"}>imprenditorialità</span> che tutt'ora mi aiuta e mi
                                    accompagna nel sapere ben vendere e mostrare i miei progetti d'interni al cliente.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"text-center text-container"}>
                        <p>
                            Volutamente non ho scelto un corso di laurea in architettura perché la mia passione e il mio
                            obiettivo è da sempre quello di arredare abitazioni private. Perciò, avendo già, piena
                            consapevolezza di quello che volevo fare, ho deciso di seguire degli <span
                            className={"grassetto color-red"}>studi mirati nel settore d'interni.</span>
                        </p>
                        <p style={{marginTop: "30px"}}>
                            Per il mio percorso formativo ho scelto un corso di studi professionalizzante e intensivo,
                            che potesse fornirmi tutte le competenze necessarie per iniziare fin da subito a lavorare
                            con i clienti.
                        </p>
                    </div>
                </div>
                <div className={"garden"}>
                    <div className={"text-container"}>
                        <p>
                            Sono specializzata in <br/>
                            <span className={"color-red grassetto"}>GARDEN DESIGN</span>
                        </p>
                    </div>
                    <div className={"filtro-scurente position-absolute"}/>
                </div>
                <div className={"generic-block-6"}>
                    <div className={"col1"}>
                        <div className={"text-container"}>
                            <p style={{marginBottom: "60px"}}>
                                Interpreto le tue <span className={"color-red"}>esigenze</span> e <br/>
                                i tuoi <span className={"color-red"}>desideri</span> <br/>
                                trasformandoli in<br/>
                                <span className={"color-red"}>realtà abitative.</span>
                            </p>
                            <div className={"btn"}>
                                <p>
                                    Scopri i corsi
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"col2"}>
                        <div className={"image"}/>
                    </div>
                </div>

                <div className={"lighting"}>
                    <div className={"text-container"}>
                        <p>
                            Sono specializzata in <br/>
                            <span className={"color-red grassetto"}>LIGHTING DESIGN</span>
                        </p>
                    </div>
                    <div className={"filtro-scurente position-absolute"}/>
                </div>
                <div className={"creo standard-size-row"}>
                    <div className={"col1"}>
                        <div className={"image image-contain"}/>
                    </div>
                    <div className={"col2"}>
                        <div className={"text-container text-center"}>
                            <p style={{marginBottom: "60px"}}>
                                Creo un progetto d'interni sartoriale, cucito <span
                                className={"color-red"}>su misura</span> per te.
                            </p>
                            <p>
                                La tua <span className={"color-red"}>casa</span> deve raccontare chi sei e non deve
                                essere la copia di qualcun altro.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"render image-slide"}>
                    <div className={"text-container"}>
                        <p>
                            Sono specializzata in <br/>
                            <span className={"color-red grassetto"}>AUTOCAD E TECNICHE DI RENDERING</span>
                        </p>
                    </div>
                    <div className={"filtro-scurente position-absolute"}/>
                </div>
                <div className={"masterClass"}>
                    <div className={"slide1"}>
                        <div className={"container"}>
                            <div className={"col1"}>
                                <div className={"image"}/>
                            </div>
                            <div className={"col2"}>
                                <div className={"image"}/>
                            </div>
                        </div>
                        <div className={"text-container"}>
                            <div className={"containerT text-center"}>
                                <p>
                                    Hai voglia di diventare Interior Designer e incominciare a lavorare fin da subito ?!
                                </p>
                                <p>
                                    Oggi puoi grazie a <span
                                    className={"color-red grassetto"}> INTERIOR DESIGN MASTERCLASS</span>
                                </p>
                                <p>
                                    scriviti oggie avrai accesso a tutto ciò di cui hai bisogno per creare spazi funzionali
                                    , visivamente stupefacenti e stimolanti, in qualsiasi capacità il tuo cuore desideri!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"slide2"}>
                        <div className={"col1"}>
                            <div className={"text-container text-center"}>
                                <p style={{marginBottom: "30px"}}>
                                    La masterclass, <br/>
                                    partendo dalle basi, formerà una figura professionale a 360°, concentrandosi tanto
                                    sull'aspetto
                                    teorico quanto su quello pratico per raggiungere una solida conoscenza.
                                </p>
                                <p style={{marginBottom: "60px"}}>
                                    Scopri se fa al caso tuo!
                                </p>
                                <div className={"btn btn-scopri"}>
                                    <p>
                                        Scopri i corsi
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={"col2"}>
                            <div className={"image"}/>
                        </div>
                    </div>
                </div>
                {
                    /*<div className={"diventaInterior standard-size-row"}>
                    <div className={"col1"}>
                        <div className={"image image-contain"}>
                            <p style={{marginTop: "-30%"}}>
                                Diventa Interior<br/>
                                Designer oggi!
                            </p>
                        </div>
                    </div>
                    <div className={"col2"}>
                        <div className={"text-container text-center"}>
                            <p>
                                Hai voglia di iniziare un nuovo lavoro o di cambiarlo e sei da sempre interessat* al
                                design d'interni, ma non sai da dove iniziare o hai paura di non emergere nel settore?
                            </p>
                            <p style={{marginTop: "30px"}}>
                                Nessun problema<br/>
                                <span className={"color-red grassetto"}>Interior Design Masterclass</span> <br/>
                                è esattamente quello che ti serve!
                            </p>
                            <p style={{marginTop: "30px"}}>
                                Iscriviti oggi e avrai accesso a tutto ciò di cui hai bisogno per creare spazi
                                funzionali, visivamente stupefacenti e stimolanti in qualsiasi capacità il tuo cuore
                                desideri!
                            </p>
                        </div>
                    </div>
                </div>
                    <div className={"masterClass standard-size-row"}>
                    <div className={"col1"}>
                    <div className={"text-container text-center"}>
                    <p style={{marginBottom: "30px"}}>
                    La masterclass, <br/>
                    partendo dalle basi, formerà una figura professionale a 360°, concentrandosi tanto
                    sull'aspetto
                    teorico quanto su quello pratico per raggiungere una solida conoscenza.
                    </p>
                    <p style={{marginBottom: "60px"}}>
                    Scopri se fa al caso tuo!
                    </p>
                    <div className={"btn btn-scopri"}>
                    <p>
                    Scopri i corsi
                    </p>
                    </div>
                    </div>
                    </div>
                    <div className={"col2"}>
                    <div className={"image image-contain"}/>
                    </div>
                    </div> */
                }
                <div className={"fine standard-size-row"}>
                    <div className={"col1"}>
                        <div className={"image image-contain"}/>
                    </div>
                    <div className={"col2"}>
                        <div className={"text-container text-center"}>
                            <p>
                                Entra a far parte della miglior community di Interior Design insieme a me!
                            </p>
                            <p style={{marginTop: "30px"}}>
                                La tua presenza è importante per poter scambiare opinioni e idee e ricevere consigli.
                            </p>
                            <p style={{marginTop: "30px"}}>
                                Vai sulla mia pagina Instagram e capirai di cosa sto parlando.
                            </p>
                            <div style={{marginTop: "60px"}} className={"btn btn-scopri"}>
                                <p>
                                    Visita
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;


