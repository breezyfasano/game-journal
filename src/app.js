import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import fetchJsonp from 'fetch-jsonp';
import AddGame from './components/subcomponents/AddGame';


class GameJournal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            isLoaded: false,
            error: null,
            searchQuery: ''
        }
        this.handleAddGame= this.handleAddGame.bind(this);
    }
    componentDidMount() {
        let searchQuery = 'Stardew';
        fetchJsonp('https://www.giantbomb.com/api/search/?api_key=7b08a75a0e48b4512e7ec46806fe64e734008c91&format=jsonp&field_list=name,deck,image&resources=game&query=' + searchQuery,
            { jsonpCallback: 'json_callback' })
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    games: data.results,
                    isLoaded: true
                });
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    handleAddGame() {
        this.setState(() => ({
            searchQuery: 'Stardew'
        }));
    }

    render() {
        const date = new Date();
        const currentYear = date.getFullYear();
        const { error, isLoaded, games } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Header title={'Game Journal'} />
                    <AddGame />
                    <button onPress={this.handleAddGame}>button</button>
                    {this.state.games && <SearchResults games={this.state.games} />}
                    <Footer currentYear={currentYear} />
                </div>
            )
        }
    }
}

ReactDOM.render(<GameJournal />, document.getElementById('app'));