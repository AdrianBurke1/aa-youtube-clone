// export default function getAllVideos(searchTerm) {
// return fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=10&key=AIzaSyCaqMfUjnoFnCJpUyih4VahXsPSwj1URNw`)
// .then((response) => response.json())
// }
const API_KEY = 'AIzaSyCaqMfUjnoFnCJpUyih4VahXsPSwj1URNw';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

const fetchData = async (searchTerm) => {
  try {
    const response = await fetch(`${BASE_URL}/search?part=snippet&maxResults=10&q=${searchTerm}&type=video&key=${API_KEY}`);
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error(error);
  }
};
export default fetchData;