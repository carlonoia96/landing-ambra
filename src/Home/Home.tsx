import React from 'react';
import './Home.css';
import ThisIsMe from "../This-is-me/This-is-me";
import Advertisement from "../Advertisement/Advertisement";
import Block from "../Block/Block";
import InteriorDesignMasterclass from "../Interior-design-masterclass/Interior-design-masterclass";
import AboutMasterclass from "../About-masterclass/About-masterclass";
import Presentation from "../Presentation/Presentation";

//immagini
import ambraHomeMobile from '../assets/images/ambra-home-mobile.webp'

interface HomeProps {
    setCurrentRoute: (menu: string) => void;
}

class Home extends React.Component<HomeProps> {
    render() {
        return (<>
                <div className={"first-block"}>
                    <div className={"container"}>
                        <div className={"img"}/>
                        <img src={ambraHomeMobile} alt="Logo"/>
                    </div>
                </div>
                <div className={"block-2"}>
                    <p className={"title"}>
                        Ciao,
                        <br/> sono <span className={"red"}>Ambra Garuffi</span>
                    </p>
                    <div className={"img"}/>

                    <p className={"text-align-center"}>
                        Le mie conoscenze provengono da <span className={"red"}>Milano</span>, nel cuore pulsante del design italiano per
                        eccellenza.
                        <br/><br/>
                        Attualmente sono ancora in formazione e potrò affinare il mio sapere grazie ai migliori
                        docenti
                        per ottenere
                        tutte le nozioni fondamentali per poter svolgere un ottimo progetto di Interior Design.
                        <br/><br/>
                        A caratterizzarmi ci sono tanta <span className={"bold"}>passione, curiosità, responsabilità e sensibilità</span> per
                        ciò che
                        faccio.
                    </p>
                    <div className={"btn text-align-center "}>
                        <p className={"white bk-red"}>Scopri di più su di me</p>
                    </div>
                </div>
                <div className={"block-3"}>
                    <div className={"img"}/>
                    <div>
                        <p>
                            Oggi insegno a home lovers, architetti, interior designer o aspiranti tali il potere di un
                            buon progetto d'interni.
                        </p>
                        <p>
                            Con una laurea in economia aiuto anche questa figura professionale ad emergere nel mercato,
                            insegnando la giusta strategia.
                        </p>
                    </div>
                </div>
                <div className={"block-4"}>
                    <div className={"img"}/>
                </div>
                <div className={"block-5"}>
                    <div>
                        <div className={"postCard bk-white"}>
                            <div className={"container bk-red"}>
                                <div className={"img"}/>
                            </div>
                            <p className={"text-align-center"}>
                                <span className={"bold"}>Mission di Interni di design</span>
                                <br/>Condividere consigli, tendenze e idee che ti ispireranno per creare un'atmosfera
                                confortevole ed elegante nei tuoi ambienti.
                            </p>
                        </div>

                        <div className={"postCard bk-white"}>
                            <div className={"container bk-red"}>
                                <div className={"img"}/>
                            </div>
                            <p className={"text-align-center"}>
                                <span className={"bold"}>Creiamo insieme Interni di design</span>
                                <br/>Studiamo i principi del design d'interni, analizzando materiali & trends, un
                                coretto lighting design & garden design, e molto altro ancora, creando delle moodboard e
                                facendo sempre riferimento a ciò che più asseconda il nostro gusto personale.
                            </p>
                        </div>

                        <div className={"postCard bk-white"}>
                            <div className={"container bk-red"}>
                                <div className={"img"}/>
                            </div>
                            <p className={"text-align-center"}>
                                <span className={"bold"}>Store di Interni di design</span>
                                <br/>Tutto questo attraverso un <span className={"bold"}>percorso</span> che farà <span
                                className={"red"}>crescere</span> le tue <span className={"red"}>competenze</span> <span
                                className={"bold"}>step by step</span>.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"block-6"}>
                    <div>
                        <p>
                            <span className={"red"}>Aiuto</span> le persone a vivere in <span
                            className={"red"}>armonia</span> nella propria <span className={"red"}>casa</span>.
                        </p>
                        <p>
                            La mia <span className={"red"}>mission</span> è coniugare funzionalità e confort abitativo
                            con il gusto estetico.
                        </p>
                    </div>
                    <div className={"img"}/>
                </div>
                <div className={"block-7"}>
                    <div className={"img"}/>
                    <div>
                        <div className={"img"}/>
                        <p>
                            Ti fornisco la chiave giusta per creare interni emozionali
                        </p>
                    </div>
                </div>
                <div className={"block-8"}>
                    <div>
                        <div className={"postCard bk-white"}>
                            <div className={"container bk-red"}>
                                <div className={"img"}/>
                            </div>
                            <p className={"text-align-center"}>
                                <span className={"bold"}>Instagram</span>
                                <br/>Puoi trovarmi su Instagram, dove condivido attraverso post, reel e stories tanti
                                contenuti ogni giorno sotto forma di pills.
                            </p>
                        </div>
                        <div className={"postCard bk-white"}>
                            <div className={"container bk-red"}>
                                <div className={"img"}/>
                            </div>
                            <p className={"text-align-center"}>
                                <span className={"bold"}>Youtube</span>
                                <br/>Condividere consigli, tendenze e idee che ti ispireranno per creare un'atmosfera
                                confortevole ed elegante nei tuoi ambienti.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"block-9"}>
                    <div className={"img"}/>
                    <div>
                        <p>
                            Hai bisogno?
                        </p>
                        <div className={"btn"}>Contattami</div>
                    </div>

                </div>
                <div className={"block-10"}>
                    <div className={"img"}/>
                    <div>
                        <div>
                            <p>
                                Consulenza d'arredo
                            </p>
                            <div className={"btn"}> Scopri</div>
                        </div>
                        <div>
                            <p>
                                Styiling Call
                            </p>
                            <div className={"btn"}> Scopri</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;


