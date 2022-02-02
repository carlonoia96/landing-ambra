import React, {FC} from 'react';
import './Interior-design-masterclass.css';
import AboutMasterclass from "../About-masterclass/About-masterclass";

class InteriorDesignMasterclass extends React.Component {
    render() {
        return (
            <>
                <div className={"interiorDesignMasterclass-container double-haight"}>
                    <div className={'interiorDesignMasterclass default-haight down'}>
                        <div className={"container"}>
                            <div className={"image"}/>
                            <div className={"text"}>
                                <p>Interior Design Masterclass</p>
                                <p>
                                    IL MIGLIOR CORSO <br/>
                                    PER DIVENTARE <br/>
                                    INTERIOR DESIGNER
                                </p>
                                <p>
                                    che ogni anno aiuta decine e decine di studenti come te a raggiungere il proprio obiettivo di diventare un professionista del design d'interni
                                </p>
                            </div>
                        </div>
                        <div className={"btn-iscriviti"}>
                            <p>
                                ISCRIVITI
                            </p>
                        </div>
                    </div>
                    <AboutMasterclass/>
                </div>
            </>
        );
    }
}

export default InteriorDesignMasterclass;
