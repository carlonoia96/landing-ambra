import React from 'react';
import './This-is-me.css';

class ThisIsMe extends React.Component {
    render() {
        return (
            <>
                <div className={'this-is-me generic-padding'}>

                    <div className={'row1 felx-center'}>
                        <div className={'col1'}>
                            <div className={'image'}/>
                        </div>
                        <div className={'col2'}>
                            <div className={'text-container'}>
                                <p className={'title'}>
                                    Ciao sono Ambra, la tua social designer
                                </p>
                                <p className={'mt20 lineH35'}>
                                    la mia passione per l'Interior Design nasce fin da piccina e con lei la voglia di
                                    educare le
                                    persone al bello. <br></br>
                                    Dopo svariate ore dedicate allo studio e corsi online, mi sono iscritta ad Accademia
                                    del
                                    Lusso di Milano per potere affinare le mie conoscenze in questo campo.
                                </p>
                                <p className={'mt20 lineH35'}>
                                    Oggi insegno a home lovers, architetti, interior designer o aspiranti tali il potere
                                    di
                                    un <span className={'enlight'}>buon progetto di interni.</span> <br></br>
                                    Ad alimentare la mia <span className={'enlight'}>passione</span> ci
                                    sono <span className={'fw500 base-color'}>costanza</span> e <span
                                    className={'fw500 base-color'}>curiosità.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={'row2 felx-center'}>
                        <p>
                            Oggi insegno a coach, content creator e imprenditori digitali o aspiranti tali a ottenere
                            gli stessi risultati attraverso il potere dei social media.
                        </p>
                    </div>
                    {
                        /*
                        <div className={'title-container'}>
                            <div className={'title-element'}/>
                        </div>
                        <div className={'text-container'}>
                        <p className={'text-1'}>
                        <span className={'fw500'}>Ciao sono Ambra, la tua social designer</span> <br></br>
                        la mia passione per l'Interior Design nasce fin da piccina e con lei la voglia di educare le
                        persone al bello. <br></br>
                        Dopo svariate ore dedicate allo studio e corsi online, mi sono iscritta ad Accademia del
                        Lusso di Milano per potere affinare le mie conoscenze in questo campo.
                        </p>
                        <p className={'text-2'}>
                        Oggi insegno a home lovers, architetti, interior designer o aspiranti tali il potere di
                        un <span className={'enlight'}>buon progetto di interni</span>. <br></br>
                        Ad alimentare la mia <span className={'enlight'}>passione</span> ci
                        sono <span className={'fw500 base-color'}>costanza</span> e <span
                        className={'fw500 base-color'}>curiosità</span>.
                        </p>
                        <div className={'btn-container'}>
                        <a href="#" className={'btn'}>
                        Leggi di più
                        </a>
                        </div>
                        </div>
                        */
                    }
                </div>
            </>
        );
    }
}

export default ThisIsMe;
