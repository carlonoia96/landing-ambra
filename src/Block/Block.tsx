import React, { FC } from 'react';
import './Block.css';

class Block extends React.Component{
    render() {
        return (
            <>
                <div className={"block"}>
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
                    <div className={'block-title'}>
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
            </>
        );
    }
}

export default Block;
