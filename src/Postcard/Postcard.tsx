import React, {FC} from 'react';
import './Postcard.css';

interface PostcardProps {
    classID:string;
    link?:string;
    hoverEffect:boolean;
    hr?:boolean;
    title?:string;
    text:any;
}

function printContent(props:any) {
    if(props.title){
        return (<>
            <p className={"text-align-center"}>
                <span className={"bold"}>{props.title}</span>
                <hr/>
                <br/>
                <br/>
                {props.text}
            </p>
        </>)
    }else if(props.hr){
        return (<>
            <p className={"text-align-center"}>
                <hr/>
                <br/>
                {props.text}
            </p>
        </>)
    }else{
        return (<>
            {props.text}
        </>)
    }
}

class Postcard extends React.Component<PostcardProps> {
    render() {
        return (<>
            <div className={`postCard-container ${this.props.classID}`}>
                <a href={this.props.link} {...this.props.link ? { target :"_blank" }:{}} className={`${!this.props.hoverEffect?'no-hover-effect':''}`}>
                    <div className={`postCard bk-white`}>
                        <div className={"container bk-red"}>
                            <div className={"img"}/>
                        </div>
                        {printContent(this.props)}
                    </div>
                </a>
            </div>
        </>);
    }
}

export default Postcard;
