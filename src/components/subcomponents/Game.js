import React from 'react';

const Game = (props) => (
    <div className="game" key={props.key}>
        <img src={props.url} className="game__thumbnail" />
        <div className="game__info">
            <h3 className="game__title">{props.title}</h3>
            <p className="game__description">{props.desc}</p>
        </div>
    </div>
)

export default Game;