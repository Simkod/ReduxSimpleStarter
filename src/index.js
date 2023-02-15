import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './Components/search_bar';

const API_KEY = 'AIzaSyBFt3nUIA_cT_Ya68hp7_EgVN3Z0bcHqaM';

YTSearch(
    {key: API_KEY, term: 'surfboards'},
    function(data) {console.log(data);}
    );

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
