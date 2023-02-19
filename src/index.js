import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './Components/search_bar';
import VideoList from './Components/video_list';
import VideoDetail from './Components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyCTyH6t082Wq_XdrJolf8Udi5lZQGU3evM';

// Create new component that produces some html
class App extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('kite');
    }

    videoSearch(term)
    {
        // Fetch Data from YT
        YTSearch(
            {key: API_KEY, term: term},
            (videos) => {
                this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
                });
            });
    }

    render() { 

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (
            <div> 
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// Display the component's generated HTMLs in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
