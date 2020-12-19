const api_url = 'http://localhost/wordpress/wp-json/api/v1/animes';
var cardCarousel = [];

async function getAnimes() {
    try {
        const api_animes = (await fetch(`${api_url}`)).json();
        return api_animes;

    } catch (error) { console.error(error) }
}

cardCarousel = getAnimes().then(cardAnime => {

    let textCard = document.getElementsByClassName('text-card');
    let img = document.querySelectorAll('.card > img');
    
    for(let index = 0; index < cardAnime.length; index++) {
        textCard[index].innerHTML = cardAnime[index].title;

        img[index].src = cardAnime[index].imagem;
        img[index].alt = cardAnime[index].title;
    }
});
