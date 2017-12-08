var searchYouTube = (options, callback) => {
  // TOD

  const API_KEY = window.YOUTUBE_API_KEY;
  
  console.log(options);
  //var options = {

  options.maxResults = options.max || 10;
  options.key = options.key || API_KEY;
    
  //};

  console.log(options);

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
