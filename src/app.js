import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GamesPlaying from './components/GamesPlaying';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import fetchJsonp from 'fetch-jsonp';
let searchQuery = 'persona';

class GameJournal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        }
    }
    componentDidMount() {
        fetchJsonp('https://www.giantbomb.com/api/search/?api_key=7b08a75a0e48b4512e7ec46806fe64e734008c91&format=jsonp&field_list=name,deck,image&query=' + searchQuery,
            {jsonpCallback: 'json_callback'})
            .then(res => res.json())
            .then((data) => {
                this.setState({ games: data.results })
            })
            .catch(console.log)
    }
    render() {
        const date = new Date();
        const currentYear = date.getFullYear();
        return (
            <div>
                <Header title={'Game Journal'} />
                <GamesPlaying games={this.state.games[0]} />
                <Footer currentYear={currentYear} />
            </div>
        )
    }
}

ReactDOM.render(<GameJournal />, document.getElementById('app'));