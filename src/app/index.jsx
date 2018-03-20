import React from 'React';
import { render } from 'react-dom';

import './css/styles.css';
import reactLogo from './images/React-icon.png';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
    
    greet = () => 'Welcome to ReactSlim Boilerplate';
    
    render() {
        return(
            <div className="wrapper">
                <Header/>
                <div className="mainContent">
                    <h1>{this.greet()}</h1>
                    <img src={ reactLogo } alt="react-icon" height="64" width="100" />
                </div>
                <Footer/>       
            </div>
        );
    }
}

render(<App/>, document.getElementById('root'));