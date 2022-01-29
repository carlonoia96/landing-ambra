import React from 'react';
import {Link} from "react-router-dom"
import "./Toolbar.css"

interface ToolbarProps {
    toggleMenu: () => void;
    isMenuOpen: boolean;
    currentRoute: string;
    setCurrentRoute: (menu: string) => void;
}

class Toolbar extends React.Component<ToolbarProps> {

    render() {
        return (
            <div className="toolbar">
                <Link className="logo-container" to={'/'}>
                    <div className="background ambra-logo" onClick={() => this.props.setCurrentRoute('Home')}/>
                    <p>Interior Design Specialist</p>
                </Link>
                <div className="menu-indicator-container">
                    <label id="menu-label" className="animate__animated animate__faster animate__fadeIn"
                           onClick={this.props.toggleMenu}>
                        {this.props.currentRoute}
                    </label>
                    <button className={`menu-icon ${(this.props.isMenuOpen ? 'background-white' : '')}`}
                            onClick={this.props.toggleMenu}>
                        <i className={`code-icon icon-crea ${(this.props.isMenuOpen ? 'rotate-right' : '')}`}></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default Toolbar;
