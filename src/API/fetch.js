export default function getAllVideos(searchTerm) {
return fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=10&key=AIzaSyCaqMfUjnoFnCJpUyih4VahXsPSwj1URNw`)
.then((response) => response.json())
}