class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: window.exampleVideoData
    };
    
    this.onChangeVideo = this.onChangeVideo.bind(this);
    this.onSearchVideo = this.onSearchVideo.bind(this);
  }
  
  onChangeVideo(video) {
    //console.log('onChangeVideo says: ', video);
    this.setState({
      video: video
    });
  }

  onSearchVideo(query) {
    console.log('query ran ', query);

    this.setState({
      videoList: query
    });
  }
  
  render() {
    //console.log('app ',this.state.videoList);
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onSearchVideo={this.onSearchVideo}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video} />
          </div>
          <div className="col-md-5">
            <VideoList onChangeVideo={this.onChangeVideo} videos={this.state.videoList} />
          </div>
        </div>
      </div>
    );
  } 
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
