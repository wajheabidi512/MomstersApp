import React from 'react';
import './CardListComponent-style.css';

export const CardListComponent = props => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.locations.id}??set=set2&size=180x180`} alt={props.locations.name} />
        <h1>{props.locations.name}</h1>
        <p>{props.locations.email}</p>
    </div>
);