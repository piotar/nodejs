const axios = require('axios');

const getUser = (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return axios.get(url)
        .then(response => response.data);
}

const getAlbums = (id) => {
    const url = `https://jsonplaceholder.typicode.com/albums?userId=${id}`;
    return axios.get(url)
        .then(response => response.data);
}

const getPhotos = (id) => {
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;
    return axios.get(url)
        .then(response => response.data);
}

getUser(2)
    .then(user => {
        console.log(user.name);
        return getAlbums(user.id);
    })
    .then(albums => {
        const [album] = albums;
        console.log(album.title);
        return getPhotos(album.id);
    })
    .then(photos => {
        photos.forEach(photo => console.log(photo.title));
    })
    .catch(error => {
        console.log(error);
    });