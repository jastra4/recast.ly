class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  
    this.onSubmit = this.onSubmit.bind(this);
  }

  search() {
    //console.log(this.state.search);
    var options = {
      q: this.state.search,
      maxResults: 10,
      part: 'snippet'
    };

    window.searchYouTube(options, this.props.onSearchVideo);
  }

  onSubmit() {
    //console.log(this.refs.search.value);
    this.setState({
      search: this.refs.search.value
    });
    this.search();
  }

  render() {
    //setInterval(function(){console.log(this.state)}, 1000);
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" ref="search"/>
        <button className="btn hidden-sm-down" onClick={this.onSubmit}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }

}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
