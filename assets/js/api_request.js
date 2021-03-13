const api_url = 'http://localhost/wordpress/wp-json/api/v1/animes';
var cardCarousel = [];

async function getAnimes() {
    try {
        const api_animes = (await fetch(`${api_url}`)).json();
        return api_animes;

    } catch (error) { console.error(error) }
}

cardCarousel = getAnimes().then(cardsAnime => {

    let textCard = document.getElementsByClassName('text-card');
    let img = document.querySelectorAll('.card > img');
    
    for(let [index, value] of cardsAnime.entries()) {
        textCard[index].innerHTML = value.title;

        img[index].src = value.imagem;
        img[index].alt = value.title;
    }
});