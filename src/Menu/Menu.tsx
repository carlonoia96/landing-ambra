import React from 'react';
import { Link } from "react-router-dom";
import menus from "./menu.json";
import "./Menu.css"

interface MenuProps {
    fade: string | undefined;
    toggleMenu: () => void;
    currentRoute: string;
    setCurrentRoute: (menu: string) => void;
}

class Menu extends React.Component<MenuProps> {

    routeOnOpening: string | null = null;

    componentDidMount(){
        this.routeOnOpening = this.props.currentRoute;
        this.props.setCurrentRoute('Menu');
    }

    componentWillUnmount() {
        document.body.classList.remove("overflow-y-hidden");
        document.body.style.paddingRight = 'initial';

        if(this.routeOnOpening){
            this.props.setCurrentRoute(this.routeOnOpening);
        }
    }

    onClickMenu(menu: any){
        this.routeOnOpening = null;
        this.props.toggleMenu();
        this.props.setCurrentRoute(menu.title);
    }

    render() {

        const scrollDiv = document.createElement("div");
        scrollDiv.className = "scrollbar-measure";
        document.body.appendChild(scrollDiv);

        // Gestione width scrollbar
        const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.classList.add("overflow-y-hidden");
        document.body.style.paddingRight = (scrollbarWidth+'px');
        document.body.removeChild(scrollDiv);

        return (
            <div
                className={`menu-container animate__animated animate__faster ${this.props.fade}`}
            >
                <div className="menu-grey-box">
                    <div className="menu-header menu-element">
                        <p>
                            Rimaniamo in contatto 👇
                            <br />
                            <a href="mailto: info@unacasainarmonia.it">info@internididesign.com</a>
                        </p>
                    </div>
                    <div className="menu-body menu-element">
                        {menus.map((menu) => (
                            <a className="menu-item" href={menu.url} target={"_blank"} onClick={() => this.onClickMenu(menu)} >
                                {menu.title}
                            </a>
                        ))}
                    </div>
                    {/*<div className="menu-footer  menu-element">
                        <a
                            href="https://www.instagram.com/co-de-agency/"
                            className="background instagram"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {" "}
                        </a>
                        <a
                            href="https://www.linkedin.com/company/co-de-agency"
                            className="background facebook"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {" "}
                        </a>
                    </div>*/}
                </div>
            </div>
        );
    }
}

export default Menu;
