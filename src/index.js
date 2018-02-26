import React, { Component } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBDY9KC-bBiXzH8S7OrkMWm_u14hC7zLaQ';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {

  constructor(props){
    super(props);
    this.state= { 
      videos : [],
      selectedVideo: null
    };
    
    this.videoSearch('javascript');
  }



  videoSearch(term){
    YTSearch({ key : API_KEY, term : term}, (videos) => {
      this.setState({
        videos : videos,
        selectedVideo: videos[0]
      }); //this.setState({videos : videos}); When two variables are of the same name
    } )
  }

  render(){

    const videoSearch = _.debounce((term) => {this.videoSearch(term)} ,300);
    return (
      <div>
    
        <SearchBar onSearchTermChange = {videoSearch} />
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect = { selectedVideo => this.setState({selectedVideo})}
          videos = {this.state.videos} />
        
      </div>
      );
  }
 
}

//const App is class, <App /> is an instance
ReactDOM.render(<App />, document.querySelector(".container"));