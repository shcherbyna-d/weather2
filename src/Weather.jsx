import React, { Component } from 'react';
import './Weather.scss';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import Menu from './components/menu/Menu';

export default class Weather extends Component {
	state = {
		isMenuShow: false,
	}

	toggleMenu = () => {
		this.setState((state) => {
			return {
				isMenuShow: !state.isMenuShow,
			}
		})
	}

    render() {
        return (
            <div className="weather">
                <Header url={'https://images.unsplash.com/photo-1553969196-73b12db1c2ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'}/>
                <Main />
                <Menu isMenuShow={this.state.isMenuShow} toggleMenu={this.toggleMenu} />
            </div>
        );
    }
}
