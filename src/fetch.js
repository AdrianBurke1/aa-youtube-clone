export function getAllVideos(searchTerm) {
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=10&key=AIzaSyD7JKlGwU2XgEUHGZNUgVkWNrbirFFrS3M`).then((response) => response.json())
}