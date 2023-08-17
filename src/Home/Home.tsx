import React, {Fragment} from 'react';
import './Home.css';

//immagini
import ambraHomeMobile from '../assets/images/ambra-home-mobile2.webp'
import ambraHome from '../assets/images/ambra-home2.webp'
// import pareteVerde from '../assets/images/risorse.webp'
import pareteVerde from '../assets/images/risorse.webp'
import waves from '../assets/images/waves.svg'
import contattamiMobile from '../assets/images/INTERNI-7.png'
import Postcard from "../Postcard/Postcard";
import Waves from "../Waves/Waves";
import Button from "../Button/Button";

interface HomeProps {
    setCurrentRoute: (menu: string) => void;
}

class Home extends React.Component<HomeProps> {
    render() {
        return (<>
                {/*<div className={"first-block"}>
                    <div className={"container"}>
                        <div className={"img"}/>
                        <img className={"hide-on-desktop"} src={ambraHomeMobile} alt="Logo"/>
                        <img className={"hide-on-mobile"} src={ambraHome} alt="Logo"/>
                    </div>
                </div>*/}
                <div className={"block-6"}>
                    <div className={"container text-align-center"}>
                        <p>
                            <span>Ciao, sono <span className={"red"}>Ambra Garuffi</span></span>
                            <br/><br/>
                            Fondatrice di <br/><span>Interni di Design</span>
                        </p>
                    </div>
                    <div className={"img hide-on-desktop"}/>
                </div>

                <div className={"block-2"}>
                    <div className={"img hide-on-mobile"}>
                        {/*<Button text={"Scopri di più!"} link={"/aboutme"}/>*/}
                    </div>
                    <div className={"container"}>
                        <p>
                            Ho studiato a <span className={"bold red"}>Milano</span>, nel cuore pulsante del design
                            italiano per eccellenza,
                            specializzandomi in <span className={"bold red"}>Interior</span>, <span
                            className={"bold red"}>Retail</span>, <span className={"bold red"}>Exhibit</span> e <span
                            className={"bold red"}>Garden Design</span>.
                            <br/><br/>
                            Poter studiare design d'interni a Milano è sempre stato il mio sogno nel cassetto, fin da
                            quando ero bambina. Crescendo, ho scoperto di essere determinata nel voler <span
                            className={"bold red"}>condividere</span> le
                            mie <span className={"bold red"}>conoscenze e competenze</span> con gli altri.
                            <br/><br/>
                            Sentivo che per raggiungere questo obiettivo avevo la necessità di formarmi per acquisire le
                            competenze necessarie ad aprire una propria <span
                            className={"bold red"}>attività online</span>. Ecco che, prima di seguire
                            questo sogno, che oggi è diventato realtà, mi sono laureata in Economia e gestione delle
                            imprese sviluppando la tesi sulle strategie per l'acquisizione e il mantenimento del potere
                            di mercato ed un conseguente avvicinamento allo studio del Digital Marketing. Conseguita la
                            Laurea, finalmente ho capito che l'idea di diventare <span className={"bold red"}>imprenditrice della mia passione</span> era
                            più raggiungibile del previsto.
                            <br/><br/>
                            Ho continuato ad investire nella mia formazione acquistando corsi di <span
                            className={"bold red"}>Digital Marketing</span> per
                            sfruttare al meglio il potere dei social media e farmi trovare da quanti più clienti
                            possibili.
                            <br/><br/>
                            <span className={"bold red"}>Amo tutto ciò che è creativo</span> e il design in tutte le sue
                            forme. Sono fortemente convinta che
                            il fine di ogni progettazione sia quello di rendere ogni luogo usufruibile dall'uomo la
                            massima espressione di chi vive quel luogo, creando un design accogliente dove <span
                            className={"bold red"}>funzionalità
                            ed estetica</span> si fondono insieme.
                            <br/>
                            Mi piace progettare interni di design che seguono l'impronta dell'<span
                            className={"bold red"}>abitare contemporaneo</span>.
                        </p>
                    </div>
                </div>

                <div className={"block-4"}>
                    <div className={"img hide-on-mobile"}/>
                </div>
                <div className={"block-5 bk-gray"}>
                    <Waves mobile={true}/>
                    <div className={"container"}>

                        <Postcard
                            classID={"postCard-1"}
                            hoverEffect={true}
                            hr={true}
                            text={
                                <Fragment>
                                    L'interior design è una passione che ho da sempre e che mi sprona a formarmi sempre
                                    di più in questo modo in continua evoluzione.
                                </Fragment>}
                        />

                        <Postcard
                            classID={"postCard-2"}
                            hoverEffect={true}
                            hr={true}
                            text={
                                <Fragment>
                                    Oltre alla passione, mi caratterizzano tanta <span
                                    className={"red"}>curiosità, responsabilità e sensibilità</span> per
                                    ciò che
                                    realizzo.
                                </Fragment>}
                        />

                        <Postcard
                            classID={"postCard-3"}
                            link={"/negozio"}
                            hoverEffect={true}
                            hr={true}
                            text={
                                <Fragment>
                                    Conoscenza della materia, creatività e capacità di ascolto sono ricchezze
                                    imprescindibili che mi guidano nella realizzazione dei progetti d'interni
                                </Fragment>}
                        />

                        <Postcard
                            classID={"postCard-4"}
                            link={"/negozio"}
                            hoverEffect={true}
                            hr={true}
                            text={
                                <Fragment>
                                    Mi piace condividere consigli, tendenze e idee che possono ispirare chiunque per
                                    creare un'atmosfera confortevole ed elegante nei propri ambienti.
                                </Fragment>}
                        />

                    </div>
                    <Waves mobile={true} desktop={false}/>
                </div>

                {/*<div className={"block-7"}>
                    <img className={"hide-on-desktop"} src={pareteVerde} alt="pareteVerde"/>
                    <div className={"container text-align-center"}>
                        <div className={"img"}/>
                        <p className={"white"}>
                            Ti fornisco la <span className={"bold red"}>chiave</span> giusta per creare interni
                            emozionali
                        </p>
                    </div>
                </div>*/}

                {/*<div className={"block-8 bk-gray"}>
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

                </div>*/}
                <div className={"block-3"}>
                    <div className={"img"}/>
                    {/*<Button text={"Scopri di più su di me!"} link={"/aboutme"} hideOnDesktop={true}/>*/}
                    <Waves mobile={true}/>
                    <div className={"container img text-align-center"}>
                        <p>
                            <span className={"bold red"}>Insegno ad aspiranti interior designer o appassionati i segreti della professione</span>
                            <br/><br/><br/>
                            Ho fondato Internididesign come strumento di condivisione di tutte le mie conoscenze,
                            esperienze e tecniche di presentazioni dei propri progetti ai propri clienti.

                        </p>
                    </div>
                </div>
                <div className={"block-9"}>
                    <img className={"hide-on-desktop"} src={contattamiMobile} alt="contattamiMobile"/>
                    <div className={"container"}>
                        <p className={"white"}>
                            Hai bisogno?
                        </p>
                        <Button text={"Contattami"} link={"https://www.internididesign.com/contattami/"}/>
                    </div>

                </div>

                {/*<div className={"block-10 white text-align-center"}>
                    <p>I MIEI <span className={"bold"}>SERVIZI</span> FUTURI</p>
                    <div className={"container"}>
                        <div>
                            <p>
                                Consulenza d'arredo
                            </p>
                            <Button text={"Scopri"} link={"https://www.internididesign.com/consulenza/"}/>
                        </div>
                        <div>
                            <p>
                                Coaching <br/> One to One
                            </p>
                            <Button text={"Scopri"} link={"https://www.internididesign.com/stylingcall/"}/>
                        </div>
                    </div>
                </div>*/}
                <div className={"block-11 bk-gray"}>
                    <div className={"container"}>

                        <Postcard
                            classID={"postCard-1"}
                            link={"https://www.internididesign.com/negozio/"}
                            hoverEffect={true}
                            text={
                                <Fragment>
                                    <p className={"text-align-center"}>
                                        Ho molto a cuore che anche tu <br/> riesca a conoscere più da vicino <br/> il fantastico mondo dell'interior design. <br/> <span className={"bold red"}>Tanti conenuti ti aspettano!</span>
                                    </p>
                                    <Button text={"Scarica ora"}/>
                                </Fragment>}
                        />

                    </div>
                </div>
            </>
        )
    }
}

export default Home;


