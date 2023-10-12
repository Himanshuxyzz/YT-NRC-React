export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${
  import.meta.env.VITE_REACT_APP_API_KEY
}`;

export const SEARCH_AUTO_COMPLETE_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const corsFix = "https://corsproxy.io/?";

export const SEARCH_SUGGESTIONS_API = `${corsFix}${SEARCH_AUTO_COMPLETE_API}`;

