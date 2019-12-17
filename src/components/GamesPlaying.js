import React from 'react';
import Game from './subcomponents/Game'
import AddGame from './subcomponents/AddGame'

const GamesPlaying = (props) => (
    <div>
        <AddGame />
        <ul>
        
                <Game
                    key={props.games.name}
                    url={'props.games.image.small_url'}
                    title={'props.games.name'}
                    desc={'props.games.deck'}
                />
        
        </ul>
    </div>
)

export default GamesPlaying;