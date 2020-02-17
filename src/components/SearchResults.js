import React from 'react';
import Game from './subcomponents/Game';

const SearchResults = (props) => (
    <div className="SearchResults-container">
        {
            props.games.map((gameMapped) => {
                return (
                    <Game
                    key={gameMapped.name}
                    url={gameMapped.image.super_url}
                    title={gameMapped.name}
                    desc={gameMapped.deck}
                />
                )
            })
        }

    </div>
);

export default SearchResults;