import React from 'react';
import './Home.css';

//immagini
import ambraHomeMobile from '../assets/images/ambra-home-mobile.webp'
import ambraHome from '../assets/images/ambra-home.webp'
import pareteVerde from '../assets/images/risorse.webp'
import contattamiMobile from '../assets/images/contattami-mobile.webp'

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
              Le mie conoscenze provengono da <span className={"red"}>Milano</span>, nel cuore pulsante del design
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
            <div className={"btn text-align-center hide-on-desktop"}>
              <p className={"white bk-red"}>Scopri di più!</p>
            </div>
          </div>
          <div className={"img hide-on-mobile"}>
            <div className={"btn text-align-center "}>
              <p className={"white bk-red"}>Scopri di più!</p>
            </div>
          </div>
        </div>
        <div className={"block-3"}>
          <div className={"img"}/>
          <div className={"container img text-align-center"}>
            <p>
              Oggi <span className={"red"}>insegno</span> a home lovers, architetti, interior designer o aspiranti tali il potere di un
              buon progetto d'interni.
              <br/><br/><br/>
              Con una laurea in economia aiuto anche questa figura professionale ad <span className={"red"}>emergere nel mercato</span>,
              insegnando la giusta strategia.
            </p>
          </div>
        </div>
        <div className={"block-4"}>
          <div className={"img"}/>
        </div>
        <div className={"block-5 bk-gray"}>
          <div className={"container"}>
            <div className={"postCard bk-white postCard-1"}>
              <div className={"container bk-red"}>
                <div className={"img"}/>
              </div>
              <p className={"text-align-center"}>
                <span className={"bold"}>Mission di Interni di design</span>
                <br/>Condividere consigli, tendenze e idee che ti ispireranno per creare un'atmosfera
                confortevole ed elegante nei tuoi ambienti.
              </p>
            </div>

            <div className={"postCard bk-white postCard-2"}>
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

            <div className={"postCard bk-white postCard-3"}>
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
          <div className={"container text-align-center"}>
            <p>
              <span className={"red"}>Aiuto</span> le persone a vivere in <span
              className={"red"}>armonia</span> nella propria <span className={"red"}>casa</span>.
              <br/><br/>
              La mia <span className={"red"}>mission</span> è coniugare funzionalità e confort abitativo
              con il gusto estetico.
            </p>
          </div>
          <div className={"img"}/>
        </div>
        <div className={"block-7"}>
          <img src={pareteVerde} alt="pareteVerde"/>
          <div className={"container text-align-center"}>
            <div className={"img"}/>
            <p className={"white"}>
              Ti fornisco la chiave giusta per creare interni emozionali
            </p>
          </div>
        </div>
        <div className={"block-8 bk-gray"}>
          <div className={"container"}>
            <div className={"postCard bk-white postCard-1"}>
              <div className={"container bk-red"}>
                <div className={"img"}/>
              </div>
              <p className={"text-align-center"}>
                <span className={"bold"}>Instagram</span>
                <br/>Puoi trovarmi su Instagram, dove condivido attraverso post, reel e stories tanti
                contenuti ogni giorno sotto forma di pills.
              </p>
            </div>
            <div className={"postCard bk-white postCard-2"}>
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
          <img src={contattamiMobile} alt="contattamiMobile"/>
          <div className={"container"}>
            <p className={"white"}>
              Hai bisogno?
            </p>
            <div className={"btn text-align-center"}>
              <p className={"white bk-red"}>Contattami</p>
            </div>
          </div>

        </div>
        <div className={"block-10 white text-align-center"}>
          <p>I MIEI <span className={"bold"}>SERVIZI</span> FUTURI</p>
          <div className={"container"}>
            <div>
              <p>
                Consulenza d'arredo
              </p>
              <div className={"btn"}>
                <p className={"white bk-red"}>Scopri</p>
              </div>
            </div>
            <div>
              <p>
                Styiling Call
              </p>
              <div className={"btn"}>
                <p className={"white bk-red"}>Scopri</p>
              </div>
            </div>
          </div>
        </div>
        <div className={"block-11 bk-gray"}>
          <div className={"container"}>
            <div className={"postCard bk-white postCard-1"}>
              <div className={"container bk-red"}>
                <div className={"img"}/>
              </div>
              <p className={"text-align-center"}>
                Le tue <span className={"bold"}>guide gratuite</span> per arredare al meglio casa, ti aspettano!
                Non perdere questa occasione!
              </p>
              <div className={"btn text-align-center"}>
                <p className={"white bk-red"}>Scarica ora</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home;


