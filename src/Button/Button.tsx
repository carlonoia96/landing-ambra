import React, { FC } from 'react';
import './Button.css';

interface ButtonProps {
    text:string;
    link?:string;
    hideOnMobile?:boolean
    hideOnDesktop?:boolean
}

class Button extends React.Component<ButtonProps>{
    render() {
        return (<>
            <div className={`btn text-align-center ${this.props.hideOnMobile?'hide-on-mobile':''} ${this.props.hideOnDesktop?'hide-on-desktop':''} `}>
                <a href={this.props.link} {...this.props.link ? { target :"_blank" }:{}} className={`${!this.props.link?'no-hover-effect':''}`}>
                    <p className={"white bk-red"}>{this.props.text}</p>
                </a>
            </div>
        </>);
    }
}
export default Button;
