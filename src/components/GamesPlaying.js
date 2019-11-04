import React from 'react';
import Game from './subcomponents/Game'

const GamesPlaying = (props) => (
    <div>
        {
            props.games.map((game) => (
                <Game
                    key={game}
                    title={game}
                />
            ))
        }
    </div>
)

export default GamesPlaying;