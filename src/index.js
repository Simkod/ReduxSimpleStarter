import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './Components/search_bar';

const API_KEY = 'AIzaSyBFt3nUIA_cT_Ya68hp7_EgVN3Z0bcHqaM';

// Create new component that produces some html
const App = () => 
{
    return (
        <div> 
            <SearchBar /> 
        </div>
        );
}

// Display the component's generated HTMLs in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
