
const YOUR_API_KEY = 'AIzaSyC31CnTEkoN-Y8lH0oA_6Bpr-FiWEoH3RY'

export const GET_YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${YOUR_API_KEY}`
 