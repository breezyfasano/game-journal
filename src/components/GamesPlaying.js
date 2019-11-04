import React from 'react';
import Game from './subcomponents/Game'
import AddGame from './subcomponents/AddGame'

const GamesPlaying = (props) => (
    <div>
        <AddGame />
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