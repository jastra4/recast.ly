class VideoList extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log("run", this.props);
    this.props.onChangeVideo(window.exampleVideoData[3]);
    return (
      <div className="video-list">
        { window.exampleVideoData.map((video, index) => 
          console.log(this.props);
          <VideoListEntry onChangeVideo={this.props.changeVideo} key={index} videos={video} />
        )}
      </div>
    );
  }
  
}
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
