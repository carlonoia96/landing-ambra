import React from 'react';
import './Advertisement.css';

class Advertisement extends React.Component {
    render() {
        return (
            <>
                <div className={"advertisement_"}>
                    <div className={"elem-container-sep top"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path className="elementor-shape-fill" opacity="0.33"
                                  d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
                            <path className="elementor-shape-fill" opacity="0.66"
                                  d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
                            <path className="elementor-shape-fill"
                                  d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
                        </svg>
                    </div>
                    <div className={"elem-container-sep bottom"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path className="elementor-shape-fill resources-color" opacity="0.33"
                                  d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
                            <path className="elementor-shape-fill resources-color" opacity="0.66"
                                  d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
                            <path className="elementor-shape-fill resources-color"
                                  d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
                        </svg>
                    </div>
                </div>
                {
                    /*
                    <div className={"advertisement num1"}>
                    <div className={'container-img'}>
                        <div className={'image-element-l'}/>
                        <div className={"image"}/>
                        <div className={'image-element-r'}/>
                    </div>
                    <div className={'container-text-element-l'}/>
                    <div className={'container-text'}>
                        <div className={'texts'}>
                            <div className={'title'}>
                                <p><span className={'base-color fw300'}>Diventa</span> un <span className={'fw300'}>Interior Designer</span> oggi
                                    stesso!</p>
                            </div>
                            <div className={'text-1'}>
                                <p>
                                    Se sei sempre stato interessato al design d'interni, ma non sapevi da dove iniziare,
                                    o se vuoi portare le tue abilità al livello successivo e darti un vantaggio
                                    competitivo sugli altri nel settore, o anche se vuoi solo rimodellare quella stanza
                                    della tua casa che è sempre stata un pugno nell'occhio, allora Interior Design
                                    Masterclass è esattamente quello che ti serve!
                                </p>
                                <p className={'mt50'}>
                                    Iscriviti oggi e avrai accesso a tutto ciò di cui hai bisogno per creare spazi
                                    funzionali, visivamente stupefacenti e stimolanti in qualsiasi capacità il tuo cuore
                                    desideri!
                                </p>
                            </div>
                            <div className={'btn-container'}>
                                <a href="#" className={'btn'}>
                                    Iscriviti ora!
                                </a>
                            </div>
                        </div>
                        <div className={'text-element'}/>
                    </div>
                    <div className={'container-text-element-r'}/>
                </div>
                     */
                }

            </>
        );
    }
}

export default Advertisement;
