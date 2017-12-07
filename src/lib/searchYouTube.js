var searchYouTube = (options, callback) => {
  // TODO
  
  var options = {
    q: options,
    maxResults: 10,
    key: window.YOUTUBE_API_KEY,
    part: 'snippet'
  };

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: options,
    success: function(data) {
      callback(data.items);
      console.log('success ', data);
    },
    error: function() {
      console.log('ajax failed');
    }
  });

};

window.searchYouTube = searchYouTube;
