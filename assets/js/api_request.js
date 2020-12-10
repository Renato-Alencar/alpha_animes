import axios from 'axios';

const api_url = 'http://localhost/wordpress/wp-json/api/v1';

const getAnimes = async() => {
    try {
        const response = (await axios.get(`${api_url}/animes`)).data;
        return response;

    } catch(error) { console.error(`Error:`, error); }
};

getAnimes().then(animes => { animes.forEach(index => {
    var titles = [], images = [];
    titles.push(index.title);
    images.push(index.imagem);

    console.log(titles);
    console.log(images);
    })
});

