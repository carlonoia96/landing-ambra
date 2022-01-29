import React from 'react';
import './E-commerce.css';

class Ecommerce extends React.Component {
    render() {
        return (
            <>
                <div className={'ecommerce'}>
                    <div className={'ecommerce-title'}>
                        <p>
                            Dai un'occhiata!
                        </p>
                    </div>
                    <div className={'cards-container'}>
                        <a href="https://www.unacasainarmonia.it/course/lighting-tips/" target={"_blank"}>
                            <div className={'card num1'}>
                                <div className={'thumbnail'}>
                                    <div className={'image'}/>
                                </div>
                                <div className={'info'}>
                                    <p className={'title'}>
                                        Lighting Tips
                                    </p>
                                    <p className={'free'}>
                                        Free
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.unacasainarmonia.it/course/lighting-design-2-2/" target={"_blank"}>
                            <div className={'card num2'}>
                                <div className={'thumbnail'}>
                                    <div className={'image'}/>
                                </div>
                                <div className={'info'}>
                                    <p className={'title'}>
                                        Trova il colore che ti rispecchia
                                    </p>
                                    <p className={'free'}>
                                        Free
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.unacasainarmonia.it/course/9842/" target={"_blank"}>
                            <div className={'card num3'}>
                                <div className={'thumbnail'}>
                                    <div className={'image'}/>
                                </div>
                                <div className={'info'}>
                                    <p className={'title'}>
                                        Guida pratica alle piante
                                    </p>
                                    <p className={'free'}>
                                        Free
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </>
        );
    }
}

export default Ecommerce;
