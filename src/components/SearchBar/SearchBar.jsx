import React from 'react';
import './SearchBar-style.css';

export const SearchBar = ( {placeholder , handleChange} ) => (
    <input type="search" placeholder={placeholder} onChange={handleChange} className="search" />      
);