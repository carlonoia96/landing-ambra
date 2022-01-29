import React from 'react';
import './Advertisement.css';

class Advertisement extends React.Component {
    render() {
        return (
            <>
                <div className={"advertisement felx-center"}>
                    <div className={'text-container'}>
                        <p className={'title'}>
                            Diventa Interior Designer oggi stesso!
                        </p>
                        <p className={'text'}>
                            Se sei sempre stato interessato al design d'interni, ma non sapevi da dove iniziare, o se
                            vuoi portare le tue abilità al livello successivo e darti un vantaggio competitivo sugli
                            altri nel settore, o anche se vuoi solo rimodellare quella stanza della tua casa che è
                            sempre stata un pugno nell'occhio, allora Interior Design Masterclass è esattamente quello
                            che ti serve! <br/>
                            Iscriviti oggi e avrai accesso a tutto ciò di cui hai bisogno per creare spazi funzionali,
                            visivamente stupefacenti e stimolanti in qualsiasi capacità il tuo cuore desideri!
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default Advertisement;
