import React from 'react';
import './Resources.css';

class Resources extends React.Component {
    render() {
        return (
            <>
                <div className={'resources'}>
                    <div className={'resources-container'}>
                        <p className={'title fw100'}>Le mie <span className={'fw300 second-color'}>risorse gratuite</span> per
                            te</p>
                        <div className={'title-element-l'}/>
                        <div className={'title-element'}/>
                        <div className={'title-element-r'}/>
                    </div>
                    <div className={'text-container'}>
                        <div className={'text-1'}>
                            <p className={'title second-color'}>Che aspetti?!</p>
                            <p>
                                Fantastiche guide sono pronte per te, per lasciarti ispirare e accompagnarti durante questo
                                fantastico percorso di educazione al bello. <br></br>
                                Non restare fermo alle tue conoscenze, aumenta le tue skills e dai un cambiamento alla tua
                                vita e alla tua casa.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Resources;
