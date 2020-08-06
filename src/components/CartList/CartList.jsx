import React from 'react';
import { CardListComponent } from '../CardListComponent/CardListComponent';
import './CartList-style.css';

export const CartList= props =>{
    return (<div className="root-class">
                {props.locations.map( locations => 
                    <CardListComponent key={locations.id} locations={locations} />)}
            </div>);
};