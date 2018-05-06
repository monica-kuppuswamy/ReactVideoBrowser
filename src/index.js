import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoPlayer from './components/video_player';

const API_KEY = 'AIzaSyB7AtFxXE1uSjL9BlOPYhurZrkKn6chuuk';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('React JS');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term : term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });

      // when the kay and value has same name the above statement is equivalent
      // to writing this.setState({ videos : vidoes })
    });
  }

  render() {

    return (
      <div>
        <SearchBar onSearchTermChange={ term => this.videoSearch(term) }/>
        <VideoPlayer video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState( {selectedVideo} )}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
