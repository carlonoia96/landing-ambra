import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './Toolbar/Toolbar';
import Menu from './Menu/Menu';
import {Routes, Route} from 'react-router-dom';
import Home from './Home/Home';


const FADE = {
    IN: 'animate__slideInDown',
    OUT: 'animate__slideOutUp'
}

interface AppState {
    isMenuOpen: boolean;
    fade?: string;
    currentRoute: string;
}

class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {isMenuOpen: false, currentRoute: 'Home'};
    }

    toggleMenu = () => {
        if (this.state.isMenuOpen) {
            this.setState({
                fade: FADE.OUT
            });
            setTimeout(() => {
                this.setState({isMenuOpen: !this.state.isMenuOpen});
            }, 400)
        } else {
            this.setState({
                isMenuOpen: !this.state.isMenuOpen,
                fade: FADE.IN
            });
        }
    }

    setCurrentRoute = (currentRoute: string) => {
        this.setState({currentRoute});
    }

    render() {
        return (<>
            <Toolbar
                toggleMenu={this.toggleMenu}
                isMenuOpen={this.state.isMenuOpen}
                currentRoute={this.state.currentRoute}
                setCurrentRoute={this.setCurrentRoute}
            />
            {
                this.state.isMenuOpen &&
                <Menu
                    fade={this.state.fade}
                    toggleMenu={this.toggleMenu}
                    currentRoute={this.state.currentRoute}
                    setCurrentRoute={this.setCurrentRoute}
                />
            }
            <div className={'container'}>
                <Routes>
                    <Route path="/landing/" element={<Home setCurrentRoute={this.setCurrentRoute}/>}/>
                    <Route path="/next" element={<Home setCurrentRoute={this.setCurrentRoute}/>}/>
                    {/*<Route path="/*" element={<Page404/>}/>*/}
                </Routes>
            </div>
        </>);
    }
}

export default App;
