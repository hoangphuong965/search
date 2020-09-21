import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  componentDidMount(){
    this.onTermSubmit()
  }
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="sixteen wide column">
            <SearchBar onFormSubmit={this.onTermSubmit} />
          </div>
          <div className="ten wide column">
            <VideoDetails video={this.state.selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
