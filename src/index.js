import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './Components/search_bar';
import VideoList from './Components/video_list';

const API_KEY = 'AIzaSyBFt3nUIA_cT_Ya68hp7_EgVN3Z0bcHqaM';

// Create new component that produces some html
class App extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = { videos: [] };

        // Fetch Data from YT
        YTSearch(
            {key: API_KEY, term: 'surfboards'},
            (videos) => {
                this.setState({videos});
                }
            );
    }

    render() { 
        return (
            <div> 
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Display the component's generated HTMLs in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
