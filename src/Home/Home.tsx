import React, {Fragment} from 'react';
import './Home.css';

//immagini
import ambraHomeMobile from '../assets/images/ambra-home-mobile.webp'
import ambraHome from '../assets/images/ambra-home.webp'
// import pareteVerde from '../assets/images/risorse.webp'
import pareteVerde from '../assets/images/risorse.webp'
import waves from '../assets/images/waves.svg'
import contattamiMobile from '../assets/images/contattami-mobile.webp'
import Postcard from "../Postcard/Postcard";

interface HomeProps {
    setCurrentRoute: (menu: string) => void;
}

class Home extends React.Component<HomeProps> {
    render() {
        return (<>
                <div className={"first-block"}>
                    <div className={"container"}>
                        <div className={"img"}/>
                        <img className={"hide-on-desktop"} src={ambraHomeMobile} alt="Logo"/>
                        <img className={"hide-on-mobile"} src={ambraHome} alt="Logo"/>
                    </div>
                </div>
                <div className={"block-2"}>
                    <div className={"container"}>
                        <p className={"title"}>
                            Ciao,
                            <br/> sono <span className={"red"}>Ambra Garuffi</span>
                        </p>
                        <div className={"img"}/>
                        <p className={"text-align-center"}>
                            Le mie conoscenze provengono da <span className={"red"}>Milano</span>, nel cuore pulsante
                            del design
                            italiano per
                            eccellenza.
                            <br/><br/>
                            Attualmente sono ancora in formazione e potrò affinare il mio sapere grazie ai migliori
                            docenti
                            per ottenere
                            tutte le nozioni fondamentali per poter svolgere un ottimo progetto di Interior Design.
                            <br/><br/>
                            A caratterizzarmi ci sono tanta <span
                            className={"bold"}>passione, curiosità, responsabilità e sensibilità</span> per
                            ciò che
                            faccio.
                        </p>
                        <a href={"/aboutme"} target={"_blank"}>
                            <div className={"btn text-align-center hide-on-desktop"}>
                                <p className={"white bk-red"}>Scopri di più!</p>
                            </div>
                        </a>
                    </div>
                    <div className={"img hide-on-mobile"}>
                        <div className={"btn text-align-center "}>
                            <a href={"/aboutme"} target={"_blank"}>
                                <p className={"white bk-red"}>Scopri di più!</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={"block-3"}>
                    <div className={"img"}/>
                    <div className={"svg hide-on-mobile"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path className="elementor-shape-fill" opacity="0.33"
                                  d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
                            <path className="elementor-shape-fill" opacity="0.66"
                                  d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
                            <path className="elementor-shape-fill"
                                  d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
                        </svg>
                    </div>
                    <div className={"container img text-align-center"}>
                        <p>
                            Oggi <span className={"red"}>insegno</span> a home lovers, architetti, interior designer o
                            aspiranti tali il potere di un
                            buon progetto d'interni.
                            <br/><br/><br/>
                            Con una laurea in economia aiuto anche questa figura professionale ad <span
                            className={"red"}>emergere nel mercato</span>,
                            insegnando la giusta strategia.
                        </p>
                    </div>
                </div>
                <div className={"block-4"}>
                    <div className={"img"}/>
                </div>
                <div className={"block-5 bk-gray"}>
                    <div className={"container"}>

                        <Postcard
                            classID={"postCard-1"}
                            hoverEffect={true}
                            title={"Mission di Interni di design"}
                            text={
                                <Fragment>
                                    Condividere consigli, tendenze e idee che ti ispireranno per creare un'atmosfera
                                    confortevole ed elegante nei tuoi ambienti.
                                </Fragment>}
                        />

                        <Postcard
                            classID={"postCard-2"}
                            hoverEffect={true}
                            title={"Creiamo insieme Interni di design"}
                            text={
                                <Fragment>
                                    Studiamo i principi del design d'interni, analizzando materiali & trends, un
                                    coretto lighting design & garden design, e molto altro ancora, creando delle
                                    moodboard e
                                    facendo sempre riferimento a ciò che più asseconda il nostro gusto personale.
                                </Fragment>}
                        />

                        <Postcard
                            classID={"postCard-3"}
                            link={"/shop/negozio"}
                            hoverEffect={true}
                            title={"Store di Interni di design"}
                            text={
                                <Fragment>
                                    Tutto questo attraverso un <span
                                    className={"bold"}>percorso</span> che farà <span
                                    className={"red"}>crescere</span> le tue <span
                                    className={"red"}>competenze </span><span
                                    className={"bold"}>step by step</span>.
                                </Fragment>}
                        />

                    </div>
                </div>
                <div className={"block-6"}>
                    <div className={"container text-align-center"}>
                        <p>
                            <span className={"red"}>Aiuto</span> le persone a vivere in <span
                            className={"red"}>armonia</span> nella propria <span className={"red"}>casa</span>.
                            <br/><br/>
                            La mia <span className={"red"}>mission</span> è coniugare funzionalità e confort abitativo
                            con il gusto estetico.
                        </p>
                    </div>
                    <div className={"img hide-on-desktop"}/>
                </div>
                <div className={"block-7"}>
                    <img className={"hide-on-desktop"} src={pareteVerde} alt="pareteVerde"/>
                    <div className={"container text-align-center"}>
                        <div className={"img"}/>
                        <p className={"white"}>
                            Ti fornisco la <span className={"bold red"}>chiave</span> giusta per creare interni
                            emozionali
                        </p>
                    </div>
                </div>
                <div className={"block-8 bk-gray"}>
                    <div className={"container"}>

                        <Postcard
                            classID={"postCard-1"}
                            link={"https://www.instagram.com/internididesign/"}
                            hoverEffect={true}
                            title={"Instagram"}
                            text={
                                <Fragment>
                                    Puoi trovarmi su Instagram, dove condivido attraverso post, reel e stories
                                    tanti
                                    contenuti ogni giorno sotto forma di pills.
                                </Fragment>}
                        />

                        <Postcard
                            classID={"postCard-2"}
                            link={"https://www.youtube.com/channel/UCzqDKcbku749QbNNCrtzPdQ"}
                            hoverEffect={true}
                            title={"Youtube"}
                            text={
                                <Fragment>
                                    Ogni settimana un nuovo video incentrato sulle varie tematiche
                                    dell'interior
                                    design.
                                </Fragment>}
                        />

                    </div>
                </div>
                <div className={"block-9"}>
                    <img className={"hide-on-desktop"} src={contattamiMobile} alt="contattamiMobile"/>
                    <div className={"container"}>
                        <p className={"white"}>
                            Hai bisogno?
                        </p>
                        <a href={"https://www.internididesign.com/shop/contattami/"} target={"_blank"}>
                            <div className={"btn text-align-center"}>
                                <p className={"white bk-red"}>Contattami</p>
                            </div>
                        </a>
                    </div>

                </div>
                <div className={"block-10 white text-align-center"}>
                    <p>I MIEI <span className={"bold"}>SERVIZI</span> FUTURI</p>
                    <div className={"container"}>
                        <div>
                            <p>
                                Consulenza d'arredo
                            </p>
                            <a href={"https://www.internididesign.com/consulenza/"} target={"_blank"}>
                                <div className={"btn"}>
                                    <p className={"white bk-red"}>Scopri</p>
                                </div>
                            </a>
                        </div>
                        <div>
                            <p>
                                Styiling Call
                            </p>
                            <a href={"https://www.internididesign.com/stylingcall/"} target={"_blank"}>
                                <div className={"btn"}>
                                    <p className={"white bk-red"}>Scopri</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={"block-11 bk-gray"}>
                    <div className={"container"}>

                        <Postcard
                            classID={"postCard-1"}
                            link={"https://www.internididesign.com/shop/negozio/"}
                            hoverEffect={true}
                            text={
                                <Fragment>
                                    <p className={"text-align-center"}>
                                        Le tue <span className={"bold"}>guide gratuite</span> per arredare al meglio
                                        casa, ti
                                        aspettano!
                                        Non perdere questa occasione!
                                    </p>
                                    <div className={"btn text-align-center"}>
                                        <p className={"white bk-red"}>Scarica ora</p>
                                    </div>
                                </Fragment>}
                        />

                    </div>
                </div>
            </>
        )
    }
}

export default Home;


