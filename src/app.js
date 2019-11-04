import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GamesPlaying from './components/GamesPlaying';

class GameJournal extends React.Component {
    state = {
        games: ['Stardew Valley', 'Persona 5']
    }
    render() {
        const date = new Date();
        const currentYear = date.getFullYear();
        return (
            <div>
                <Header title={'Game Journal'} />
                <GamesPlaying games={this.state.games} />
                <Footer currentYear={currentYear} />
            </div>
        )
    }
}

ReactDOM.render(<GameJournal />, document.getElementById('app'));