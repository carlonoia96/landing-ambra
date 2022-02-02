import React, {FC} from 'react';
import './About-masterclass.css';

class AboutMasterclass extends React.Component {
    render() {
        return (
            <>
                <div className={"aboutMasterclass default-haight"}>
                    <div className={"text-container"}>
                        <p className={"title"}>
                            What about the Masterclass
                        </p>
                        <p className={"text"}>
                            Si pone l'obiettivo di aiutare chi come te è appassionato di design d'interni e vuole fare di
                            questa sua passione la propria professione. Partendo dalle basi, formerà una figura
                            professionale a 360°, concentrandosi tanto sull'aspetto teorico quanto su quello pratico per
                            raggiungere una solida conoscenza.
                        </p>
                    </div>
                    <div className={"btn-join-masterclass"}>
                        <p className={"title"}>
                            UNISCITI ALLA MASTERCLASS
                        </p>
                        <p className={"text"}>
                            Puoi finalmente iscriverti ora
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default AboutMasterclass;
