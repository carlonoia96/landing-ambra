import React, {FC} from 'react';
import './Presentation.css';

class Presentation extends React.Component {
    render() {
        return (
            <>
                <div className={"presentation"}>
                    <div className={"col1"}>
                        <p className={"title text-center"}>
                            <span className={"fs-35"}>Ciao, sono <span className={"color-red"}>Ambra Garuffi</span> </span> <br/>
                            interior & social designer specialist
                        </p>
                        <p className={"text-center"}>
                            Tutta la mia formazione proviene da Milano, nel cuore pulsante del design italiano per
                            eccellenza. <br/>
                            Ho potuto apprendere dai migliori docenti tutte le nozioni fondamentali per
                            poter svolgere un ottimo progetto di interior design.
                        </p>
                        <p className={"text-center"}>
                            A caratterizzarmi ci sono tanta passione, curiosità, responsabilità e sensibilità.
                        </p>
                        <p className={"text-center"}>
                            Ho fondato @... per condividere con te consigli, tendenze e idee che ti ispireranno per
                            creare un'atmosfera confortevole ed elegante nei tuoi ambienti. <br/>
                            Tutto questo attraverso un percorso che farà crescere le tue competenze step by step.
                        </p>
                    </div>
                    <div className={"col2"}>
                        <div className={"immage"}/>
                    </div>
                </div>
            </>
        )
    }
}

export default Presentation;
