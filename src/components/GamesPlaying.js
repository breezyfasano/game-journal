import React from 'react';
import Game from './subcomponents/Game'
import AddGame from './subcomponents/AddGame'

const GamesPlaying = (props) => (
    <div>
        <AddGame />
        {
                props.games.name && (<Game
                    key={props.games.name}
                    url={'game.image.small_url'}
                    title={props.games.name}
                    desc={'game.deck'}
                />)
        }
    </div>
);

export default GamesPlaying;